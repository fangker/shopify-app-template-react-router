import {
  buildReturnPortalUrl,
  readReturnPortalContext,
} from "./returnPortalUrl.js";

const DEFAULT_RETURN_PORTAL_BASE_URL = "https://customer.returnfast.net";

export function normalizeReturnPortalBaseUrl(value: unknown): string {
  const configuredUrl = typeof value === "string" ? value.trim() : "";

  if (!configuredUrl) {
    return DEFAULT_RETURN_PORTAL_BASE_URL;
  }

  try {
    return new URL(configuredUrl).toString();
  } catch {
    return DEFAULT_RETURN_PORTAL_BASE_URL;
  }
}

export function getReturnPortalBaseUrl(): string {
  return normalizeReturnPortalBaseUrl(
    import.meta.env.VITE_RETURNFAST_CUSTOMER_PORTAL_URL,
  );
}

export function readShopifyRuntime(): unknown {
  // Current Customer Account Preact stubs mount via document.body; Shopify exposes
  // the target API on globalThis.shopify in that runtime.
  return (globalThis as { shopify?: unknown }).shopify;
}

export function getReturnPortalUrl(runtime: unknown = readShopifyRuntime()): string {
  const context = readReturnPortalContext(runtime);

  return buildReturnPortalUrl({
    baseUrl: getReturnPortalBaseUrl(),
    ...context,
    source: "shopify-account",
  });
}
