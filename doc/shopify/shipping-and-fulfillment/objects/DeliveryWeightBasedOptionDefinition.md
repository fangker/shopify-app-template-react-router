---
title: DeliveryWeightBasedOptionDefinition - GraphQL Admin
description: >-
  A shipping option with rates based on package weight.


  Rates contain tiers that define package-weight thresholds. Checkout selects
  the

  appropriate tier using the package weight of the shipping allocation, or the

  combined package weight when allocations are grouped for weight conditions.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryWeightBasedOptionDefinition
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryWeightBasedOptionDefinition.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Weight​Based​Option​Definition

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A shipping option with rates based on package weight.

Rates contain tiers that define package-weight thresholds. Checkout selects the appropriate tier using the package weight of the shipping allocation, or the combined package weight when allocations are grouped for weight conditions.

## Fields

* currency

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  The currency used for all money values in this shipping option.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Optional description shown to buyers.

* free​Delivery​Minimum​Value

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The cart subtotal required for free shipping. Null if no threshold is set.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally unique ID for this shipping option.

* included​Collections

  [Collection​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection)

  Collections that any rate group in this shipping option applies to.

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

* included​Locations

  [Location​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection)

  Origin locations that any rate group in this shipping option applies to.

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

* is​Active

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether this shipping option is active and shown to buyers.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name shown to buyers for this shipping option.

* rate​Groups

  [Delivery​Weight​Based​Rate​Group​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryWeightBasedRateGroupConnection)

  The rate groups for this weight-based shipping option.

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

## Interfaces

* [Delivery​Option​Definition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DeliveryOptionDefinition)

  interface

***

## DeliveryWeightBasedOptionDefinition Implements

### Implements

* [Delivery​Option​Definition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DeliveryOptionDefinition)
