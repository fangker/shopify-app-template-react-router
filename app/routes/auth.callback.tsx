import type { LoaderFunctionArgs } from "react-router";
import { redirect } from "react-router";
import { LARAVEL_API_URL } from "../lib/laravel.server";

/**
 * Shopify OAuth 回调代理
 *
 * Laravel 的 ShopifyAuthController 以 tunnel URL 作为 redirect_uri,
 * Shopify OAuth 完成后重定向到此路由。
 * 此处将请求原样转发给 Laravel 的 callback handler。
 */
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const params = url.searchParams.toString();
  const queryString = params ? `?${params}` : "";

  throw redirect(`${LARAVEL_API_URL}/auth/callback${queryString}`);
};
