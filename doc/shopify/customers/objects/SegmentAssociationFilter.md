---
title: SegmentAssociationFilter - GraphQL Admin
description: |-
  A filter that takes a value that's associated with an object. For example, the
  `tags` field is associated with the
  [`Customer`](/api/admin-graphql/latest/objects/Customer) object.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentAssociationFilter
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentAssociationFilter.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Segment​Association​Filter

object

Requires `read_customers` access scope.

A filter that takes a value that's associated with an object. For example, the `tags` field is associated with the [`Customer`](https://shopify.dev/api/admin-graphql/latest/objects/Customer) object.

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

## SegmentAssociationFilter Implements

### Implements

* [Segment​Filter](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SegmentFilter)
