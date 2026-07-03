---
title: Distance - GraphQL Admin
description: 'A distance, which includes a numeric value and a unit of measurement.'
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Distance'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Distance.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Distance

object

A distance, which includes a numeric value and a unit of measurement.

## Fields

* unit

  [Distance​Unit!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DistanceUnit)

  non-null

  The unit of measurement for `value`.

* value

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The distance value using the unit system specified with `unit`.

***

## Map

### Fields with this object

* [PickupInStoreLocation.distanceFromBuyer](https://shopify.dev/docs/api/admin-graphql/latest/objects/PickupInStoreLocation#field-PickupInStoreLocation.fields.distanceFromBuyer)
