---
title: DeliveryPromiseProvider - GraphQL Admin
description: >-
  A delivery promise provider. Currently restricted to select approved delivery
  promise partners.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseProvider
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseProvider.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Promise​Provider

object

Requires `read_delivery_promises` access scope.

A delivery promise provider. Currently restricted to select approved delivery promise partners.

## Fields

* active

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the delivery promise provider is active. Defaults to `true` when creating a provider.

* fulfillment​Delay

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The number of seconds to add to the current time as a buffer when looking up delivery promises. Represents how long the shop requires before releasing an order to the fulfillment provider.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* location

  [Location!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  non-null

  The location associated with this delivery promise provider.

* time​Zone

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The time zone to be used for interpreting day of week and cutoff times in delivery schedules when looking up delivery promises.

***

## Map

No referencing types

***

## Queries

* [delivery​Promise​Provider](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryPromiseProvider)

  query

  Lookup a delivery promise provider.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the location associated with the delivery promise provider.

  ***

***

## DeliveryPromiseProvider Queries

### Queried by

* [delivery​Promise​Provider](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryPromiseProvider)

***

## Mutations

* [delivery​Promise​Provider​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryPromiseProviderUpsert)

  mutation

  Creates or updates a delivery promise provider. Currently restricted to select approved delivery promise partners.

  * active

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    ### Arguments

    Whether the delivery promise provider is active. Defaults to `true` when creating a provider.

  * fulfillment​Delay

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of seconds to add to the current time as a buffer when looking up delivery promises. Represents how long the shop requires before releasing an order to the fulfillment provider.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the location that will be associated with the delivery promise provider.

  * time​Zone

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The time zone to be used for interpreting day of week and cutoff times in delivery schedules when looking up delivery promises. Defaults to `UTC` when creating a provider.

  ***

***

## DeliveryPromiseProvider Mutations

### Mutated by

* [delivery​Promise​Provider​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryPromiseProviderUpsert)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## DeliveryPromiseProvider Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
