import "@shopify/ui-extensions/preact";
import type {} from "@shopify/ui-extensions/customer-account.order-index.block.render";
import { render } from "preact";

import {
  getReturnPortalUrlFromContext,
  readReturnPortalContextFromShopifyApi,
} from "./runtime.js";

function OrderIndexBlock({ href }: { href: string }) {
  return (
    <s-section heading="ReturnFast">
      <s-stack gap="base">
        <s-paragraph color="subdued">
          Need to return an item? Open ReturnFast and choose the order.
        </s-paragraph>
        <s-button href={href} variant="primary">
          Start a return
        </s-button>
      </s-stack>
    </s-section>
  );
}

export default function extension() {
  render(
    <OrderIndexBlock
      href={getReturnPortalUrlFromContext(readReturnPortalContextFromShopifyApi())}
    />,
    document.body,
  );
}
