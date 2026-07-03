---
title: MarketRegionSubdivision - GraphQL Admin
description: A subdivision of a country which comprises a market.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketRegionSubdivision
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketRegionSubdivision.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Market​Region​Subdivision

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A subdivision of a country which comprises a market.

## Fields

* code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The ISO code identifying the subdivision.

* country

  [Market​Region​Subdivision​Country!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketRegionSubdivisionCountry)

  non-null

  The country the subdivision belongs to.

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

## MarketRegionSubdivision Implements

### Implements

* [Market​Region](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/MarketRegion)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
