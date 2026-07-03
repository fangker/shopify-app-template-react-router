---
title: DeliveryParticipant - GraphQL Admin
description: |-
  A participant defines carrier-calculated rates for shipping services
  with a possible merchant-defined fixed fee or a percentage-of-rate fee.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryParticipant
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryParticipant.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Participant

object

Requires Any of `assigned_shipping` or `shipping` access scopes or `manage_delivery_settings` user permission.

A participant defines carrier-calculated rates for shipping services with a possible merchant-defined fixed fee or a percentage-of-rate fee.

## Fields

* adapt​To​New​Services​Flag

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether to display new shipping services automatically to the customer when the service becomes available.

* carrier​Service

  [Delivery​Carrier​Service!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

  non-null

  The carrier used for this participant.

* fixed​Fee

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The merchant-defined fixed fee for this participant.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* participant​Services

  [\[Delivery​Participant​Service!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryParticipantService)

  non-null

  The carrier-specific services offered by the participant, and whether each service is active.

* percentage​Of​Rate​Fee

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The merchant-defined percentage-of-rate fee for this participant.

***

## Map

### Possible type in

* [Delivery​Rate​Provider](https://shopify.dev/docs/api/admin-graphql/latest/unions/DeliveryRateProvider)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## DeliveryParticipant Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
