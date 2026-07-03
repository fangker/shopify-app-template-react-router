---
title: SegmentAttributeStatistics - GraphQL Admin
description: The statistics of a given attribute.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentAttributeStatistics
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentAttributeStatistics.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Segment​Attribute​Statistics

object

Requires `read_customers` access scope.

The statistics of a given attribute.

## Fields

* average

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The average of a given attribute.

* sum

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The sum of a given attribute.

***

## Map

### Fields with this object

* [SegmentStatistics.attributeStatistics](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentStatistics#field-SegmentStatistics.fields.attributeStatistics)
