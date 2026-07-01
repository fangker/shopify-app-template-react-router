import type { LoaderFunctionArgs, ActionFunctionArgs } from "react-router";

const LARAVEL_API_URL =
  process.env.LARAVEL_API_URL || "http://127.0.0.1:8001";

/**
 * 把 /api/shopify/* 的所有请求转发给 Laravel,透传 Authorization 头。
 * 供客户端 apiFetch 调用(浏览器在 iframe 内无法直接访问 Laravel)。
 */
async function proxy(request: Request, splat: string | undefined): Promise<Response> {
  const url = new URL(request.url);
  const target = `${LARAVEL_API_URL}/api/shopify/${splat ?? ""}${url.search}`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  const auth = request.headers.get("Authorization");
  if (auth) headers["Authorization"] = auth;

  const init: RequestInit = {
    method: request.method,
    headers,
  };
  if (request.method !== "GET" && request.method !== "HEAD") {
    init.body = await request.text();
  }

  try {
    const laravelRes = await fetch(target, init);
    const text = await laravelRes.text();
    return new Response(text, {
      status: laravelRes.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Upstream request failed" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const loader = async ({ request, params }: LoaderFunctionArgs) =>
  proxy(request, params["*"]);

export const action = async ({ request, params }: ActionFunctionArgs) =>
  proxy(request, params["*"]);
