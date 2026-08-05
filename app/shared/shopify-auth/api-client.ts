import type { LaravelEnvelope } from "./config";
import type { TokenManager } from "./token-manager";

export interface ApiClient {
  request<T>(path: string, init?: RequestInit): Promise<T>;
}

export function createApiClient(apiBaseUrl: string, tokenManager: TokenManager): ApiClient {
  async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
    return send<T>(path, init, false);
  }

  async function send<T>(
    path: string,
    init: RequestInit,
    retried: boolean,
  ): Promise<T> {
    const token = await tokenManager.getAccessToken();
    const res = await fetch(`${apiBaseUrl}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...init.headers,
      },
    });
    const body = (await res.json().catch(() => ({}))) as LaravelEnvelope<T>;

    if (
      res.status === 401 &&
      !retried &&
      (body.code === "token_expired" || body.code === "invalid_token")
    ) {
      tokenManager.clearToken();
      await tokenManager.refreshToken();
      return send<T>(path, init, true);
    }

    if (!res.ok || (body.code !== undefined && body.code !== 0)) {
      throw new Error(body.error ?? body.message ?? `api-${res.status}`);
    }

    return (body.data ?? (body as T)) as T;
  }

  return { request };
}
