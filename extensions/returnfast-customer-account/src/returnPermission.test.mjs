import assert from "node:assert/strict";
import { fetchReturnPermission } from "../dist/returnPermission.js";

let passed = 0;

globalThis.sessionStorage = {
  data: new Map(),
  getItem(key) {
    return this.data.get(key) ?? null;
  },
  setItem(key, value) {
    this.data.set(key, value);
  },
  removeItem(key) {
    this.data.delete(key);
  },
};

globalThis.atob = (value) => Buffer.from(value, "base64").toString("utf8");

function sessionToken(shop = "x.myshopify.com") {
  const payload = Buffer.from(JSON.stringify({ dest: `https://${shop}` })).toString("base64url");
  return `x.${payload}.x`;
}

function api() {
  return {
    sessionToken: { get: async () => sessionToken() },
    target: { value: { order: { id: "gid://shopify/Order/123" } } },
  };
}

function actionMenuApi() {
  return {
    sessionToken: { get: async () => sessionToken() },
    orderId: "gid://shopify/Order/456",
  };
}

async function check(name, fn) {
  sessionStorage.data.clear();
  await fn();
  passed++;
  console.log(`ok - ${name}`);
}

await check("exchanges once and returns permission", async () => {
  let calls = 0;
  globalThis.fetch = async (url) => {
    calls++;
    if (String(url).endsWith("/api/shopify/customer/session/exchange")) {
      return response(200, {
        code: 0,
        data: { token: "rf-token", expire_at: Math.floor(Date.now() / 1000) + 3600, shop_domain: "x.myshopify.com" },
      });
    }
    assert.match(String(url), /order_gid=gid%3A%2F%2Fshopify%2FOrder%2F123/);
    return response(200, {
      code: 0,
      data: { enabled: true, source: "order_override", orderEnabled: true, defaultReturnEnabled: false },
    });
  };

  const result = await fetchReturnPermission(api());
  assert.equal(result.enabled, true);
  assert.equal(calls, 2);
});

await check("reads orderId from the action menu API", async () => {
  let permissionUrl;
  globalThis.fetch = async (url) => {
    if (String(url).endsWith("/api/shopify/customer/session/exchange")) {
      return response(200, {
        code: 0,
        data: { token: "rf-token", expire_at: Math.floor(Date.now() / 1000) + 3600, shop_domain: "x.myshopify.com" },
      });
    }
    permissionUrl = String(url);
    return response(200, {
      code: 0,
      data: { enabled: true, source: "order_override", orderEnabled: true, defaultReturnEnabled: false },
    });
  };

  const result = await fetchReturnPermission(actionMenuApi());
  assert.equal(result.enabled, true);
  assert.match(permissionUrl, /order_gid=gid%3A%2F%2Fshopify%2FOrder%2F456/);
});

await check("uses cached token on second call", async () => {
  let exchanges = 0;
  globalThis.fetch = async (url) => {
    if (String(url).endsWith("/api/shopify/customer/session/exchange")) {
      exchanges++;
      return response(200, {
        code: 0,
        data: { token: "rf-token", expire_at: Math.floor(Date.now() / 1000) + 3600, shop_domain: "x.myshopify.com" },
      });
    }
    return response(200, {
      code: 0,
      data: { enabled: false, source: "shop_default", orderEnabled: null, defaultReturnEnabled: false },
    });
  };

  await fetchReturnPermission(api());
  await fetchReturnPermission(api());
  assert.equal(exchanges, 1);
});

await check("order not synced fail closes with source", async () => {
  globalThis.fetch = async (url) => {
    if (String(url).endsWith("/api/shopify/customer/session/exchange")) {
      return response(200, {
        code: 0,
        data: { token: "rf-token", expire_at: Math.floor(Date.now() / 1000) + 3600, shop_domain: "x.myshopify.com" },
      });
    }
    return response(404, { code: "order_not_synced", error: "order_not_synced" });
  };

  const result = await fetchReturnPermission(api());
  assert.equal(result.enabled, false);
  assert.equal(result.source, "order_not_synced");
});

function response(status, body) {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => body,
  };
}

console.log(`returnPermission: ${passed} checks passed`);
