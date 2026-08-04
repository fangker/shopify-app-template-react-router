import "@shopify/ui-extensions/preact";
import type {} from "@shopify/ui-extensions/customer-account.order.action.menu-item.render";
import { render } from "preact";

import {
  buildReturnPortalUrl,
  readReturnPortalContext,
} from "./returnPortalUrl.js";
import { getReturnPortalBaseUrl } from "./runtime.js";

function readShopifyRuntime(): unknown {
  return (globalThis as { shopify?: unknown }).shopify;
}

function OrderActionMenuItem() {
  const context = readReturnPortalContext(readShopifyRuntime());
  const href = buildReturnPortalUrl({
    baseUrl: getReturnPortalBaseUrl(),
    ...context,
    source: "shopify-account",
  });

  return <s-button href={href}>Start a return</s-button>;
}

render(<OrderActionMenuItem />, document.body);
