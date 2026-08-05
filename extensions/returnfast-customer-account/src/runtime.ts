import {
  buildReturnPortalUrl,
  readReturnPortalContext,
  readShopFromSessionToken,
  type ReturnPortalContext,
} from "./returnPortalUrl.js";
import { RETURNFAST_CUSTOMER_PORTAL_URL } from "./portalConfig.generated.js";

const DEFAULT_RETURN_PORTAL_BASE_URL = RETURNFAST_CUSTOMER_PORTAL_URL;

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
  return normalizeReturnPortalBaseUrl(DEFAULT_RETURN_PORTAL_BASE_URL);
}

export function readShopifyApi(): unknown {
  return (globalThis as { shopify?: unknown }).shopify;
}

// Returns true when the runtime is bound to a real order (production customer
// account). False in Shopify Extension Preview / design mode, where none of
// the documented order fields are populated. Callers must fall back to demo
// UI when this is false so the extension slot stays visible during development.
//
// Recognized shapes:
//   - customer-account.order.action.menu-item.render: api.orderId (top level)
//   - customer-account.order-status.block.render:    api.order.id (top level,
//     SubscribableSignalLike wrapping plain, .current, .currentValue, .value)
//   - legacy / fallback: api.target.value.order.id (signal-wrapped)
export function hasOrderContext(api: unknown): boolean {
  if (!api || typeof api !== "object") return false;
  const host = api as {
    orderId?: unknown;
    order?: unknown;
    target?: { value?: unknown };
  };
  if (typeof host.orderId === "string" && host.orderId.trim()) {
    return true;
  }
  if (readOrderIdFromValue(host) !== undefined) {
    return true;
  }
  if (host.target && typeof host.target === "object") {
    const targetValue = host.target.value;
    if (targetValue && typeof targetValue === "object") {
      return readOrderIdFromValue(targetValue) !== undefined;
    }
  }
  return false;
}

function readOrderIdFromValue(host: unknown): string | undefined {
  if (host === null || typeof host !== "object") return undefined;
  const order = (host as { order?: unknown }).order;
  if (!order || typeof order !== "object") return undefined;
  const direct = (order as { id?: unknown }).id;
  if (typeof direct === "string" && direct.trim()) return direct.trim();
  const current = (order as { current?: { id?: unknown } }).current;
  if (current && typeof current.id === "string" && current.id.trim()) {
    return current.id.trim();
  }
  const currentValue = (order as { currentValue?: { id?: unknown } }).currentValue;
  if (currentValue && typeof currentValue.id === "string" && currentValue.id.trim()) {
    return currentValue.id.trim();
  }
  const value = (order as { value?: { id?: unknown } }).value;
  if (value && typeof value.id === "string" && value.id.trim()) {
    return value.id.trim();
  }
  return undefined;
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
