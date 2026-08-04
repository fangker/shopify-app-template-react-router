import {
  buildReturnPortalUrl,
  readReturnPortalContext,
} from "./returnPortalUrl.js";

const DEFAULT_RETURN_PORTAL_BASE_URL = "https://customer.returnfast.net";

export function getReturnPortalBaseUrl(): string {
  const configuredUrl =
    typeof import.meta.env.VITE_RETURNFAST_CUSTOMER_PORTAL_URL === "string"
      ? import.meta.env.VITE_RETURNFAST_CUSTOMER_PORTAL_URL.trim()
      : "";

  return configuredUrl || DEFAULT_RETURN_PORTAL_BASE_URL;
}

export function readShopifyRuntime(): unknown {
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
