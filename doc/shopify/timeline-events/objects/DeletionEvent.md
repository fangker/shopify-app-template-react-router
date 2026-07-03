---
title: DeletionEvent - GraphQL Admin
description: >-
  Deletion events chronicle the destruction of resources (e.g. products and
  collections).

  Once deleted, the deletion event is the only trace of the original's
  existence,

  as the resource itself has been removed and can no longer be accessed.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DeletionEvent'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DeletionEvent.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Deletion​Event

object

Deletion events chronicle the destruction of resources (e.g. products and collections). Once deleted, the deletion event is the only trace of the original's existence, as the resource itself has been removed and can no longer be accessed.

## Fields

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the deletion event for the related resource was generated.

* subject​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the resource that was deleted.

* subject​Type

  [Deletion​Event​Subject​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeletionEventSubjectType)

  non-null

  The type of resource that was deleted.

***

## Map

### Fields and connections with this object

* [DeletionEventConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeletionEventConnection#returns-nodes)
* [DeletionEventEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeletionEventEdge#field-DeletionEventEdge.fields.node)

***

## Queries

* [deletion​Events](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionEvents)

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

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * id

        id

      * occurred\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Deletion​Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeletionEventSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * subject​Types

    [\[Deletion​Event​Subject​Type!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeletionEventSubjectType)

    List of subject types to filter by.

  ***

***

## DeletionEvent Queries
