import "@shopify/ui-extensions/preact";
import type {} from "@shopify/ui-extensions/customer-account.order.action.render";
import { render } from "preact";

import {
  getReturnPortalUrlFromContext,
  readReturnPortalContextFromShopifyApi,
} from "./runtime.js";

function OrderAction({ href }: { href: string }) {
  return (
    <s-customer-account-action heading="Request a return">
      <s-stack gap="base">
        <s-paragraph>
          Start a ReturnFast return request for this order.
        </s-paragraph>
        <s-button slot="primary-action" href={href}>
          Continue to ReturnFast
        </s-button>
      </s-stack>
    </s-customer-account-action>
  );
}

export default function extension() {
  render(
    <OrderAction
      href={getReturnPortalUrlFromContext(readReturnPortalContextFromShopifyApi())}
    />,
    document.body,
  );
}
