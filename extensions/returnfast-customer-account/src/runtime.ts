const DEFAULT_RETURN_PORTAL_BASE_URL = "https://customer.returnfast.net";

export function getReturnPortalBaseUrl(): string {
  const configuredUrl =
    typeof import.meta.env.RETURNFAST_CUSTOMER_PORTAL_URL === "string"
      ? import.meta.env.RETURNFAST_CUSTOMER_PORTAL_URL.trim()
      : "";

  return configuredUrl || DEFAULT_RETURN_PORTAL_BASE_URL;
}
