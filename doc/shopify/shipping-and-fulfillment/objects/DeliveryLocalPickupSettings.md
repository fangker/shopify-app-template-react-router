---
title: DeliveryLocalPickupSettings - GraphQL Admin
description: Local pickup settings associated with a location.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocalPickupSettings
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocalPickupSettings.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Local​Pickup​Settings

object

Requires Any of `locations` or `shipping` access scopes or `manage_delivery_settings` user permission.

Local pickup settings associated with a location.

## Fields

* instructions

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Additional instructions or information related to the local pickup.

* pickup​Time

  [Delivery​Local​Pickup​Time!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryLocalPickupTime)

  non-null

  The estimated pickup time to show customers at checkout.

***

## Map

### Fields with this object

* [Location.localPickupSettingsV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.localPickupSettingsV2)

***

## Mutations

* [location​Local​Pickup​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationLocalPickupEnable)

  mutation

  Enables local pickup for a location so customers can collect their orders in person. Configures the estimated pickup time that customers see at checkout and optional instructions for finding or accessing the pickup location.

  * local​Pickup​Settings

    [Delivery​Location​Local​Pickup​Enable​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationLocalPickupEnableInput)

    required

    ### Arguments

    The settings required to enable local pickup for a location.

  ***

***

## DeliveryLocalPickupSettings Mutations

### Mutated by

* [location​Local​Pickup​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationLocalPickupEnable)
