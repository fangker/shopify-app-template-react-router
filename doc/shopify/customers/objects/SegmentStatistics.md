---
title: SegmentStatistics - GraphQL Admin
description: The statistics of a given segment.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentStatistics'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentStatistics.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Segment​Statistics

object

Requires `read_customers` access scope.

The statistics of a given segment.

## Fields

* attribute​Statistics

  [Segment​Attribute​Statistics!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentAttributeStatistics)

  non-null

  The statistics of a given attribute.

  * attribute​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The attribute that statistics are retrieved for.

  ***

***

## Map

### Connections with this object

* [CustomerSegmentMemberConnection.statistics](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerSegmentMemberConnection#returns-statistics)
