import "@shopify/ui-extensions/admin";
import "@shopify/ui-extensions/preact";
import { render } from "preact";
import { useEffect, useState } from "preact/hooks";
import type {} from "@shopify/ui-extensions/admin.order-details.block.render";

const DEFAULT_LARAVEL_API_URL = "https://api-local.returnfast.net";
const LARAVEL_API_URL_SETTING_KEY = "laravel_api_url";

interface LaravelEnvelope<T> {
  code?: number | string;
  message?: string;
  error?: string | null;
  data?: T;
}

class ApiError extends Error {
  constructor(
    public readonly code: string,
    message = code,
  ) {
    super(message);
  }
}

interface ToggleState {
  enabled: boolean | null;
  defaultReturnEnabled: boolean;
  resolvedEnabled: boolean;
}

interface StoredToken {
  token: string;
  expire_at: number;
}

let refreshPromise: Promise<string> | null = null;
let lastShopDomain: string | null = null;

async function getShopifyIdToken(): Promise<string> {
  const idToken = await shopify.auth.idToken();
  if (!idToken) throw new Error("id-token-empty");
  return idToken;
}

function shopFromToken(token: string): string {
  const payload = JSON.parse(atob(token.split(".")[1] ?? "")) as { dest?: string };
  const shop = (payload.dest ?? "").replace(/^https:\/\//, "");
  if (!/^[a-zA-Z0-9-]+\.myshopify\.com$/.test(shop)) {
    throw new Error("shop-domain-unavailable");
  }
  return shop;
}

async function getAccessToken(): Promise<string> {
  const shopifyToken = await getShopifyIdToken();
  const shop = shopFromToken(shopifyToken);
  const cached = readToken(shop);
  if (cached && cached.expire_at - 60 > Math.floor(Date.now() / 1000)) {
    lastShopDomain = shop;
    return cached.token;
  }
  return refreshToken(shopifyToken);
}

async function refreshToken(existingShopifyToken?: string): Promise<string> {
  if (!refreshPromise) {
    refreshPromise = (async () => {
      const shopifyToken = existingShopifyToken ?? (await getShopifyIdToken());
      const shop = shopFromToken(shopifyToken);
      const res = await fetch(`${laravelApiUrl()}/api/shopify/admin/session/exchange`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_token: shopifyToken }),
      });
      const body = (await res.json().catch(() => ({}))) as LaravelEnvelope<StoredToken & { shop_domain?: string }>;
      if (!res.ok || body.code !== 0 || !body.data?.token || !body.data.expire_at) {
        throw new Error(String(body.error ?? body.message ?? `token-exchange-${res.status}`));
      }
      const finalShop = body.data.shop_domain ?? shop;
      lastShopDomain = finalShop;
      writeToken(finalShop, { token: body.data.token, expire_at: body.data.expire_at });
      return body.data.token;
    })().finally(() => {
      refreshPromise = null;
    });
  }
  return refreshPromise;
}

function clearToken(): void {
  const store = sessionStore();
  if (store && lastShopDomain) store.removeItem(storageKey(lastShopDomain));
}

function readToken(shop: string): StoredToken | null {
  const store = sessionStore();
  if (!store) return null;
  try {
    const raw = store.getItem(storageKey(shop));
    return raw ? (JSON.parse(raw) as StoredToken) : null;
  } catch {
    return null;
  }
}

function writeToken(shop: string, token: StoredToken): void {
  const store = sessionStore();
  if (!store) return;
  store.setItem(storageKey(shop), JSON.stringify(token));
}

function sessionStore(): Storage | null {
  return typeof window === "undefined" ? null : window.sessionStorage;
}

function storageKey(shop: string): string {
  return `returnfast:${shop}:admin:access`;
}

function orderNumericId(gid: string): string {
  const id = gid.split("/").pop();
  if (!id || !/^\d+$/.test(id)) throw new Error("invalid-order-id");
  return id;
}

async function apiRequest<T>(path: string, init?: RequestInit, retried = false): Promise<T> {
  const token = await getAccessToken();
  const res = await fetch(`${laravelApiUrl()}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });
  const body = (await res.json().catch(() => ({}))) as LaravelEnvelope<T>;
  if (res.status === 401 && !retried && (body.code === "token_expired" || body.code === "invalid_token")) {
    clearToken();
    await refreshToken();
    return apiRequest<T>(path, init, true);
  }
  if (!res.ok || body.code !== 0 || !body.data) {
    throw new ApiError(
      String(body.code ?? `api-${res.status}`),
      String(body.error ?? body.message ?? `api-${res.status}`),
    );
  }
  return body.data;
}

function laravelApiUrl(): string {
  const value = readSettingValue(LARAVEL_API_URL_SETTING_KEY);
  if (!value) return DEFAULT_LARAVEL_API_URL;
  try {
    return new URL(value).toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_LARAVEL_API_URL;
  }
}

function readSettingValue(key: string): string | undefined {
  const settings = (shopify as unknown as { settings?: unknown }).settings;
  const source = readSignalValue(settings);
  if (source === null || typeof source !== "object") return undefined;
  const value = (source as Record<string, unknown>)[key];
  return typeof value === "string" ? value : undefined;
}

function readSignalValue(signal: unknown): unknown {
  if (signal === null || typeof signal !== "object") return undefined;
  const source = signal as { value?: unknown; current?: unknown; currentValue?: unknown };
  return source.value ?? source.current ?? source.currentValue;
}

async function fetchToggle(orderId: string): Promise<ToggleState> {
  return apiRequest<ToggleState>(`/api/shopify/admin/orders/${orderId}/return-toggle`);
}

async function saveToggle(orderId: string, enabled: boolean | null): Promise<ToggleState> {
  return apiRequest<ToggleState>(`/api/shopify/admin/orders/${orderId}/return-toggle`, {
    method: "PUT",
    body: JSON.stringify({ enabled }),
  });
}

function App() {
  const [state, setState] = useState<ToggleState | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    const gid = shopify.data.selected[0]?.id ?? null;
    setOrderId(gid);
    if (!gid) {
      setError("no-order-context");
      setLoading(false);
      return;
    }
    (async () => {
      try {
        setState(await fetchToggle(orderNumericId(gid)));
      } catch (e) {
        setError(e instanceof ApiError ? e.code : e instanceof Error ? e.message : "load-failed");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function onSave(next: boolean | null) {
    if (!orderId) {
      setError("no-order-context");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      setState(await saveToggle(orderNumericId(orderId), next));
    } catch (e) {
      setError(e instanceof ApiError ? e.code : e instanceof Error ? e.message : "save-failed");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <s-spinner />;
  }

  if (error === "order-not-synced" || error === "order_not_synced") {
    return (
      <s-stack gap="base">
        <s-text>ReturnFast · Customer return button</s-text>
        <s-text tone="critical">Order sync is still pending.</s-text>
        <s-button
          onClick={() => {
            setLoading(true);
            setError(null);
            if (orderId) {
              fetchToggle(orderNumericId(orderId))
                .then(setState)
                .catch((e) => setError(e instanceof ApiError ? e.code : e instanceof Error ? e.message : "load-failed"))
                .finally(() => setLoading(false));
            }
          }}
        >
          Retry
        </s-button>
      </s-stack>
    );
  }

  if (error === "missing_shopify_access_token") {
    return (
      <s-stack gap="base">
        <s-text>ReturnFast · Customer return button</s-text>
        <s-text tone="critical">Shopify authorization needs to be reconnected in ReturnFast settings.</s-text>
      </s-stack>
    );
  }

  return (
    <s-stack gap="base">
      <s-text>ReturnFast · Customer return button</s-text>
      {state && (
        <s-text>
          Shop default: {state.defaultReturnEnabled ? "enabled" : "disabled"} ·
          Effective: {state.resolvedEnabled ? "enabled" : "disabled"}
        </s-text>
      )}
      <s-button onClick={() => onSave(true)} disabled={saving || state?.enabled === true}>
        Enable return
      </s-button>
      <s-button onClick={() => onSave(false)} disabled={saving || state?.enabled === false}>
        Disable return
      </s-button>
      <s-button onClick={() => onSave(null)} disabled={saving || state?.enabled === null}>
        Use shop default
      </s-button>
      {error && <s-text tone="critical">{error}</s-text>}
    </s-stack>
  );
}

export default function extension() {
  render(<App />, document.body);
}
