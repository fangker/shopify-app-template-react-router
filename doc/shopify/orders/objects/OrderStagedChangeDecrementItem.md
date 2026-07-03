---
title: OrderStagedChangeDecrementItem - GraphQL Admin
description: An removal of items from an existing line item on the order.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeDecrementItem
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeDecrementItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Order​Staged​Change​Decrement​Item

object

Requires `read_order_edits` access scope.

An removal of items from an existing line item on the order.

## Fields

* delta

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of items removed.

* line​Item

  [Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

  non-null

  The original line item.

* restock

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  The intention to restock the removed items.

***

## Map

### Possible type in

* [Order​Staged​Change](https://shopify.dev/docs/api/admin-graphql/latest/unions/OrderStagedChange)
