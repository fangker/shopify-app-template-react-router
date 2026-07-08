import type { LoaderFunctionArgs, ActionFunctionArgs } from "react-router";

const LARAVEL_API_URL =
  process.env.LARAVEL_API_URL || "http://127.0.0.1:8001";

/**
 * /webhooks/* 的哑转发 → Laravel:原样 body(字节级,Laravel 用 raw body 验 HMAC)+
 * 透传 Shopify 头(x-shopify-hmac-sha256 / x-shopify-topic / x-shopify-shop-domain …)。
 * 本 app 不验签、不做业务 —— 信任边界和数据边界都在 Laravel。
 *
 * 覆盖:orders/* (新增)、app/uninstalled (顺手修断链:原来空实现导致 Laravel 收不到)。
 * app/scopes_update 仍由 webhooks.app.scopes_update.tsx 兜 200。
 */
async function forward(
  request: Request,
  splat: string | undefined,
): Promise<Response> {
  const url = new URL(request.url);
  const target = `${LARAVEL_API_URL}/webhooks/${splat ?? ""}${url.search}`;

  // 透传 Shopify 头 + content-type(其余如 Host/Content-Length 由 fetch 自管)
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    const lower = key.toLowerCase();
    if (lower.startsWith("x-shopify-") || lower === "content-type") {
      headers[key] = value;
    }
  });

  const init: RequestInit = { method: request.method, headers };
  if (request.method !== "GET" && request.method !== "HEAD") {
    // request.text() 对 UTF-8 JSON 字节级往返一致,保证 Laravel HMAC 校验通过
    init.body = await request.text();
  }

  try {
    const laravelRes = await fetch(target, init);
    const text = await laravelRes.text();
    return new Response(text, { status: laravelRes.status });
  } catch {
    return new Response("Upstream request failed", { status: 502 });
  }
}

export const loader = async ({ request, params }: LoaderFunctionArgs) =>
  forward(request, params["*"]);

export const action = async ({ request, params }: ActionFunctionArgs) =>
  forward(request, params["*"]);
