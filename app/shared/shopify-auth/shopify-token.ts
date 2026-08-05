export function parseShopDomainFromShopifyToken(token: string): string | null {
  try {
    const part = token.split(".")[1];
    if (!part) return null;
    const base64 = part.replace(/-/g, "+").replace(/_/g, "/");
    const json = atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
    const payload = JSON.parse(json) as { dest?: unknown; iss?: unknown };
    const dest = typeof payload.dest === "string" ? payload.dest : payload.iss;
    if (typeof dest !== "string") return null;
    const shopDomain = dest.replace(/^https:\/\//, "");
    return /^[a-zA-Z0-9-]+\.myshopify\.com$/.test(shopDomain)
      ? shopDomain
      : null;
  } catch {
    return null;
  }
}

export function readShopFromUrl(): string | null {
  if (typeof window === "undefined") return null;
  const shop = new URL(window.location.href).searchParams.get("shop");
  return shop && /^[a-zA-Z0-9-]+\.myshopify\.com$/.test(shop) ? shop : null;
}
