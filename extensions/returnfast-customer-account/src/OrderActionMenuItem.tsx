import "@shopify/ui-extensions/preact";
import type {} from "@shopify/ui-extensions/customer-account.order.action.menu-item.render";
import { render } from "preact";

import {
  getReturnPortalUrlFromContext,
  readShopifyApi,
  readReturnPortalContextFromShopifyApi,
  readShopFromApiSessionToken,
  hasOrderContext,
} from "./runtime.js";
import { fetchReturnPermission } from "./returnPermission.js";

function OrderActionMenuItem({ href }: { href: string }) {
  return <s-button href={href}>Start a return</s-button>;
}

function OrderActionMenuItemPreview() {
  // Visual marker only. The href is a no-op so that accidental clicks in the
  // Shopify Extension Preview cannot reach the customer portal. Production
  // renders always flow through fetchReturnPermission() first.
  return (
    <s-button href="#" disabled>
      Start a return (preview)
    </s-button>
  );
}

export default async function extension() {
  const shopifyApi = readShopifyApi();

  // Preview / design mode: no real order is bound to the runtime, so the
  // permission API has nothing to evaluate. Render a demo entry so the
  // extension slot stays visible to the developer. Clicking it does nothing.
  if (!hasOrderContext(shopifyApi)) {
    console.info(
      "[ReturnFast] order action menu: no order context, rendering preview button",
    );
    render(<OrderActionMenuItemPreview />, document.body);
    return;
  }

  const permission = await fetchReturnPermission(shopifyApi);
  if (!permission.enabled) {
    render(null, document.body);
    return;
  }

  const context = readReturnPortalContextFromShopifyApi(shopifyApi);
  const href = getReturnPortalUrlFromContext({
    ...context,
    shop: context.shop ?? (await readShopFromApiSessionToken(shopifyApi)),
  });

  render(<OrderActionMenuItem href={href} />, document.body);
}
