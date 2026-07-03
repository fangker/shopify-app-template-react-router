---
title: ProductCompareAtPriceRange - GraphQL Admin
description: The compare-at price range of the product.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductCompareAtPriceRange
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductCompareAtPriceRange.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Compare​At​Price​Range

object

Requires `read_products` access scope.

The compare-at price range of the product.

## Fields

* max​Variant​Compare​At​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The highest variant's compare-at price.

* min​Variant​Compare​At​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The lowest variant's compare-at price.

***

## Map

### Fields with this object

* [Product.compareAtPriceRange](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.compareAtPriceRange)
