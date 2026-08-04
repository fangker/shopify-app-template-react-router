import "@shopify/ui-extensions/preact";
import type {} from "@shopify/ui-extensions/customer-account.order.action.menu-item.render";
import { render } from "preact";

import {
  getReturnPortalUrlFromContext,
  readShopifyApi,
  readReturnPortalContextFromShopifyApi,
  readShopFromApiSessionToken,
} from "./runtime.js";

function OrderActionMenuItem({ href }: { href: string }) {
  return <s-button href={href}>Start a return</s-button>;
}

export default async function extension() {
  const shopifyApi = readShopifyApi();
  const context = readReturnPortalContextFromShopifyApi(shopifyApi);

  const href = getReturnPortalUrlFromContext({
    ...context,
    shop: context.shop ?? (await readShopFromApiSessionToken(shopifyApi)),
  });

  render(<OrderActionMenuItem href={href} />, document.body);
}
