---
title: SegmentMigration - GraphQL Admin
description: >-
  A segment and its corresponding saved search. 

  For example, you can use `SegmentMigration` to retrieve the segment ID that
  corresponds to a saved search ID.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentMigration'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentMigration.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Segment​Migration

object

Requires `read_customers` access scope.

A segment and its corresponding saved search. For example, you can use `SegmentMigration` to retrieve the segment ID that corresponds to a saved search ID.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* saved​Search​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the saved search.

* segment​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the segment.

***

## Map

### Fields and connections with this object

* [SegmentMigrationConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentMigrationConnection#returns-nodes)
* [SegmentMigrationEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentMigrationEdge#field-SegmentMigrationEdge.fields.node)

***

## Queries

* [segment​Migrations](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentMigrations)

  query

  Deprecated

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Search a segment migration by its saved search ID.

  ***

***

## SegmentMigration Queries
