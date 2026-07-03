---
title: DiscountMarkets - GraphQL Admin
description: Markets where the discount is available.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountMarkets'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountMarkets.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Markets

object

Requires Apps must have `read_discounts` access scope.

Markets where the discount is available.

## Fields

* markets

  [Market​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection)

  non-null

  The list of markets where the discount is available.

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

* markets​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of markets where the discount is available.

***

## Map

### Possible type in

* [Discount​Context](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountContext)
