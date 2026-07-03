---
title: DiscountCollections - GraphQL Admin
description: >-
  A list of collections that the discount can have as a prerequisite or a list
  of

  collections to which the discount can be applied.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Collections

object

Requires Apps must have `read_discounts` access scope.

A list of collections that the discount can have as a prerequisite or a list of collections to which the discount can be applied.

## Fields

* collections

  [Collection​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection)

  non-null

  The list of collections that the discount can have as a prerequisite or the list of collections to which the discount can be applied.

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

### Possible type in

* [Discount​Items](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountItems)
