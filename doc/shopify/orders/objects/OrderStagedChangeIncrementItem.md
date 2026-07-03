---
title: OrderStagedChangeIncrementItem - GraphQL Admin
description: An addition of items to an existing line item on the order.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeIncrementItem
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeIncrementItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Order​Staged​Change​Increment​Item

object

Requires `read_order_edits` access scope.

An addition of items to an existing line item on the order.

## Fields

* delta

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of items added.

* line​Item

  [Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

  non-null

  The original line item.

***

## Map

### Possible type in

* [Order​Staged​Change](https://shopify.dev/docs/api/admin-graphql/latest/unions/OrderStagedChange)
