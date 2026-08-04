import {
  buildReturnPortalUrl,
  readReturnPortalContext,
  readShopFromSessionToken,
  type ReturnPortalContext,
} from "./returnPortalUrl.js";
import { RETURNFAST_CUSTOMER_PORTAL_URL } from "./portalConfig.generated.js";

const DEFAULT_RETURN_PORTAL_BASE_URL = RETURNFAST_CUSTOMER_PORTAL_URL;
const CUSTOMER_PORTAL_URL_SETTING_KEY = "customer_portal_url";

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
  return normalizeReturnPortalBaseUrl(readReturnPortalBaseUrlFromShopifySettings());
}

export function readReturnPortalBaseUrlFromShopifySettings(
  api: unknown = readShopifyApi(),
): string | undefined {
  return readSettingValue(api, CUSTOMER_PORTAL_URL_SETTING_KEY);
}

export function readSettingValue(api: unknown, key: string): string | undefined {
  const settings = (api as { settings?: unknown } | null)?.settings;
  const source = readSignalValue(settings);

  if (source === null || typeof source !== "object") {
    return undefined;
  }

  const value = (source as Record<string, unknown>)[key];

  return typeof value === "string" ? value : undefined;
}

export function readSignalValue(signal: unknown): unknown {
  if (signal === null || typeof signal !== "object") {
    return undefined;
  }

  const source = signal as {
    value?: unknown;
    current?: unknown;
    currentValue?: unknown;
  };

  return source.value ?? source.current ?? source.currentValue;
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

export function readReturnPortalContextFromShopifyApi(api: unknown = readShopifyApi()): ReturnPortalContext {
  const apiContext = readReturnPortalContext(api);
  const targetContext = readReturnPortalContext(readShopifyRuntime(api));

  return {
    shop: targetContext.shop ?? apiContext.shop,
    orderId: targetContext.orderId ?? apiContext.orderId,
    email: targetContext.email ?? apiContext.email,
  };
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
