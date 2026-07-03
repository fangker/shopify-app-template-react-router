---
title: ProductPriceRangeV2 - GraphQL Admin
description: The price range of the product.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPriceRangeV2
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPriceRangeV2.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Price​Range​V2

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

### Fields with this object

* [Product.priceRangeV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.priceRangeV2)
* [ProductContextualPricing.priceRange](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductContextualPricing#field-ProductContextualPricing.fields.priceRange)
