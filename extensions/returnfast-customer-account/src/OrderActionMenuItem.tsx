import "@shopify/ui-extensions/preact";
import type {} from "@shopify/ui-extensions/customer-account.order.action.menu-item.render";
import { render } from "preact";

import { getReturnPortalUrl } from "./runtime.js";

function OrderActionMenuItem() {
  return <s-button href={getReturnPortalUrl()}>Start a return</s-button>;
}

render(<OrderActionMenuItem />, document.body);
