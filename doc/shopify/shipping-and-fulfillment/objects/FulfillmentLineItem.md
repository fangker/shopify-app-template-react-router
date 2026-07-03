---
title: FulfillmentLineItem - GraphQL Admin
description: >-
  A line item from an

  [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  that's included in a
  [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment).

  Links the fulfillment to specific items from the original order, tracking how

  many units were fulfilled.


  > Note: The discounted total excludes order-level discounts, showing only
  line-item specific discount amounts.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItem
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Fulfillment​Line​Item

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

A line item from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) that's included in a [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment). Links the fulfillment to specific items from the original order, tracking how many units were fulfilled.

***

**Note:** The discounted total excludes order-level discounts, showing only line-item specific discount amounts.

***

## Fields

* discounted​Total​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total price after discounts are applied in shop and presentment currencies. This value doesn't include order-level discounts.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* line​Item

  [Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

  non-null

  The associated order's line item.

* original​Total​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total price before discounts are applied in shop and presentment currencies.

* quantity

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Number of line items in the fulfillment.

### Deprecated fields

* discounted​Total

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* original​Total

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [CalculatedReturnLineItem.fulfillmentLineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedReturnLineItem#field-CalculatedReturnLineItem.fields.fulfillmentLineItem)
* [Fulfillment.fulfillmentLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentLineItems)
* [FulfillmentLineItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentLineItemConnection#returns-nodes)
* [FulfillmentLineItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItemEdge#field-FulfillmentLineItemEdge.fields.node)
* [ReturnLineItem.fulfillmentLineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnLineItem#field-ReturnLineItem.fields.fulfillmentLineItem)
* [ReturnableFulfillmentLineItem.fulfillmentLineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillmentLineItem#field-ReturnableFulfillmentLineItem.fields.fulfillmentLineItem)
* [ReverseFulfillmentOrderLineItem.fulfillmentLineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderLineItem#field-ReverseFulfillmentOrderLineItem.fields.fulfillmentLineItem)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## FulfillmentLineItem Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
