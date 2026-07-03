---
title: CalculatedReturnLineItem - GraphQL Admin
description: A calculated return line item.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedReturnLineItem
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedReturnLineItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Calculated​Return​Line​Item

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

A calculated return line item.

## Fields

* fulfillment​Line​Item

  [Fulfillment​Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItem)

  non-null

  The fulfillment line item from which items are returned.

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A globally-unique ID.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity being returned.

* restocking​Fee

  [Calculated​Restocking​Fee](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedRestockingFee)

  The restocking fee of the return line item.

* subtotal​Before​Order​Discounts​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The subtotal of the return line item before order discounts.

* subtotal​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The subtotal of the return line item.

* total​Tax​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total tax of the return line item.

***

## Map

### Fields with this object

* [CalculatedReturn.returnLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedReturn#field-CalculatedReturn.fields.returnLineItems)
