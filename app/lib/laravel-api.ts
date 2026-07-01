let laravelJwt: string | null = null;

export function getToken(): string | null {
  return laravelJwt;
}

export function setToken(token: string | null): void {
  laravelJwt = token;
}

export function clearToken(): void {
  laravelJwt = null;
}

/**
 * 用 Shopify Session Token 换取 Laravel JWT。
 * 走 Remix 代理路由(/api/auth/token),不直接访问 Laravel。
 */
export async function exchangeSessionToken(
  sessionToken: string
): Promise<string> {
  const res = await fetch("/api/auth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ session_token: sessionToken }),
  });

  if (!res.ok) {
    throw new Error(`Session token exchange failed: ${res.status}`);
  }

  const data = await res.json();
  laravelJwt = data.token;
  return data.token;
}

/**
 * 用内存中的 Laravel JWT 调 Remix 代理路由(再转发到 Laravel)。
 * 401 时清空 token 并返回 null,让上层触发重新认证。
 */
export async function apiFetch<T = unknown>(
  path: string,
  init?: RequestInit
): Promise<T | null> {
  if (!laravelJwt) {
    throw new Error("Not authenticated. Call exchangeSessionToken first.");
  }

  const res = await fetch(path, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${laravelJwt}`,
      ...init?.headers,
    },
  });

  if (res.status === 401) {
    laravelJwt = null;
    return null;
  }

  const json = await res.json();
  return json.data ?? json;
}
