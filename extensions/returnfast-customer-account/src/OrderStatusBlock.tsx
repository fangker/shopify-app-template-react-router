import "@shopify/ui-extensions/preact";
import type {} from "@shopify/ui-extensions/customer-account.order-status.block.render";
import { render } from "preact";

import {
  buildReturnPortalUrl,
  readReturnPortalContext,
} from "./returnPortalUrl.js";
import { getReturnPortalBaseUrl } from "./runtime.js";

function readShopifyRuntime(): unknown {
  return (globalThis as { shopify?: unknown }).shopify;
}

function OrderStatusBlock() {
  const context = readReturnPortalContext(readShopifyRuntime());
  const href = buildReturnPortalUrl({
    baseUrl: getReturnPortalBaseUrl(),
    ...context,
    source: "shopify-account",
  });

  return (
    <s-section>
      <s-button href={href}>Start a return</s-button>
    </s-section>
  );
}

render(<OrderStatusBlock />, document.body);
