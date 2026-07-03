---
title: QuantityPriceBreak - GraphQL Admin
description: |-
  Quantity price breaks lets you offer different rates that are based on the
  amount of a specific variant being ordered.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPriceBreak'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPriceBreak.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Quantity​Price​Break

object

Requires `read_products` access scope. Also: The user must have permission to view catalogs.

Quantity price breaks lets you offer different rates that are based on the amount of a specific variant being ordered.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* minimum​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  Minimum quantity required to reach new quantity break price.

* price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The price of variant after reaching the minimum quanity.

* price​List

  [Price​List!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

  non-null

  The price list associated with this quantity break.

* variant

  [Product​Variant!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  non-null

  The product variant associated with this quantity break.

***

## Map

### Fields and connections with this object

* [PriceListPrice.quantityPriceBreaks](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice#field-PriceListPrice.fields.quantityPriceBreaks)
* [ProductVariantContextualPricing.quantityPriceBreaks](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantContextualPricing#field-ProductVariantContextualPricing.fields.quantityPriceBreaks)
* [QuantityPriceBreakConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/QuantityPriceBreakConnection#returns-nodes)
* [QuantityPriceBreakEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPriceBreakEdge#field-QuantityPriceBreakEdge.fields.node)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## QuantityPriceBreak Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
