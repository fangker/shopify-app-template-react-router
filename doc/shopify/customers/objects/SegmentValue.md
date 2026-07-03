---
title: SegmentValue - GraphQL Admin
description: |-
  A list of suggested values associated with an individual segment. A
  segment is a group of members, such as customers, that meet specific
  criteria.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentValue'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentValue.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Segment​Value

object

Requires `read_customers` access scope.

A list of suggested values associated with an individual segment. A segment is a group of members, such as customers, that meet specific criteria.

## Fields

* localized​Value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The localized version of the value's name. This name is displayed to the merchant.

* query​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the query associated with the suggestion.

***

## Map

### Fields and connections with this object

* [SegmentValueConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentValueConnection#returns-nodes)
* [SegmentValueEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentValueEdge#field-SegmentValueEdge.fields.node)

***

## Queries

* [segment​Value​Suggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentValueSuggestions)

  query

  The list of suggested values corresponding to a particular filter for a segment. A segment is a group of members, such as customers, that meet specific criteria.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * filter​Query​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Returns the elements of a list by filter handle.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * function​Parameter​Query​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Returns the elements of a list by filter parameter name.

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * search

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    Returns the elements of a list by keyword or term.

  ***

***

## SegmentValue Queries

### Queried by

* [segment​Value​Suggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentValueSuggestions)
