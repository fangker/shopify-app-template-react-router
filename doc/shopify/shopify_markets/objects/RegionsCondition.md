---
title: RegionsCondition - GraphQL Admin
description: A condition checking the visitor's region.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/RegionsCondition'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/RegionsCondition.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Regions​Condition

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A condition checking the visitor's region.

## Fields

* application​Level

  [Market​Condition​Application​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketConditionApplicationType)

  The application level for the condition.

* regions

  [Market​Region​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketRegionConnection)

  non-null

  The regions that comprise the market.

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

  ***

***

## Map

### Fields with this object

* [MarketConditions.regionsCondition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketConditions#field-MarketConditions.fields.regionsCondition)
