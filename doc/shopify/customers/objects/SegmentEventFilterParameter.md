---
title: SegmentEventFilterParameter - GraphQL Admin
description: The parameters for an event segment filter.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEventFilterParameter
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEventFilterParameter.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Segment​Event​Filter​Parameter

object

Requires `read_customers` access scope.

The parameters for an event segment filter.

## Fields

* accepts​Multiple​Values

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the parameter accepts a list of values.

* localized​Description

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The localized description of the parameter.

* localized​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The localized name of the parameter.

* max​Range

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The parameter maximum value range.

* min​Range

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The parameter minimum value range.

* optional

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the parameter is optional.

* parameter​Type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The type of the parameter.

* query​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The query name of the parameter.

***

## Map

### Fields with this object

* [SegmentEventFilter.parameters](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEventFilter#field-SegmentEventFilter.fields.parameters)
