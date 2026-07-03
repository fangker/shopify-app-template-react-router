---
title: ProductVariantPricePair - GraphQL Admin
description: The compare-at price and price of a variant sharing a currency.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantPricePair
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantPricePair.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Variant​Price​Pair

object

The compare-at price and price of a variant sharing a currency.

## Fields

* compare​At​Price

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The compare-at price of the variant with associated currency.

* price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The price of the variant with associated currency.

***

## Map

### Fields and connections with this object

* [ProductVariantPricePairConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantPricePairConnection#returns-nodes)
* [ProductVariantPricePairEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantPricePairEdge#field-ProductVariantPricePairEdge.fields.node)
