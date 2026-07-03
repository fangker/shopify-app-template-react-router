---
title: RefundLineItem - GraphQL Admin
description: >-
  A
  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
  or
  [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  being refunded from an order. Each refund line item tracks the quantity,

  pricing, and restocking details for items returned to the merchant.


  The refund line item links to the original

  [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)
  from

  the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  and includes financial information such as the refunded price, subtotal, and

  taxes in both shop and presentment currencies. The
  [`restockType`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem#field-RefundLineItem.fields.restockType)

  field indicates whether and how the merchant restocks the returned items to

  inventory, while the
  [`location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem#field-RefundLineItem.fields.location)

  field specifies where restocking occurs.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Refund​Line​Item

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

A [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) being refunded from an order. Each refund line item tracks the quantity, pricing, and restocking details for items returned to the merchant.

The refund line item links to the original [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) from the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and includes financial information such as the refunded price, subtotal, and taxes in both shop and presentment currencies. The [`restockType`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem#field-RefundLineItem.fields.restockType) field indicates whether and how the merchant restocks the returned items to inventory, while the [`location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem#field-RefundLineItem.fields.location) field specifies where restocking occurs.

## Fields

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A globally-unique ID.

* line​Item

  [Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

  non-null

  The `LineItem` resource associated to the refunded line item.

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The inventory restock location.

* price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The price of a refunded line item in shop and presentment currencies.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of a refunded line item.

* restocked

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the refunded line item was restocked. Not applicable in the context of a SuggestedRefund.

* restock​Type

  [Refund​Line​Item​Restock​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/RefundLineItemRestockType)

  non-null

  The type of restock for the refunded line item.

* subtotal​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The subtotal price of a refunded line item in shop and presentment currencies.

* total​Tax​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total tax charged on a refunded line item in shop and presentment currencies.

### Deprecated fields

* price

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* subtotal

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* total​Tax

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [Refund.refundLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.refundLineItems)
* [RefundLineItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundLineItemConnection#returns-nodes)
* [RefundLineItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItemEdge#field-RefundLineItemEdge.fields.node)
* [SuggestedRefund.refundLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedRefund#field-SuggestedRefund.fields.refundLineItems)
