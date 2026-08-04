import '@shopify/ui-extensions';

//@ts-ignore
declare module './src/OrderActionMenuItem.tsx' {
  const shopify: import('@shopify/ui-extensions/customer-account.order.action.menu-item.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/OrderStatusBlock.tsx' {
  const shopify: import('@shopify/ui-extensions/customer-account.order-status.block.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/runtime.ts' {
  const shopify:
    | import('@shopify/ui-extensions/customer-account.order.action.menu-item.render').Api
    | import('@shopify/ui-extensions/customer-account.order-status.block.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/returnPortalUrl.ts' {
  const shopify:
    | import('@shopify/ui-extensions/customer-account.order.action.menu-item.render').Api
    | import('@shopify/ui-extensions/customer-account.order-status.block.render').Api;
  const globalThis: { shopify: typeof shopify };
}
