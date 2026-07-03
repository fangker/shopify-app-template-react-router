---
title: DeliveryWeightBasedRate - GraphQL Admin
description: >-
  A weight-based shipping rate.


  Weight-based rates charge different prices depending on package weight, which
  can

  include packaging weight in addition to item weight, and may include optional

  transit time estimates.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryWeightBasedRate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryWeightBasedRate.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Weight​Based​Rate

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A weight-based shipping rate.

Weight-based rates charge different prices depending on package weight, which can include packaging weight in addition to item weight, and may include optional transit time estimates.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally unique ID.

* max​Weight

  [Weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/Weight)

  The maximum package weight for this rate tier.

* min​Weight

  [Weight!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Weight)

  non-null

  The minimum package weight for this rate tier.

* price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The price charged for this rate.

* transit​Time​Max​Seconds

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The maximum transit time estimate in seconds.

* transit​Time​Min​Seconds

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The minimum transit time estimate in seconds.

***

## Map

### Fields and connections with this object

* [DeliveryWeightBasedRateConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryWeightBasedRateConnection#returns-nodes)
* [DeliveryWeightBasedRateEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryWeightBasedRateEdge#field-DeliveryWeightBasedRateEdge.fields.node)
* [DeliveryWeightBasedRateGroup.rates](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryWeightBasedRateGroup#field-DeliveryWeightBasedRateGroup.fields.rates)

***

## Interfaces

* [Delivery​Rate](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DeliveryRate)

  interface

***

## DeliveryWeightBasedRate Implements

### Implements

* [Delivery​Rate](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DeliveryRate)
