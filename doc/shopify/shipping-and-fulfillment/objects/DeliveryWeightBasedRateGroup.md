---
title: DeliveryWeightBasedRateGroup - GraphQL Admin
description: |-
  A rate group for a weight-based shipping option.

  Contains rates that define price tiers based on package weight.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryWeightBasedRateGroup
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryWeightBasedRateGroup.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Weight​Based​Rate​Group

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A rate group for a weight-based shipping option.

Contains rates that define price tiers based on package weight.

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

  [Delivery​Weight​Based​Rate​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryWeightBasedRateConnection)

  non-null

  The weight-based rates in this rate group.

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

* [DeliveryWeightBasedOptionDefinition.rateGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryWeightBasedOptionDefinition#field-DeliveryWeightBasedOptionDefinition.fields.rateGroups)
* [DeliveryWeightBasedRateGroupConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryWeightBasedRateGroupConnection#returns-nodes)
* [DeliveryWeightBasedRateGroupEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryWeightBasedRateGroupEdge#field-DeliveryWeightBasedRateGroupEdge.fields.node)

***

## Interfaces

* [Delivery​Option​Definition​Rate​Group](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DeliveryOptionDefinitionRateGroup)

  interface

***

## DeliveryWeightBasedRateGroup Implements

### Implements

* [Delivery​Option​Definition​Rate​Group](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DeliveryOptionDefinitionRateGroup)
