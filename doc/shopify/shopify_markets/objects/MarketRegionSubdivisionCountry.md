---
title: MarketRegionSubdivisionCountry - GraphQL Admin
description: A country that a subdivision belongs to.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketRegionSubdivisionCountry
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketRegionSubdivisionCountry.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Market​Region​Subdivision​Country

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A country that a subdivision belongs to.

## Fields

* code

  [Country​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  non-null

  The ISO code identifying the country.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the country.

***

## Map

### Fields with this object

* [MarketRegionSubdivision.country](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketRegionSubdivision#field-MarketRegionSubdivision.fields.country)
