---
title: ProductContextualPricing - GraphQL Admin
description: >-
  The price of a
  [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  in a specific country. Shows the minimum and maximum variant prices through
  the

  price range and the count of fixed quantity rules that apply to the product's

  variants in the given pricing context.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductContextualPricing
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductContextualPricing.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Contextual​Pricing

object

Requires `read_products` access scope.

The price of a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in a specific country. Shows the minimum and maximum variant prices through the price range and the count of fixed quantity rules that apply to the product's variants in the given pricing context.

## Fields

* fixed​Quantity​Rules​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of fixed quantity rules for the product's variants on the price list.

* max​Variant​Pricing

  [Product​Variant​Contextual​Pricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantContextualPricing)

  The pricing of the variant with the highest price in the given context.

* min​Variant​Pricing

  [Product​Variant​Contextual​Pricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantContextualPricing)

  The pricing of the variant with the lowest price in the given context.

* price​Range

  [Product​Price​Range​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPriceRangeV2)

  non-null

  The minimum and maximum prices of a product, expressed in decimal numbers. For example, if the product is priced between $10.00 and $50.00, then the price range is $10.00 - $50.00.

***

## Map

### Fields with this object

* [Product.contextualPricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.contextualPricing)
