import { useEffect, useState, useRef } from "react";
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
  uninstalled_at: string | null;
  created_at: string | null;
  updated_at: string | null;
  // Shopify API 额外字段
  name: string | null;
  shop_owner: string | null;
  address1: string | null;
  city: string | null;
  country: string | null;
  zip: string | null;
  phone: string | null;
  currency: string | null;
  timezone: string | null;
  iana_timezone: string | null;
  money_format: string | null;
  money_with_currency_format: string | null;
  weight_unit: string | null;
  primary_locale: string | null;
  domain: string | null;
  customer_email: string | null;
  plan_display_name: string | null;
}

export const loader = async (_args: LoaderFunctionArgs) => {
  return null;
};

export default function Index() {
  const { token, isLoading: authLoading, error: authError } = useAuth();
  const [shop, setShop] = useState<ShopData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const renderCount = useRef(0);
  renderCount.current++;

  console.log(`[Index] Render #${renderCount.current}:`, { 
    token: !!token, 
    authLoading, 
    authError,
    loading, 
    hasError: !!error,
    hasShop: !!shop 
  });

  useEffect(() => {
    console.log("[Index] useEffect running, authLoading:", authLoading, "hasToken:", !!token);
    
    if (authLoading) {
      console.log("[Index] Auth is still loading, waiting...");
      return;
    }

    if (!token) {
      console.log("[Index] No token available, setting error");
      setError("未认证，请刷新页面");
      setLoading(false);
      return;
    }

    console.log("[Index] Auth ready, fetching shop data...");
    let cancelled = false;

    async function fetchShop() {
      console.log("[Index] Fetching shop data with token");
      setLoading(true);
      setError(null);
      try {
        const data = await apiFetch<ShopData>("/api/shopify/admin/me");
        if (cancelled) return;
        if (!data) {
          setError("会话已过期，请刷新页面。");
          return;
        }
        console.log("[Index] Shop data received:", data);
        setShop(data);
      } catch (err) {
        if (!cancelled) {
          console.error("[Index] Fetch error:", err);
          setError(err instanceof Error ? err.message : "加载店铺信息失败");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchShop();
    return () => {
      console.log("[Index] Cleanup, cancelled:", cancelled);
      cancelled = true;
    };
  }, [token, authLoading]);

  // 如果有认证错误，显示它
  if (authError) {
    return (
      <s-page heading="Dashboard">
        <s-section heading="Error">
          <s-card>
            <s-stack direction="block" gap="base">
              <s-paragraph>认证失败: {authError}</s-paragraph>
              <s-button onClick={() => window.location.reload()}>
                重新加载
              </s-button>
            </s-stack>
          </s-card>
        </s-section>
      </s-page>
    );
  }

  if (authLoading) {
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
          <p style={{ marginTop: "1rem" }}>Authenticating...</p>
        </div>
      </s-page>
    );
  }

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
          <p style={{ marginTop: "1rem" }}>Loading shop data...</p>
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

  if (!shop) {
    return (
      <s-page heading="Dashboard">
        <s-section>
          <s-card>
            <s-paragraph>无法加载店铺信息</s-paragraph>
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
              <strong>Shop:</strong> {shop.shop_domain}
            </s-paragraph>
            <s-paragraph>
              <strong>Name:</strong> {shop.name || "—"}
            </s-paragraph>
            <s-paragraph>
              <strong>Owner:</strong> {shop.shop_owner || "—"}
            </s-paragraph>
            <s-paragraph>
              <strong>Email:</strong> {shop.email || "—"}
            </s-paragraph>
            <s-paragraph>
              <strong>Customer Email:</strong>{" "}
              {shop.customer_email || "—"}
            </s-paragraph>
            <s-paragraph>
              <strong>Phone:</strong> {shop.phone || "—"}
            </s-paragraph>
          </s-stack>
        </s-card>
      </s-section>

      <s-section heading="Location">
        <s-card>
          <s-stack direction="block" gap="base">
            <s-paragraph>
              <strong>Address:</strong>{" "}
              {[shop.address1, shop.city, shop.zip, shop.country]
                .filter(Boolean)
                .join(", ") || "—"}
            </s-paragraph>
            <s-paragraph>
              <strong>Timezone:</strong>{" "}
              {shop.iana_timezone || shop.timezone || "—"}
            </s-paragraph>
            <s-paragraph>
              <strong>Primary Locale:</strong>{" "}
              {shop.primary_locale || "—"}
            </s-paragraph>
            <s-paragraph>
              <strong>Currency:</strong>{" "}
              {shop.currency || "—"}
              {shop.money_with_currency_format
                ? ` (${shop.money_with_currency_format})`
                : ""}
            </s-paragraph>
            <s-paragraph>
              <strong>Weight Unit:</strong>{" "}
              {shop.weight_unit || "—"}
            </s-paragraph>
          </s-stack>
        </s-card>
      </s-section>

      <s-section heading="Plan &amp; System">
        <s-card>
          <s-stack direction="block" gap="base">
            <s-paragraph>
              <strong>Plan:</strong> {shop.plan}
              {shop.plan_display_name
                ? ` (${shop.plan_display_name})`
                : ""}
            </s-paragraph>
            <s-paragraph>
              <strong>Domain:</strong>{" "}
              {shop.domain || shop.myshopify_domain || "—"}
            </s-paragraph>
            <s-paragraph>
              <strong>Shop ID:</strong>{" "}
              {shop.shopify_shop_id ?? "—"}
            </s-paragraph>
            <s-paragraph>
              <strong>Installed:</strong>{" "}
              {shop.installed_at
                ? new Date(shop.installed_at).toLocaleString()
                : "—"}
            </s-paragraph>
            <s-paragraph>
              <strong>Created:</strong>{" "}
              {shop.created_at
                ? new Date(shop.created_at).toLocaleString()
                : "—"}
            </s-paragraph>
            <s-paragraph>
              <strong>Updated:</strong>{" "}
              {shop.updated_at
                ? new Date(shop.updated_at).toLocaleString()
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
