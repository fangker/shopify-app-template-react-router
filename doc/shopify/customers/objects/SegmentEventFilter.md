---
title: SegmentEventFilter - GraphQL Admin
description: |-
  A filter that's used to segment customers based on the date that an event
  occured. For example, the `product_bought` event filter allows you to segment
  customers based on what products they've bought.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEventFilter'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEventFilter.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Segment​Event​Filter

object

Requires `read_customers` access scope.

A filter that's used to segment customers based on the date that an event occured. For example, the `product_bought` event filter allows you to segment customers based on what products they've bought.

## Fields

* localized​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The localized name of the filter.

* multi​Value

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a file can have multiple values for a single customer.

* parameters

  [\[Segment​Event​Filter​Parameter!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEventFilterParameter)

  non-null

  The parameters for an event segment filter.

* query​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The query name of the filter.

* return​Value​Type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The return value type for an event segment filter.

***

## Map

No referencing types

***

## Interfaces

* [Segment​Filter](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SegmentFilter)

  interface

***

## SegmentEventFilter Implements

### Implements

* [Segment​Filter](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SegmentFilter)
