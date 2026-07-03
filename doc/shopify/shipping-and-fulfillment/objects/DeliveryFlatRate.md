---
title: DeliveryFlatRate - GraphQL Admin
description: |-
  A fixed-price shipping rate.

  Flat rates charge the same price regardless of cart value or weight,
  and may include optional transit time estimates.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryFlatRate'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryFlatRate.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Flat​Rate

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A fixed-price shipping rate.

Flat rates charge the same price regardless of cart value or weight, and may include optional transit time estimates.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally unique ID.

* price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The fixed price charged for this rate.

* transit​Time​Max​Seconds

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The maximum transit time estimate in seconds.

* transit​Time​Min​Seconds

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The minimum transit time estimate in seconds.

***

## Map

### Fields with this object

* [DeliveryFlatRateGroup.rate](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryFlatRateGroup#field-DeliveryFlatRateGroup.fields.rate)

***

## Interfaces

* [Delivery​Rate](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DeliveryRate)

  interface

***

## DeliveryFlatRate Implements

### Implements

* [Delivery​Rate](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DeliveryRate)
