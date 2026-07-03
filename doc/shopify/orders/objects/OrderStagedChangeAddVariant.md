---
title: OrderStagedChangeAddVariant - GraphQL Admin
description: >-
  A change to the order representing the addition of an existing product
  variant.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeAddVariant
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeAddVariant.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Order​Staged​Change​Add​Variant

object

Requires `read_order_edits` access scope.

A change to the order representing the addition of an existing product variant.

## Fields

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the product variant that was added.

* variant

  [Product​Variant!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  non-null

  The product variant that was added.

***

## Map

### Possible type in

* [Order​Staged​Change](https://shopify.dev/docs/api/admin-graphql/latest/unions/OrderStagedChange)
