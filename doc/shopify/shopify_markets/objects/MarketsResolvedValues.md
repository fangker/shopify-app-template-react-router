---
title: MarketsResolvedValues - GraphQL Admin
description: |-
  The resolved values based on the markets configuration for a buyer signal.
  Resolved values include the resolved catalogs, web presences, currency, and
  price inclusivity.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsResolvedValues
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsResolvedValues.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Markets​Resolved​Values

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

The resolved values based on the markets configuration for a buyer signal. Resolved values include the resolved catalogs, web presences, currency, and price inclusivity.

## Fields

* catalogs

  [Market​Catalog​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketCatalogConnection)

  non-null

  The resolved catalogs.

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

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  The resolved currency code.

* price​Inclusivity

  [Resolved​Price​Inclusivity!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResolvedPriceInclusivity)

  non-null

  The resolved price inclusivity attributes.

* web​Presences

  [Market​Web​Presence​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketWebPresenceConnection)

  non-null

  The resolved web presences ordered by priority.

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

No referencing types

***

## Queries

* [markets​Resolved​Values](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketsResolvedValues)

  query

  The resolved values for a buyer signal.

  * buyer​Signal

    [Buyer​Signal​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BuyerSignalInput)

    required

    ### Arguments

    The buyer signal.

  ***

***

## MarketsResolvedValues Queries

### Queried by

* [markets​Resolved​Values](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketsResolvedValues)
