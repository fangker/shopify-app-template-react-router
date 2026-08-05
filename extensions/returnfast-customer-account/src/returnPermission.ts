import { RETURNFAST_LARAVEL_API_URL } from "./portalConfig.generated.js";

export interface ReturnPermissionResult {
  enabled: boolean;
  source: "shop_default" | "order_override" | "error" | string;
  orderEnabled: boolean | null;
  defaultReturnEnabled: boolean;
}

interface LaravelEnvelope<T> {
  code?: number | string;
  data?: T;
  error?: string | null;
  message?: string;
}

interface StoredToken {
  token: string;
  expire_at: number;
}

let refreshPromise: Promise<string> | null = null;
let lastShopDomain: string | null = null;

export function disabledPermission(source = "error"): ReturnPermissionResult {
  return {
    enabled: false,
    source,
    orderEnabled: null,
    defaultReturnEnabled: false,
  };
}

export async function fetchReturnPermission(api: unknown): Promise<ReturnPermissionResult> {
  let stage = "read-order";

  try {
    const orderGid = readOrderId(api);
    stage = "get-access-token";
    const token = await getAccessToken(api);
    stage = "permission-request";
    const res = await fetch(
      `${RETURNFAST_LARAVEL_API_URL}/api/shopify/customer/return-permission?order_gid=${encodeURIComponent(orderGid)}`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    const body = (await res.json().catch(() => ({}))) as LaravelEnvelope<ReturnPermissionResult>;

    if (res.status === 401 && (body.code === "token_expired" || body.code === "invalid_token")) {
      clearToken();
      stage = "refresh-access-token";
      const retryToken = await refreshToken(api);
      stage = "permission-retry";
      const retry = await fetch(
        `${RETURNFAST_LARAVEL_API_URL}/api/shopify/customer/return-permission?order_gid=${encodeURIComponent(orderGid)}`,
        { headers: { Authorization: `Bearer ${retryToken}` } },
      );
      const retryBody = (await retry.json().catch(() => ({}))) as LaravelEnvelope<ReturnPermissionResult>;
      if (!retry.ok || retryBody.code !== 0 || !retryBody.data) {
        logPermissionError("permission-retry", {
          status: retry.status,
          code: retryBody.code,
          orderGid,
        });
        return disabledPermission(retryBody.code === "order_not_synced" ? "order_not_synced" : "error");
      }
      return retryBody.data;
    }

    if (!res.ok || body.code !== 0 || !body.data) {
      logPermissionError("permission-response", {
        status: res.status,
        code: body.code,
        orderGid,
      });
      return disabledPermission(body.code === "order_not_synced" ? "order_not_synced" : "error");
    }

    return body.data;
  } catch (error) {
    logPermissionError(stage, { error: errorMessage(error) });
    return disabledPermission("error");
  }
}

function logPermissionError(stage: string, details: Record<string, unknown>): void {
  console.error("[ReturnFast] customer return permission failed", {
    stage,
    ...details,
  });
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

async function getAccessToken(api: unknown): Promise<string> {
  const shopifyToken = await getShopifySessionToken(api);
  const shopDomain = readShopFromSessionToken(shopifyToken);
  const cached = readToken(shopDomain);
  if (cached && cached.expire_at - 60 > Math.floor(Date.now() / 1000)) {
    lastShopDomain = shopDomain;
    return cached.token;
  }

  return refreshToken(api, shopifyToken);
}

async function refreshToken(api: unknown, existingShopifyToken?: string): Promise<string> {
  if (!refreshPromise) {
    refreshPromise = (async () => {
      const shopifyToken = existingShopifyToken ?? (await getShopifySessionToken(api));
      const shopDomain = readShopFromSessionToken(shopifyToken);
      const res = await fetch(`${RETURNFAST_LARAVEL_API_URL}/api/shopify/customer/session/exchange`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_token: shopifyToken }),
      });
      const body = (await res.json().catch(() => ({}))) as LaravelEnvelope<StoredToken & { shop_domain?: string }>;
      if (!res.ok || body.code !== 0 || !body.data?.token || !body.data.expire_at) {
        throw new Error(String(body.error ?? body.message ?? `session-exchange-${res.status}`));
      }
      const finalShopDomain = body.data.shop_domain ?? shopDomain;
      lastShopDomain = finalShopDomain;
      writeToken(finalShopDomain, {
        token: body.data.token,
        expire_at: body.data.expire_at,
      });
      return body.data.token;
    })().finally(() => {
      refreshPromise = null;
    });
  }

  return refreshPromise;
}

function clearToken(): void {
  const store = sessionStore();
  const shop = lastShopDomain;
  if (store && shop) store.removeItem(storageKey(shop));
}

function readToken(shopDomain: string): StoredToken | null {
  const store = sessionStore();
  if (!store) return null;
  try {
    const raw = store.getItem(storageKey(shopDomain));
    return raw ? (JSON.parse(raw) as StoredToken) : null;
  } catch {
    return null;
  }
}

function writeToken(shopDomain: string, token: StoredToken): void {
  const store = sessionStore();
  if (!store) return;
  store.setItem(storageKey(shopDomain), JSON.stringify(token));
}

function sessionStore(): Storage | null {
  return typeof globalThis === "undefined"
    ? null
    : ((globalThis as { sessionStorage?: Storage }).sessionStorage ?? null);
}

function storageKey(shopDomain: string): string {
  return `returnfast:${shopDomain}:customer:access`;
}

async function getShopifySessionToken(api: unknown): Promise<string> {
  const getter = (api as { sessionToken?: { get?: () => Promise<string> } } | null)
    ?.sessionToken?.get;
  if (typeof getter !== "function") {
    throw new Error("session-token-unavailable");
  }

  return getter();
}

function readOrderId(api: unknown): string {
  const directOrderId = (api as { orderId?: unknown } | null)?.orderId;
  if (typeof directOrderId === "string" && directOrderId.trim()) {
    return directOrderId.trim();
  }

  const target = (api as { target?: { value?: unknown } } | null)?.target?.value;
  const orderFromTarget = readOrderField(target);
  if (orderFromTarget) return orderFromTarget;
  const orderFromApi = readOrderField(api);
  if (orderFromApi) return orderFromApi;
  throw new Error("order-id-unavailable");
}

function readOrderField(host: unknown): string | undefined {
  if (host === null || typeof host !== "object") return undefined;
  const order = (host as { order?: unknown }).order;
  if (!order || typeof order !== "object") return undefined;
  const direct = (order as { id?: unknown }).id;
  if (typeof direct === "string" && direct) return direct;
  const current = (order as { current?: { id?: unknown } }).current;
  if (current && typeof current.id === "string" && current.id) return current.id;
  const currentValue = (order as { currentValue?: { id?: unknown } }).currentValue;
  if (currentValue && typeof currentValue.id === "string" && currentValue.id) {
    return currentValue.id;
  }
  const value = (order as { value?: { id?: unknown } }).value;
  if (value && typeof value.id === "string" && value.id) return value.id;
  return undefined;
}

export function readShopFromSessionToken(token: string): string {
  const payload = JSON.parse(atob(token.split(".")[1] ?? "")) as {
    dest?: string;
    iss?: string;
  };
  const dest = payload.dest ?? payload.iss ?? "";
  const shopDomain = dest.replace(/^https:\/\//, "");
  if (!/^[a-zA-Z0-9-]+\.myshopify\.com$/.test(shopDomain)) {
    throw new Error("shop-domain-unavailable");
  }
  return shopDomain;
}
