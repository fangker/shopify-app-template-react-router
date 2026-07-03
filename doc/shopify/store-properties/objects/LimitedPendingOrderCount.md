---
title: LimitedPendingOrderCount - GraphQL Admin
description: >-
  The total number of pending orders on a shop if less then a maximum, or that
  maximum.

  The atMax field indicates when this maximum has been reached.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LimitedPendingOrderCount
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LimitedPendingOrderCount.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Limited​Pending​Order​Count

object

Requires `read_orders` access scope.

The total number of pending orders on a shop if less then a maximum, or that maximum. The atMax field indicates when this maximum has been reached.

## Fields

* at​Max

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  This is set when the number of pending orders has reached the maximum.

* count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of pendings orders on the shop. Limited to a maximum of 10000.

***

## Map
