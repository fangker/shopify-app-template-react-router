---
title: ProductVariantContextualPricing - GraphQL Admin
description: |-
  The price of a product variant in a specific country.
  Prices vary between countries.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantContextualPricing
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantContextualPricing.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Variant​Contextual​Pricing

object

Requires `read_products` access scope.

The price of a product variant in a specific country. Prices vary between countries.

## Fields

* compare​At​Price

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The final compare-at price after all adjustments are applied.

* price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The final price after all adjustments are applied.

* quantity​Price​Breaks

  [Quantity​Price​Break​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/QuantityPriceBreakConnection)

  non-null

  A list of quantity breaks for the product variant.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Quantity​Price​Break​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/QuantityPriceBreakSortKeys)

    Default:MINIMUM\_QUANTITY

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* quantity​Rule

  [Quantity​Rule!](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRule)

  non-null

  The quantity rule applied for a given context.

* unit​Price

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The unit price value for the given context based on the variant measurement.

***

## Map

### Fields with this object

* [ProductContextualPricing.maxVariantPricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductContextualPricing#field-ProductContextualPricing.fields.maxVariantPricing)
* [ProductContextualPricing.minVariantPricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductContextualPricing#field-ProductContextualPricing.fields.minVariantPricing)
* [ProductVariant.contextualPricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.contextualPricing)
