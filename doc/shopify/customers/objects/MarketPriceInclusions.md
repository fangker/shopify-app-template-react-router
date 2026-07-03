---
title: MarketPriceInclusions - GraphQL Admin
description: The inclusive pricing strategy for a market.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketPriceInclusions
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketPriceInclusions.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Market​Price​Inclusions

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

The inclusive pricing strategy for a market.

## Fields

* adaptive​Pricing​Enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether adaptive pricing is enabled for the market. Only applicable to Managed Markets and must be ignored otherwise.

* inclusive​Duties​Pricing​Strategy

  [Inclusive​Duties​Pricing​Strategy!](https://shopify.dev/docs/api/admin-graphql/latest/enums/InclusiveDutiesPricingStrategy)

  non-null

  The inclusive duties pricing strategy of the market. This determines if prices include duties.

* inclusive​Tax​Pricing​Strategy

  [Inclusive​Tax​Pricing​Strategy!](https://shopify.dev/docs/api/admin-graphql/latest/enums/InclusiveTaxPricingStrategy)

  non-null

  The inclusive tax pricing strategy of the market. This determines if prices include taxes.

***

## Map

### Fields with this object

* [Market.priceInclusions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.priceInclusions)
