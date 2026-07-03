---
title: DeliveryZone - GraphQL Admin
description: >-
  A zone is a group of countries that have the same shipping rates. Customers
  can

  order products from a store only if they choose a shipping destination that's

  included in one of the store's zones.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Zone

object

Requires Any of `assigned_shipping` or `shipping` access scopes or `manage_delivery_settings` user permission.

A zone is a group of countries that have the same shipping rates. Customers can order products from a store only if they choose a shipping destination that's included in one of the store's zones.

## Fields

* countries

  [\[Delivery​Country!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCountry)

  non-null

  The list of countries within the zone.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the zone.

***

## Map

### Fields with this object

* [DeliveryLocationGroupZone.zone](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroupZone#field-DeliveryLocationGroupZone.fields.zone)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## DeliveryZone Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
