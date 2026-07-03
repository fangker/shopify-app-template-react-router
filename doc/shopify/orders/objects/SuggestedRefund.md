---
title: SuggestedRefund - GraphQL Admin
description: >-
  A refund amount that Shopify suggests based on the items, duties, and shipping

  costs that customers return. Provides a breakdown of all monetary values

  including subtotals, taxes, discounts, and the maximum refundable amount.


  The suggested refund includes
  [`RefundLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem)

  objects to refund with their quantities and restock instructions,
  [`RefundDuty`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundDuty)

  objects for duty reimbursements, and
  [`ShippingRefund`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingRefund)

  for shipping cost refunds. Provides
  [`SuggestedOrderTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedOrderTransaction)

  objects and the
  [`SuggestedRefundMethod`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SuggestedRefundMethod)

  interface to process the refund through the appropriate gateways.


  Learn more about [previewing and refunding
  duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties#step-3-preview-a-refund-that-includes-duties).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedRefund'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedRefund.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Suggested​Refund

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

A refund amount that Shopify suggests based on the items, duties, and shipping costs that customers return. Provides a breakdown of all monetary values including subtotals, taxes, discounts, and the maximum refundable amount.

The suggested refund includes [`RefundLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem) objects to refund with their quantities and restock instructions, [`RefundDuty`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundDuty) objects for duty reimbursements, and [`ShippingRefund`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingRefund) for shipping cost refunds. Provides [`SuggestedOrderTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedOrderTransaction) objects and the [`SuggestedRefundMethod`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SuggestedRefundMethod) interface to process the refund through the appropriate gateways.

Learn more about [previewing and refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties#step-3-preview-a-refund-that-includes-duties).

## Fields

* amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total monetary value to be refunded in shop and presentment currencies.

* discounted​Subtotal​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The sum of all the discounted prices of the line items being refunded.

* maximum​Refundable​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total monetary value available to refund in shop and presentment currencies.

* refund​Duties

  [\[Refund​Duty!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundDuty)

  non-null

  A list of duties to be refunded from the order.

* refund​Line​Items

  [\[Refund​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem)

  non-null

  A list of line items to be refunded, along with restock instructions.

* shipping

  [Shipping​Refund!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingRefund)

  non-null

  The shipping costs to be refunded from the order.

* subtotal​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The sum of all the prices of the line items being refunded in shop and presentment currencies.

* suggested​Refund​Methods

  [\[Suggested​Refund​Method!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SuggestedRefundMethod)

  non-null

  A list of suggested refund methods.

* suggested​Transactions

  [\[Suggested​Order​Transaction!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedOrderTransaction)

  non-null

  A list of suggested order transactions.

* total​Cart​Discount​Amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total cart discount amount that was applied to all line items in this refund.

* total​Duties​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The sum of all the duties being refunded from the order in shop and presentment currencies. The value must be positive.

* total​Tax​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The sum of the taxes being refunded from the order in shop and presentment currencies. The value must be positive.

### Deprecated fields

* amount

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* maximum​Refundable

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* subtotal

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* total​Taxes

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

***

## Map

### Fields with this object

* [Order.suggestedRefund](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.suggestedRefund)
