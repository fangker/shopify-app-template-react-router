import "@shopify/ui-extensions/preact";
import type { Api } from "@shopify/ui-extensions/customer-account.order.action.menu-item.render";
import { render } from "preact";

import { getReturnPortalUrlFromContext, readShopFromApiSessionToken } from "./runtime.js";

function OrderActionMenuItem({ href }: { href: string }) {
  return <s-button href={href}>Start a return</s-button>;
}

export default async function extension(api: Api) {
  const href = getReturnPortalUrlFromContext({
    shop: await readShopFromApiSessionToken(api),
    orderId: api.orderId,
  });

  render(<OrderActionMenuItem href={href} />, document.body);
}
