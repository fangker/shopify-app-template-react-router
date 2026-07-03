---
title: ReverseFulfillmentOrderDisposition - GraphQL Admin
description: The details of the arrangement of an item.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderDisposition
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderDisposition.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Reverse​Fulfillment​Order​Disposition

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

The details of the arrangement of an item.

## Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the disposition was created.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location where the disposition occurred.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of disposed units.

* type

  [Reverse​Fulfillment​Order​Disposition​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ReverseFulfillmentOrderDispositionType)

  non-null

  The final arrangement of an item.

***

## Map

### Fields with this object

* [ReverseDeliveryLineItem.dispositions](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryLineItem#field-ReverseDeliveryLineItem.fields.dispositions)
* [ReverseFulfillmentOrderLineItem.dispositions](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderLineItem#field-ReverseFulfillmentOrderLineItem.fields.dispositions)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ReverseFulfillmentOrderDisposition Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
