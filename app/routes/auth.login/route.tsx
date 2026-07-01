import { useState } from "react";
import type { LoaderFunctionArgs } from "react-router";
import { redirect, useLoaderData } from "react-router";
import { AppProvider } from "@shopify/shopify-app-react-router/react";

import { LARAVEL_API_URL } from "../../lib/laravel.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // 如果 URL 携带 token,则设置 cookie 并重定向到首页
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  if (token) {
    // 重定向到首页,并在 set-cookie 中写入 jwt
    const response = redirect("/app?token=" + encodeURIComponent(token));
    response.headers.append(
      "Set-Cookie",
      `laravel_jwt=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`
    );
    return response;
  }

  return { laravelAuthUrl: `${LARAVEL_API_URL}/auth` };
};

export default function Auth() {
  const { laravelAuthUrl } = useLoaderData<typeof loader>();
  const [shop, setShop] = useState("");

  return (
    <AppProvider embedded={false}>
      <s-page>
        <s-section heading="Connect your Shopify store">
          <form
            method="get"
            action={laravelAuthUrl}
            target="_top"
          >
            <s-text-field
              name="shop"
              label="Shop domain"
              details="example.myshopify.com"
              value={shop}
              onChange={(e: any) => setShop(e.currentTarget.value)}
              autocomplete="on"
            />
            <s-button type="submit">Log in</s-button>
          </form>
        </s-section>
      </s-page>
    </AppProvider>
  );
}