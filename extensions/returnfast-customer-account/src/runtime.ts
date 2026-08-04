import {
  buildReturnPortalUrl,
  readReturnPortalContext,
  readShopFromSessionToken,
  type ReturnPortalContext,
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

export function readShopifyApi(): unknown {
  return (globalThis as { shopify?: unknown }).shopify;
}

export function readShopifyRuntime(api: unknown = readShopifyApi()): unknown {
  // Current Customer Account Preact stubs mount via document.body; Shopify exposes
  // the full API on globalThis.shopify and target-specific data on shopify.target.value.
  const shopify = api as { target?: unknown } | null;
  return (
    (shopify?.target &&
      typeof shopify.target === "object" &&
      "value" in shopify.target &&
      (shopify.target as { value?: unknown }).value) ||
    api
  );
}

export function getReturnPortalUrl(runtime: unknown = readShopifyRuntime()): string {
  const context = readReturnPortalContext(runtime);

  return getReturnPortalUrlFromContext(context);
}

export function getReturnPortalUrlFromContext(context: ReturnPortalContext): string {
  return buildReturnPortalUrl({
    baseUrl: getReturnPortalBaseUrl(),
    ...context,
    source: "shopify-account",
  });
}

export async function readShopFromApiSessionToken(api: unknown): Promise<string | undefined> {
  const sessionToken = (api as { sessionToken?: { get?: () => Promise<string> } } | null)
    ?.sessionToken;
  if (typeof sessionToken?.get !== "function") {
    return undefined;
  }

  return readShopFromSessionToken(await sessionToken.get());
}
