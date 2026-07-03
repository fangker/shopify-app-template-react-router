---
title: MarketRegionCountry - GraphQL Admin
description: A country which comprises a market.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketRegionCountry
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketRegionCountry.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Market​Region​Country

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A country which comprises a market.

## Fields

* code

  [Country​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  non-null

  The ISO code identifying the country.

* currency

  [Currency​Setting!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencySetting)

  non-null

  The currency which this country uses given its market settings.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the region.

***

## Map

No referencing types

***

## Interfaces

* * [Market​Region](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/MarketRegion)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## MarketRegionCountry Implements

### Implements

* [Market​Region](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/MarketRegion)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
