import { createApiClient } from "../shared/shopify-auth/api-client";
import { defaultLaravelApiUrl } from "../shared/shopify-auth/config";
import { createTokenManager } from "../shared/shopify-auth/token-manager";

declare global {
  interface Window {
    shopify?: {
      idToken: () => Promise<string>;
    };
  }
}

export const adminTokenManager = createTokenManager({
  scope: "admin",
  jwtScope: "shopify_admin",
  apiBaseUrl: defaultLaravelApiUrl(),
  exchangePath: "/api/shopify/admin/session/exchange",
  getShopifyToken: async () => {
    const token = await window.shopify?.idToken();
    if (!token) throw new Error("shopify-session-token-empty");
    return token;
  },
});

export const adminApiClient = createApiClient(
  defaultLaravelApiUrl(),
  adminTokenManager,
);

export function getToken(): string | null {
  return null;
}

export function clearToken(): void {
  adminTokenManager.clearToken();
}

export async function apiFetch<T = unknown>(
  path: string,
  init?: RequestInit,
): Promise<T | null> {
  return adminApiClient.request<T>(path, init);
}
