import assert from "node:assert/strict";
import {
  buildReturnPortalUrl,
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
assert.equal(fullUrl.searchParams.get("order"), "#1001");
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

assert.deepEqual(readReturnPortalContext(null), {
  shop: undefined,
  orderId: undefined,
  email: undefined,
});
