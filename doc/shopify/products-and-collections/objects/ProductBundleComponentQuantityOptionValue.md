---
title: ProductBundleComponentQuantityOptionValue - GraphQL Admin
description: A quantity option value related to a componentized product.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentQuantityOptionValue
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentQuantityOptionValue.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Bundle​Component​Quantity​Option​Value

object

Requires `read_products` access scope.

A quantity option value related to a componentized product.

## Fields

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the option value.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the option value.

***

## Map

### Fields with this object

* [ProductBundleComponentQuantityOption.values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentQuantityOption#field-ProductBundleComponentQuantityOption.fields.values)
