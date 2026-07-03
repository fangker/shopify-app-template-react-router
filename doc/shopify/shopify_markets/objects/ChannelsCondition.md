---
title: ChannelsCondition - GraphQL Admin
description: A condition checking the channel that the visitor is shopping from.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelsCondition'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelsCondition.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Channels​Condition

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A condition checking the channel that the visitor is shopping from.

## Fields

* application​Level

  [Market​Condition​Application​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketConditionApplicationType)

  The application level for the condition.

* channels

  [Channel​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection)

  non-null

  The channels that comprise the market.

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

* channels​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The total number of channels condition.

***

## Map

### Fields with this object

* [MarketConditions.channelsCondition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketConditions#field-MarketConditions.fields.channelsCondition)
