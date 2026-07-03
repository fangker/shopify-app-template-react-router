---
title: MarketConditions - GraphQL Admin
description: The conditions that determine whether a visitor is in a market.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketConditions'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketConditions.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Market​Conditions

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

The conditions that determine whether a visitor is in a market.

## Fields

* channels​Condition

  [Channels​Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelsCondition)

  The channel conditions that determine whether a visitor is in the market.

* company​Locations​Condition

  [Company​Locations​Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationsCondition)

  The company location conditions that determine whether a visitor is in the market.

* condition​Types

  [\[Market​Condition​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketConditionType)

  non-null

  The set of condition types that are defined for the market.

* locations​Condition

  [Locations​Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationsCondition)

  The retail location conditions that determine whether a visitor is in the market.

* regions​Condition

  [Regions​Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/RegionsCondition)

  The region conditions that determine whether a visitor is in the market.

***

## Map

### Fields with this object

* [Market.conditions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.conditions)
