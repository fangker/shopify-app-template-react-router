---
title: DeliveryRateDefinition - GraphQL Admin
description: >-
  The merchant-defined rate of the
  [DeliveryMethodDefinition](https://shopify.dev/api/admin-graphql/latest/objects/DeliveryMethodDefinition).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryRateDefinition
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryRateDefinition.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Rate​Definition

object

Requires Any of `assigned_shipping` or `shipping` access scopes or `manage_delivery_settings` user permission.

The merchant-defined rate of the [DeliveryMethodDefinition](https://shopify.dev/api/admin-graphql/latest/objects/DeliveryMethodDefinition).

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The price of this rate.

***

## Map

### Possible type in

* [Delivery​Rate​Provider](https://shopify.dev/docs/api/admin-graphql/latest/unions/DeliveryRateProvider)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## DeliveryRateDefinition Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
