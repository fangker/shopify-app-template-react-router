import "@shopify/ui-extensions/preact";
import type {} from "@shopify/ui-extensions/customer-account.order-status.block.render";
import { render } from "preact";

import { readReturnPortalContext } from "./returnPortalUrl.js";
import { getReturnPortalUrlFromContext, readShopifyRuntime } from "./runtime.js";

function OrderStatusBlock({ href }: { href: string }) {
  return (
    <s-section heading="ReturnFast">
      <s-stack gap="base">
        <s-paragraph color="subdued">
          Need to send something back? Start a return for this order.
        </s-paragraph>
        <s-button href={href} variant="primary">
          Request a return
        </s-button>
      </s-stack>
    </s-section>
  );
}

export default function extension() {
  render(
    <OrderStatusBlock
      href={getReturnPortalUrlFromContext(readReturnPortalContext(readShopifyRuntime()))}
    />,
    document.body,
  );
}
