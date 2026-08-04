import assert from "node:assert/strict";
import { normalizeReturnPortalBaseUrl } from "../dist/runtime.js";
import {
  buildReturnPortalUrl,
  readShopFromSessionToken,
  readReturnPortalContext,
} from "../dist/returnPortalUrl.js";

const fullUrl = new URL(
  buildReturnPortalUrl({
    baseUrl: "https://returns.returnfast.net/returns",
    shop: "demo.myshopify.com",
    orderId: "#1001",
    email: "customer@example.com",
    source: "customer-account",
  }),
);

assert.equal(fullUrl.origin, "https://returns.returnfast.net");
assert.equal(fullUrl.pathname, "/returns");
assert.equal(fullUrl.searchParams.get("shop"), "demo.myshopify.com");
assert.equal(fullUrl.searchParams.get("orderId"), "#1001");
assert.equal(fullUrl.searchParams.get("email"), "customer@example.com");
assert.equal(fullUrl.searchParams.get("source"), "customer-account");

const missingEmailUrl = new URL(
  buildReturnPortalUrl({
    baseUrl: "https://returns.returnfast.net/returns",
    shop: "demo.myshopify.com",
    orderId: "#1001",
    source: "customer-account",
  }),
);

assert.equal(missingEmailUrl.searchParams.has("email"), false);

const invalidEmailUrl = new URL(
  buildReturnPortalUrl({
    baseUrl: "https://returns.returnfast.net/returns",
    email: "not-an-email",
  }),
);

assert.equal(invalidEmailUrl.searchParams.has("email"), false);

assert.deepEqual(
  readReturnPortalContext({
    orderId: "gid://shopify/Order/123",
    shop: { domain: "demo.myshopify.com" },
  }),
  {
    shop: "demo.myshopify.com",
    orderId: "gid://shopify/Order/123",
    email: undefined,
  },
);

assert.deepEqual(
  readReturnPortalContext({
    shop: { myshopifyDomain: "demo.myshopify.com" },
    order: { current: { name: "#1001" } },
    customer: { current: { email: "customer@example.com" } },
  }),
  {
    shop: "demo.myshopify.com",
    orderId: "#1001",
    email: "customer@example.com",
  },
);

assert.deepEqual(
  readReturnPortalContext({
    shop: { currentValue: { domain: "demo.myshopify.com" } },
    order: { currentValue: { id: "gid://shopify/Order/456" } },
    buyerIdentity: { email: { currentValue: "buyer@example.com" } },
  }),
  {
    shop: "demo.myshopify.com",
    orderId: "gid://shopify/Order/456",
    email: "buyer@example.com",
  },
);

assert.deepEqual(
  readReturnPortalContext({
    shop: { value: { domain: "demo.myshopify.com" } },
    order: { value: { name: "#1005" } },
    buyerIdentity: { email: { value: "value-signal@example.com" } },
  }),
  {
    shop: "demo.myshopify.com",
    orderId: "#1005",
    email: "value-signal@example.com",
  },
);

assert.deepEqual(
  readReturnPortalContext({
    shop: { current: { myshopifyDomain: "demo.myshopify.com" } },
    order: { current: { id: "gid://shopify/Order/789" } },
    buyerIdentity: {
      customer: { currentValue: { email: "customer-signal@example.com" } },
    },
  }),
  {
    shop: "demo.myshopify.com",
    orderId: "gid://shopify/Order/789",
    email: "customer-signal@example.com",
  },
);

assert.deepEqual(readReturnPortalContext(null), {
  shop: undefined,
  orderId: undefined,
  email: undefined,
});

assert.equal(
  normalizeReturnPortalBaseUrl("https://configured.returnfast.net/returns"),
  "https://configured.returnfast.net/returns",
);

assert.equal(normalizeReturnPortalBaseUrl("not a url"), "https://customer.returnfast.net");
assert.equal(normalizeReturnPortalBaseUrl(""), "https://customer.returnfast.net");

const sessionPayload = Buffer.from(
  JSON.stringify({ dest: "https://demo.myshopify.com" }),
).toString("base64url");

assert.equal(
  readShopFromSessionToken(`header.${sessionPayload}.signature`),
  "demo.myshopify.com",
);
