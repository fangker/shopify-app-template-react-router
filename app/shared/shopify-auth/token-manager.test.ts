import assert from "node:assert/strict";
import { createTokenManager } from "./token-manager";

class MemoryStorage implements Storage {
  private data = new Map<string, string>();

  get length(): number {
    return this.data.size;
  }

  clear(): void {
    this.data.clear();
  }

  getItem(key: string): string | null {
    return this.data.get(key) ?? null;
  }

  key(index: number): string | null {
    return Array.from(this.data.keys())[index] ?? null;
  }

  removeItem(key: string): void {
    this.data.delete(key);
  }

  setItem(key: string, value: string): void {
    this.data.set(key, value);
  }
}

const storage = new MemoryStorage();
const now = Math.floor(Date.now() / 1000);

globalThis.window = {
  location: { href: "https://app.returnfast.net/app" },
  sessionStorage: storage,
} as unknown as Window & typeof globalThis;
globalThis.atob = (value: string) => Buffer.from(value, "base64").toString("utf8");

let fetchCalls = 0;
let providerCalls = 0;

function shopifyToken(shop = "x.myshopify.com"): string {
  const payload = Buffer.from(JSON.stringify({ dest: `https://${shop}` })).toString("base64url");
  return `x.${payload}.x`;
}

function manager(scope: "admin" | "customer" = "admin") {
  return createTokenManager({
    scope,
    jwtScope: scope === "admin" ? "shopify_admin" : "shopify_customer",
    apiBaseUrl: "https://api.returnfast.net",
    exchangePath:
      scope === "admin"
        ? "/api/shopify/admin/session/exchange"
        : "/api/shopify/customer/session/exchange",
    getShopifyToken: async () => {
      providerCalls += 1;
      return shopifyToken();
    },
  });
}

function reset() {
  storage.clear();
  fetchCalls = 0;
  providerCalls = 0;
  globalThis.fetch = async () => {
    fetchCalls += 1;
    return {
      ok: true,
      status: 200,
      json: async () => ({
        code: 0,
        data: {
          token: `rf-${fetchCalls}`,
          expire_at: now + 3600,
          shop_domain: "x.myshopify.com",
          scope: "shopify_admin",
        },
      }),
    } as Response;
  };
}

reset();
storage.setItem(
  "returnfast:x.myshopify.com:admin:access",
  JSON.stringify({ token: "cached", expire_at: now + 3600 }),
);
assert.equal(await manager("admin").getAccessToken(), "cached");
assert.equal(fetchCalls, 0);

reset();
storage.setItem(
  "returnfast:x.myshopify.com:admin:access",
  JSON.stringify({ token: "expired", expire_at: now - 1 }),
);
assert.equal(await manager("admin").getAccessToken(), "rf-1");
assert.equal(fetchCalls, 1);

reset();
const locked = manager("admin");
const [a, b, c] = await Promise.all([
  locked.getAccessToken(),
  locked.getAccessToken(),
  locked.getAccessToken(),
]);
assert.deepEqual([a, b, c], ["rf-1", "rf-1", "rf-1"]);
assert.equal(fetchCalls, 1);
assert.equal(providerCalls, 1);

reset();
storage.setItem(
  "returnfast:x.myshopify.com:customer:access",
  JSON.stringify({ token: "customer-cached", expire_at: now + 3600 }),
);
assert.equal(await manager("admin").getAccessToken(), "rf-1");
assert.equal(fetchCalls, 1);

reset();
storage.setItem(
  "returnfast:y.myshopify.com:admin:access",
  JSON.stringify({ token: "cached-y", expire_at: now + 3600 }),
);
assert.equal(await manager("admin").getAccessToken(), "cached-y");
assert.equal(fetchCalls, 0);

console.log("token-manager: checks passed");
