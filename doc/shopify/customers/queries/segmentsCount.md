---
title: segmentsCount - GraphQL Admin
description: The number of segments for a shop. Limited to a maximum of 10000 by default.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentsCount'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentsCount.md'
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# segments​Count

query

The number of segments for a shop. Limited to a maximum of 10000 by default.

## Arguments

* limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Default:10000

  The upper bound on count value before returning a result. Use `null` to have no limit.

***

## Possible returns

* Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  A numeric count with precision information indicating whether the count is exact or an estimate.

  * count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The count of elements.

  * precision

    [Count​Precision!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountPrecision)

    non-null

    The count's precision, or the exactness of the value.

***

## Examples

* ### segmentsCount reference
