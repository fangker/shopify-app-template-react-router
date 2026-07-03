---
title: SegmentBooleanFilter - GraphQL Admin
description: A filter with a Boolean value that's been added to a segment query.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentBooleanFilter
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentBooleanFilter.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Segment​Boolean​Filter

object

Requires `read_customers` access scope.

A filter with a Boolean value that's been added to a segment query.

## Fields

* localized​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The localized name of the filter.

* multi​Value

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a file can have multiple values for a single customer.

* query​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The query name of the filter.

***

## Map

No referencing types

***

## Interfaces

* [Segment​Filter](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SegmentFilter)

  interface

***

## SegmentBooleanFilter Implements

### Implements

* [Segment​Filter](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SegmentFilter)
