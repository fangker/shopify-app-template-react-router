---
title: SegmentEnumFilter - GraphQL Admin
description: >-
  Categorical filter options for building customer segments using predefined
  value

  sets like countries, subscription statuses, or order frequencies.


  For example, a "Customer Location" enum filter provides options like "United
  States," "Canada," and "United Kingdom."


  Use this object to:

  - Access available categorical filter options

  - Understand filter capabilities and constraints

  - Build user interfaces for segment creation


  Includes localized display names, indicates whether multiple values can be

  selected, and provides technical query names for API operations.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEnumFilter'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEnumFilter.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Segment​Enum​Filter

object

Requires `read_customers` access scope.

Categorical filter options for building customer segments using predefined value sets like countries, subscription statuses, or order frequencies.

For example, a "Customer Location" enum filter provides options like "United States," "Canada," and "United Kingdom."

Use this object to:

* Access available categorical filter options
* Understand filter capabilities and constraints
* Build user interfaces for segment creation

Includes localized display names, indicates whether multiple values can be selected, and provides technical query names for API operations.

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

## SegmentEnumFilter Implements

### Implements

* [Segment​Filter](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SegmentFilter)
