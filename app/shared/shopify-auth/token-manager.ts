import type {
  LaravelEnvelope,
  ReturnFastTokenPayload,
  TokenManagerConfig,
} from "./config";
import { parseShopDomainFromShopifyToken, readShopFromUrl } from "./shopify-token";

interface StoredToken {
  token: string;
  expire_at: number;
}

export interface TokenManager {
  getAccessToken(): Promise<string>;
  refreshToken(): Promise<string>;
  clearToken(): void;
  getShopDomain(): string | null;
}

const EARLY_REFRESH_SECONDS = 60;

export function createTokenManager(config: TokenManagerConfig): TokenManager {
  let refreshPromise: Promise<string> | null = null;
  let lastShopDomain: string | null = null;

  function storage(): Storage | null {
    return typeof window === "undefined" ? null : window.sessionStorage;
  }

  function key(shopDomain: string): string {
    return `returnfast:${shopDomain}:${config.scope}:access`;
  }

  function read(shopDomain: string): StoredToken | null {
    const raw = storage()?.getItem(key(shopDomain));
    if (!raw) return null;
    try {
      const value = JSON.parse(raw) as StoredToken;
      if (!value.token || !value.expire_at) return null;
      return value;
    } catch {
      return null;
    }
  }

  function write(shopDomain: string, token: StoredToken): void {
    storage()?.setItem(key(shopDomain), JSON.stringify(token));
  }

  function findFreshCachedToken(): { shopDomain: string; token: StoredToken } | null {
    const store = storage();
    if (!store) return null;
    const suffix = `:${config.scope}:access`;
    for (let index = 0; index < store.length; index += 1) {
      const storageKey = store.key(index);
      if (!storageKey?.startsWith("returnfast:") || !storageKey.endsWith(suffix)) {
        continue;
      }
      const shopDomain = storageKey.slice(
        "returnfast:".length,
        storageKey.length - suffix.length,
      );
      const cached = read(shopDomain);
      if (cached && isFresh(cached)) {
        return { shopDomain, token: cached };
      }
    }

    return null;
  }

  function isFresh(token: StoredToken): boolean {
    return token.expire_at - EARLY_REFRESH_SECONDS > Math.floor(Date.now() / 1000);
  }

  async function exchange(): Promise<string> {
    const shopifyToken = await config.getShopifyToken();
    const shopDomain =
      parseShopDomainFromShopifyToken(shopifyToken) ?? readShopFromUrl();
    if (!shopDomain) {
      throw new Error("shop-domain-unavailable");
    }

    const res = await fetch(`${config.apiBaseUrl}${config.exchangePath}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session_token: shopifyToken }),
    });
    const body = (await res.json().catch(() => ({}))) as
      | LaravelEnvelope<ReturnFastTokenPayload>
      | ReturnFastTokenPayload;
    if (!res.ok) {
      const message =
        "error" in body && body.error ? body.error : `session-exchange-${res.status}`;
      throw new Error(String(message));
    }

    const payload: ReturnFastTokenPayload =
      "data" in body && body.data ? body.data : (body as ReturnFastTokenPayload);
    if (!payload.token || !payload.expire_at) {
      throw new Error("returnfast-token-empty");
    }

    const finalShopDomain = payload.shop_domain ?? shopDomain;
    lastShopDomain = finalShopDomain;
    write(finalShopDomain, { token: payload.token, expire_at: payload.expire_at });
    return payload.token;
  }

  async function refreshToken(): Promise<string> {
    if (!refreshPromise) {
      refreshPromise = exchange().finally(() => {
        refreshPromise = null;
      });
    }
    return refreshPromise;
  }

  async function getAccessToken(): Promise<string> {
    const shopDomain = lastShopDomain ?? readShopFromUrl();
    if (shopDomain) {
      const cached = read(shopDomain);
      if (cached && isFresh(cached)) {
        lastShopDomain = shopDomain;
        return cached.token;
      }
    }

    const cached = findFreshCachedToken();
    if (cached) {
      lastShopDomain = cached.shopDomain;
      return cached.token.token;
    }

    return refreshToken();
  }

  function clearToken(): void {
    const shopDomain = lastShopDomain ?? readShopFromUrl();
    if (shopDomain) {
      storage()?.removeItem(key(shopDomain));
    }
  }

  return {
    getAccessToken,
    refreshToken,
    clearToken,
    getShopDomain: () => lastShopDomain ?? readShopFromUrl(),
  };
}
