import type { LoaderFunctionArgs } from "react-router";
import { redirect } from "react-router";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  // 从 Shopify admin 进入时带 shop/host 参数,转发到 /app 让 App Bridge 初始化
  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  // 兜底:直接访问根路径(开发环境),去登录页
  throw redirect("/auth/login");
};
