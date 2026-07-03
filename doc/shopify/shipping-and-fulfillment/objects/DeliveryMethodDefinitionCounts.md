---
title: DeliveryMethodDefinitionCounts - GraphQL Admin
description: >-
  The number of method definitions for a zone, separated into merchant-owned and
  participant definitions.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinitionCounts
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinitionCounts.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Method​Definition​Counts

object

Requires Any of `assigned_shipping` or `shipping` access scopes or `manage_delivery_settings` user permission.

The number of method definitions for a zone, separated into merchant-owned and participant definitions.

## Fields

* participant​Definitions​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of participant method definitions for the specified zone.

* rate​Definitions​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of merchant-defined method definitions for the specified zone.

***

## Map

### Fields with this object

* [DeliveryLocationGroupZone.methodDefinitionCounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroupZone#field-DeliveryLocationGroupZone.fields.methodDefinitionCounts)
