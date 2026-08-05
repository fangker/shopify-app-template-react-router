import assert from "node:assert/strict";
import { hasOrderContext } from "../dist/runtime.js";

let passed = 0;

async function check(name, fn) {
  await fn();
  passed++;
  console.log(`ok - ${name}`);
}

await check("returns true for action menu runtime with orderId", () => {
  assert.equal(
    hasOrderContext({ orderId: "gid://shopify/Order/123" }),
    true,
  );
});

await check("returns true for block runtime with target.value.order.id", () => {
  assert.equal(
    hasOrderContext({
      target: { value: { order: { id: "gid://shopify/Order/123" } } },
    }),
    true,
  );
});

await check("returns true for block runtime with signal-wrapped order", () => {
  assert.equal(
    hasOrderContext({
      target: { value: { order: { current: { id: "gid://shopify/Order/123" } } } },
    }),
    true,
  );
});

await check("returns true for block runtime with top-level api.order (plain)", () => {
  assert.equal(
    hasOrderContext({
      order: { id: "gid://shopify/Order/456" },
    }),
    true,
  );
});

await check("returns true for block runtime with top-level api.order (signal value)", () => {
  assert.equal(
    hasOrderContext({
      order: { value: { id: "gid://shopify/Order/789" } },
    }),
    true,
  );
});

await check("returns false when api.order exists but is undefined (preview)", () => {
  assert.equal(hasOrderContext({ order: undefined }), false);
  assert.equal(hasOrderContext({ order: { value: undefined } }), false);
});

await check("returns false when no order context is bound (preview)", () => {
  assert.equal(hasOrderContext(undefined), false);
  assert.equal(hasOrderContext({}), false);
  assert.equal(hasOrderContext({ target: {} }), false);
  assert.equal(hasOrderContext({ target: { value: {} } }), false);
  assert.equal(hasOrderContext({ orderId: "" }), false);
  assert.equal(hasOrderContext({ orderId: "   " }), false);
});

await check("ignores falsy or empty string order ids", () => {
  assert.equal(hasOrderContext({ orderId: "" }), false);
  assert.equal(hasOrderContext({ orderId: null }), false);
  assert.equal(hasOrderContext({ orderId: undefined }), false);
});

console.log(`runtime: ${passed} checks passed`);
