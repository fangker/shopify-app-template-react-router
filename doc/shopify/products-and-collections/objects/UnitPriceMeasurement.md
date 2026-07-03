---
title: UnitPriceMeasurement - GraphQL Admin
description: >-
  The measurement used to calculate a unit price for a product variant (e.g.
  $9.99 / 100ml).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/UnitPriceMeasurement
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/UnitPriceMeasurement.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Unit​Price​Measurement

object

The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).

## Fields

* measured​Type

  [Unit​Price​Measurement​Measured​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/UnitPriceMeasurementMeasuredType)

  The type of unit of measurement for the unit price measurement.

* quantity​Unit

  [Unit​Price​Measurement​Measured​Unit](https://shopify.dev/docs/api/admin-graphql/latest/enums/UnitPriceMeasurementMeasuredUnit)

  The quantity unit for the unit price measurement.

* quantity​Value

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The quantity value for the unit price measurement.

* reference​Unit

  [Unit​Price​Measurement​Measured​Unit](https://shopify.dev/docs/api/admin-graphql/latest/enums/UnitPriceMeasurementMeasuredUnit)

  The reference unit for the unit price measurement.

* reference​Value

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The reference value for the unit price measurement.

***

## Map

### Fields with this object

* [ProductVariant.unitPriceMeasurement](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.unitPriceMeasurement)
