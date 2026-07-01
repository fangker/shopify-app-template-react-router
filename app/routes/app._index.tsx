import { useEffect, useState } from "react";
import type { HeadersFunction, LoaderFunctionArgs } from "react-router";
import { boundary } from "@shopify/shopify-app-react-router/server";

import { useAuth } from "./app";
import { apiFetch } from "../lib/laravel-api";

interface ShopData {
  id: number;
  shop_domain: string;
  email: string | null;
  myshopify_domain: string | null;
  shopify_shop_id: number | null;
  plan: string;
  installed_at: string | null;
}

export const loader = async (_args: LoaderFunctionArgs) => {
  // 数据拉取放到客户端:JWT 只在浏览器内存里,server loader 拿不到。
  return null;
};

export default function Index() {
  const { token } = useAuth();
  const [shop, setShop] = useState<ShopData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) return;

    let cancelled = false;

    async function fetchShop() {
      setLoading(true);
      setError(null);
      try {
        const data = await apiFetch<ShopData>("/api/shopify/me");
        if (cancelled) return;
        if (!data) {
          setError("会话已过期,请刷新页面。");
          return;
        }
        setShop(data);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "加载店铺信息失败");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchShop();
    return () => {
      cancelled = true;
    };
  }, [token]);

  if (loading) {
    return (
      <s-page heading="Dashboard">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "4rem",
          }}
        >
          <s-spinner size="large" />
        </div>
      </s-page>
    );
  }

  if (error) {
    return (
      <s-page heading="Dashboard">
        <s-section heading="Error">
          <s-card>
            <s-stack direction="block" gap="base">
              <s-paragraph>{error}</s-paragraph>
              <s-button onClick={() => window.location.reload()}>
                重新加载
              </s-button>
            </s-stack>
          </s-card>
        </s-section>
      </s-page>
    );
  }

  return (
    <s-page heading="Dashboard">
      <s-section heading="Store Information">
        <s-card>
          <s-stack direction="block" gap="base">
            <s-paragraph>
              <s-text fontWeight="bold">Shop:</s-text> {shop?.shop_domain}
            </s-paragraph>
            <s-paragraph>
              <s-text fontWeight="bold">Email:</s-text> {shop?.email || "—"}
            </s-paragraph>
            <s-paragraph>
              <s-text fontWeight="bold">Plan:</s-text> {shop?.plan}
            </s-paragraph>
            <s-paragraph>
              <s-text fontWeight="bold">Installed:</s-text>{" "}
              {shop?.installed_at
                ? new Date(shop.installed_at).toLocaleDateString()
                : "—"}
            </s-paragraph>
          </s-stack>
        </s-card>
      </s-section>
    </s-page>
  );
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
