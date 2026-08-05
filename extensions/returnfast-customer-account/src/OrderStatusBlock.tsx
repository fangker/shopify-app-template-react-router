import "@shopify/ui-extensions/preact";
import type {} from "@shopify/ui-extensions/customer-account.order-status.block.render";
import { render } from "preact";

import {
  getReturnPortalUrlFromContext,
  readShopifyApi,
  readReturnPortalContextFromShopifyApi,
  hasOrderContext,
} from "./runtime.js";
import { fetchReturnPermission } from "./returnPermission.js";

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

function OrderStatusBlockDisabled() {
  return (
    <s-section heading="ReturnFast">
      <s-paragraph color="subdued">
        Returns are not available for this order.
      </s-paragraph>
    </s-section>
  );
}

function OrderStatusBlockSyncError() {
  return (
    <s-section heading="ReturnFast">
      <s-paragraph color="subdued">
        Return availability is syncing for this order. Please check again later.
      </s-paragraph>
    </s-section>
  );
}

function OrderStatusBlockPreview() {
  // Visual marker only for Shopify Extension Preview. Disabled href keeps the
  // entry safe if a developer clicks it; production renders always validate
  // permissions via fetchReturnPermission() first.
  return (
    <s-section heading="ReturnFast (preview)">
      <s-stack gap="base">
        <s-paragraph color="subdued">
          Demo block shown because the extension preview has no real order
          context. Production customers will see this section only when a return
          is allowed.
        </s-paragraph>
        <s-button href="#" variant="primary" disabled>
          Request a return (preview)
        </s-button>
      </s-stack>
    </s-section>
  );
}

export default async function extension() {
  const shopifyApi = readShopifyApi();

  if (!hasOrderContext(shopifyApi)) {
    console.info(
      "[ReturnFast] order status block: no order context, rendering preview block",
    );
    render(<OrderStatusBlockPreview />, document.body);
    return;
  }

  const permission = await fetchReturnPermission(shopifyApi);

  if (permission.source === "order_not_synced") {
    render(<OrderStatusBlockSyncError />, document.body);
    return;
  }

  if (!permission.enabled) {
    render(<OrderStatusBlockDisabled />, document.body);
    return;
  }

  const context = readReturnPortalContextFromShopifyApi(shopifyApi);
  const href = getReturnPortalUrlFromContext(context);

  render(<OrderStatusBlock href={href} />, document.body);
}
