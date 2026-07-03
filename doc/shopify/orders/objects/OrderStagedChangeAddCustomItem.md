---
title: OrderStagedChangeAddCustomItem - GraphQL Admin
description: |-
  A change to the order representing the addition of a
  custom line item. For example, you might want to add gift wrapping service
  as a custom line item.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeAddCustomItem
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeAddCustomItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Order​Staged​Change​Add​Custom​Item

object

Requires `read_order_edits` access scope.

A change to the order representing the addition of a custom line item. For example, you might want to add gift wrapping service as a custom line item.

## Fields

* original​Unit​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The price of an individual item without any discounts applied. This value can't be negative.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the custom item to add to the order. This value must be greater than zero.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the custom item.

***

## Map

### Possible type in

* [Order​Staged​Change](https://shopify.dev/docs/api/admin-graphql/latest/unions/OrderStagedChange)
