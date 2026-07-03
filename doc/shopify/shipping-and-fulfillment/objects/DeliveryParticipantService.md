---
title: DeliveryParticipantService - GraphQL Admin
description: A mail service provided by the participant.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryParticipantService
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryParticipantService.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Participant​Service

object

Requires Any of `shipping` access scopes or `manage_delivery_settings` user permission.

A mail service provided by the participant.

## Fields

* active

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the service is active.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the service.

***

## Map

### Fields with this object

* [DeliveryParticipant.participantServices](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryParticipant#field-DeliveryParticipant.fields.participantServices)
