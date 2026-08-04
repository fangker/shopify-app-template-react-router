import "@shopify/ui-extensions/preact";
import type {} from "@shopify/ui-extensions/customer-account.order-status.block.render";
import { render } from "preact";

import { getReturnPortalUrl } from "./runtime.js";

function OrderStatusBlock() {
  return (
    <s-section heading="ReturnFast">
      <s-stack gap="base">
        <s-paragraph color="subdued">
          Need to send something back? Start a return for this order.
        </s-paragraph>
        <s-button href={getReturnPortalUrl()} variant="primary">
          Request a return
        </s-button>
      </s-stack>
    </s-section>
  );
}

render(<OrderStatusBlock />, document.body);
