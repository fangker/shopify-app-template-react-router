export type ReturnPortalUrlInput = {
  baseUrl: string;
  shop?: unknown;
  orderId?: unknown;
  email?: unknown;
  source?: unknown;
};

export type ReturnPortalContext = {
  shop?: string;
  orderId?: string;
  email?: string;
};

type PathSegment = string | number;

export function cleanString(value: unknown): string | undefined {
  if (typeof value !== "string" && typeof value !== "number") {
    return undefined;
  }

  const text = String(value).trim();

  return text.length > 0 ? text : undefined;
}

export function cleanEmail(value: unknown): string | undefined {
  const email = cleanString(value);

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return undefined;
  }

  return email;
}

export function readPath(source: unknown, path: PathSegment[]): unknown {
  let current = source;

  for (const segment of path) {
    if (current === null || typeof current !== "object") {
      return undefined;
    }

    current = (current as Record<PathSegment, unknown>)[segment];
  }

  return current;
}

export function readReturnPortalContext(runtime: unknown): ReturnPortalContext {
  return {
    shop: cleanString(readPath(runtime, ["shop", "myshopifyDomain"])),
    orderId: cleanString(readPath(runtime, ["order", "current", "name"])),
    email: cleanEmail(readPath(runtime, ["customer", "current", "email"])),
  };
}

export function buildReturnPortalUrl(input: ReturnPortalUrlInput): string {
  const url = new URL(input.baseUrl);
  const shop = cleanString(input.shop);
  const orderId = cleanString(input.orderId);
  const email = cleanEmail(input.email);
  const source = cleanString(input.source);

  if (shop) {
    url.searchParams.set("shop", shop);
  }

  if (orderId) {
    url.searchParams.set("order", orderId);
  }

  if (email) {
    url.searchParams.set("email", email);
  }

  if (source) {
    url.searchParams.set("source", source);
  }

  return url.toString();
}
