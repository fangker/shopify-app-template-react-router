---
title: ShopResourceLimits - GraphQL Admin
description: Resource limits of a shop.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopResourceLimits'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopResourceLimits.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shop​Resource​Limits

object

Resource limits of a shop.

## Fields

* location​Limit

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  Maximum number of locations allowed.

* max​Product​Options

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  Maximum number of product options allowed.

* max​Product​Variants

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The maximum number of variants allowed per product.

* redirect​Limit​Reached

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the shop has reached the limit of the number of URL redirects it can make for resources.

***

## Map

### Fields with this object

* [Shop.resourceLimits](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.resourceLimits)
