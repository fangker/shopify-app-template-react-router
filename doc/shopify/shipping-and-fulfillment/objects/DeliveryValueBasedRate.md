---
title: DeliveryValueBasedRate - GraphQL Admin
description: >-
  A value-based shipping rate.


  Defines price, optional transit time estimates, and the cart-value range for
  this rate.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryValueBasedRate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryValueBasedRate.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Value​Based​Rate

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A value-based shipping rate.

Defines price, optional transit time estimates, and the cart-value range for this rate.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally unique ID.

* max​Value

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The maximum cart value (inclusive) for this rate. Null means no upper limit.

* min​Value

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The minimum cart value (inclusive) for this rate.

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

* [DeliveryValueBasedRateConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryValueBasedRateConnection#returns-nodes)
* [DeliveryValueBasedRateEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryValueBasedRateEdge#field-DeliveryValueBasedRateEdge.fields.node)
* [DeliveryValueBasedRateGroup.rates](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryValueBasedRateGroup#field-DeliveryValueBasedRateGroup.fields.rates)

***

## Interfaces

* [Delivery​Rate](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DeliveryRate)

  interface

***

## DeliveryValueBasedRate Implements

### Implements

* [Delivery​Rate](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DeliveryRate)
