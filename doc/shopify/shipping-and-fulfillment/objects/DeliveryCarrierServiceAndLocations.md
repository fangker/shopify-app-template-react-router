---
title: DeliveryCarrierServiceAndLocations - GraphQL Admin
description: >-
  Links a
  [`DeliveryCarrierService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)
  with the associated shop

  [locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  where it can calculate shipping rates. Each pairing indicates the locations
  that

  can use a specific carrier service for real-time rate calculations during
  checkout.


  The carrier service provides the shipping rate calculation logic, while the

  locations represent physical or virtual fulfillment points that can ship
  orders

  using that service.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierServiceAndLocations
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierServiceAndLocations.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Carrier​Service​And​Locations

object

Requires Any of `orders` or `shipping` access scopes or `manage_delivery_settings` user permission.

Links a [`DeliveryCarrierService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService) with the associated shop [locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) where it can calculate shipping rates. Each pairing indicates the locations that can use a specific carrier service for real-time rate calculations during checkout.

The carrier service provides the shipping rate calculation logic, while the locations represent physical or virtual fulfillment points that can ship orders using that service.

## Fields

* carrier​Service

  [Delivery​Carrier​Service!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

  non-null

  The carrier service.

* locations

  [\[Location!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  non-null

  The list of locations that support this carrier service.

***

## Map

No referencing types

***

## Queries

* [available​Carrier​Services](https://shopify.dev/docs/api/admin-graphql/latest/queries/availableCarrierServices)

  query

  Returns a list of activated carrier services and associated shop locations that support them.

***

## DeliveryCarrierServiceAndLocations Queries

### Queried by

* [available​Carrier​Services](https://shopify.dev/docs/api/admin-graphql/latest/queries/availableCarrierServices)
