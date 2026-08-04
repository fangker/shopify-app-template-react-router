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
type CandidatePath = PathSegment[];

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

function readFirstString(source: unknown, paths: CandidatePath[]): string | undefined {
  for (const path of paths) {
    const value = cleanString(readPath(source, path));

    if (value) {
      return value;
    }
  }

  return undefined;
}

function readFirstEmail(source: unknown, paths: CandidatePath[]): string | undefined {
  for (const path of paths) {
    const value = cleanEmail(readPath(source, path));

    if (value) {
      return value;
    }
  }

  return undefined;
}

export function readReturnPortalContext(runtime: unknown): ReturnPortalContext {
  return {
    shop: readFirstString(runtime, [
      ["shop", "myshopifyDomain"],
      ["shop", "domain"],
      ["shop", "current", "myshopifyDomain"],
      ["shop", "current", "domain"],
      ["shop", "currentValue", "myshopifyDomain"],
      ["shop", "currentValue", "domain"],
    ]),
    orderId: readFirstString(runtime, [
      ["orderId"],
      ["order", "current", "name"],
      ["order", "currentValue", "name"],
      ["order", "current", "id"],
      ["order", "currentValue", "id"],
    ]),
    email: readFirstEmail(runtime, [
      ["buyerIdentity", "email", "current"],
      ["buyerIdentity", "email", "currentValue"],
      ["buyerIdentity", "customer", "current", "email"],
      ["buyerIdentity", "customer", "currentValue", "email"],
      ["customer", "current", "email"],
      ["customer", "currentValue", "email"],
    ]),
  };
}

export function readShopFromSessionToken(token: unknown): string | undefined {
  const value = cleanString(token);
  if (!value) {
    return undefined;
  }

  const [, payload] = value.split(".");
  if (!payload) {
    return undefined;
  }

  try {
    const decoded = JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/"))) as {
      dest?: unknown;
      iss?: unknown;
    };
    const dest = cleanString(decoded.dest) ?? cleanString(decoded.iss);
    if (!dest) {
      return undefined;
    }

    return dest.replace(/^https?:\/\//, "").replace(/\/$/, "");
  } catch {
    return undefined;
  }
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
    url.searchParams.set("orderId", orderId);
  }

  if (email) {
    url.searchParams.set("email", email);
  }

  if (source) {
    url.searchParams.set("source", source);
  }

  return url.toString();
}
