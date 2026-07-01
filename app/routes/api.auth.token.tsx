import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";

const LARAVEL_API_URL =
  process.env.LARAVEL_API_URL || "http://127.0.0.1:8001";

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/**
 * GET 不允许,只接受 POST。
 */
export const loader = (_args: LoaderFunctionArgs) =>
  jsonResponse({ error: "Method not allowed" }, 405);

/**
 * 把客户端传来的 Shopify Session Token 转发给 Laravel 的 exchange 端点,
 * 返回 Laravel 签发的 JWT。
 */
export const action = async ({ request }: ActionFunctionArgs) => {
  const body = await request.json().catch(() => null);
  if (!body?.session_token) {
    return jsonResponse({ error: "Missing session_token" }, 400);
  }

  const res = await fetch(`${LARAVEL_API_URL}/api/shopify/auth/exchange`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ session_token: body.session_token }),
  });

  if (!res.ok) {
    return jsonResponse({ error: `Exchange failed: ${res.status}` }, 401);
  }

  const laravelJson = await res.json();
  if (laravelJson.code !== 0 || !laravelJson.data?.token) {
    return jsonResponse({ error: "Invalid response from auth server" }, 500);
  }

  return jsonResponse({ token: laravelJson.data.token });
};
