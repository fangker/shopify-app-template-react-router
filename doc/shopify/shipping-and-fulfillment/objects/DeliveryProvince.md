---
title: DeliveryProvince - GraphQL Admin
description: A region that is used to define a shipping zone.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProvince'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProvince.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Province

object

A region that is used to define a shipping zone.

## Fields

* code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The code of the region.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The full name of the region.

* translated​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The translated name of the region. The translation returned is based on the system's locale.

***

## Map

### Fields with this object

* [DeliveryCountry.provinces](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCountry#field-DeliveryCountry.fields.provinces)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## DeliveryProvince Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
