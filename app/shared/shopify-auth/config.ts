export type ReturnFastJwtScope = "shopify_admin" | "shopify_customer";
export type ShopifySurfaceScope = "admin" | "customer";

export interface ReturnFastTokenPayload {
  token: string;
  expire_at: number;
  shop_domain?: string;
  scope?: ReturnFastJwtScope;
}

export interface LaravelEnvelope<T> {
  code?: number | string;
  data?: T;
  error?: string | null;
  message?: string;
}

export interface TokenManagerConfig {
  scope: ShopifySurfaceScope;
  jwtScope: ReturnFastJwtScope;
  apiBaseUrl: string;
  exchangePath:
    | "/api/shopify/admin/session/exchange"
    | "/api/shopify/customer/session/exchange";
  getShopifyToken: () => Promise<string>;
}

export function defaultLaravelApiUrl(): string {
  return (
    (typeof window !== "undefined"
      ? (window as unknown as { ENV?: { LARAVEL_API_URL?: string } }).ENV
          ?.LARAVEL_API_URL
      : undefined) ??
    import.meta.env.VITE_LARAVEL_API_URL ??
    "https://api-local.returnfast.net"
  );
}
