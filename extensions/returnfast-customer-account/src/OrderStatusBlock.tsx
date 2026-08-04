import "@shopify/ui-extensions/preact";
import type { Api } from "@shopify/ui-extensions/customer-account.order-status.block.render";
import { render } from "preact";

import { readReturnPortalContext } from "./returnPortalUrl.js";
import { getReturnPortalUrlFromContext } from "./runtime.js";

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

export default function extension(api: Api) {
  render(
    <OrderStatusBlock href={getReturnPortalUrlFromContext(readReturnPortalContext(api))} />,
    document.body,
  );
}
