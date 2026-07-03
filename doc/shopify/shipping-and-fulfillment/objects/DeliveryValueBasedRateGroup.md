---
title: DeliveryValueBasedRateGroup - GraphQL Admin
description: |-
  A rate group for a value-based shipping option.

  Contains rates that define price tiers based on cart value.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryValueBasedRateGroup
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryValueBasedRateGroup.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Value​Based​Rate​Group

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A rate group for a value-based shipping option.

Contains rates that define price tiers based on cart value.

## Fields

* conditions

  [Delivery​Rate​Group​Conditions!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryRateGroupConditions)

  non-null

  Conditions that limit this rate group to specific collections or origin locations.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally unique ID.

* rates

  [Delivery​Value​Based​Rate​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryValueBasedRateConnection)

  non-null

  The value-based rates in this rate group.

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

### Fields and connections with this object

* [DeliveryValueBasedOptionDefinition.rateGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryValueBasedOptionDefinition#field-DeliveryValueBasedOptionDefinition.fields.rateGroups)
* [DeliveryValueBasedRateGroupConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryValueBasedRateGroupConnection#returns-nodes)
* [DeliveryValueBasedRateGroupEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryValueBasedRateGroupEdge#field-DeliveryValueBasedRateGroupEdge.fields.node)

***

## Interfaces

* [Delivery​Option​Definition​Rate​Group](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DeliveryOptionDefinitionRateGroup)

  interface

***

## DeliveryValueBasedRateGroup Implements

### Implements

* [Delivery​Option​Definition​Rate​Group](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DeliveryOptionDefinitionRateGroup)
