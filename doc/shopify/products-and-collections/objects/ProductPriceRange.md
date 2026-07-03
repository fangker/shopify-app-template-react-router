---
title: ProductPriceRange - GraphQL Admin
description: The price range of the product.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPriceRange'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPriceRange.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Price​Range

object

Requires `read_products` access scope.

The price range of the product.

## Fields

* max​Variant​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The highest variant's price.

* min​Variant​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The lowest variant's price.

***

## Map
