---
title: DeliveryLocationLocalPickupSettingsError - GraphQL Admin
description: >-
  Represents an error that happened when changing local pickup settings for a
  location.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationLocalPickupSettingsError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationLocalPickupSettingsError.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Location​Local​Pickup​Settings​Error

object

Requires Any of `shipping` access scopes or `manage_delivery_settings` user permission.

Represents an error that happened when changing local pickup settings for a location.

## Fields

* code

  [Delivery​Location​Local​Pickup​Settings​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryLocationLocalPickupSettingsErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

* [location​Local​Pickup​Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationLocalPickupDisable)

  mutation

  Disables local pickup for a location.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the location to disable local pickup for.

  ***

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

## DeliveryLocationLocalPickupSettingsError Mutations

### Mutated by

* [location​Local​Pickup​Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationLocalPickupDisable)
* [location​Local​Pickup​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationLocalPickupEnable)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## DeliveryLocationLocalPickupSettingsError Implements

### Implements

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
