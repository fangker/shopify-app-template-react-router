---
title: PickupInStoreLocation - GraphQL Admin
description: A location for in-store pickup.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PickupInStoreLocation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PickupInStoreLocation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Pickup​In​Store​Location

object

Requires `read_draft_orders` access scope.

A location for in-store pickup.

## Fields

* code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The code of the pickup location.

* distance​From​Buyer

  [Distance](https://shopify.dev/docs/api/admin-graphql/latest/objects/Distance)

  Distance from the buyer to the pickup location.

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A unique identifier for this pickup location.

* instructions

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Pickup instructions.

* location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The location ID of the pickup location.

* source

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The source of the pickup location.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Title of the pickup location.

***

## Map

### Fields with this object

* [DraftOrderAvailableDeliveryOptions.availableLocalPickupOptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAvailableDeliveryOptions#field-DraftOrderAvailableDeliveryOptions.fields.availableLocalPickupOptions)
