---
title: UrlRedirect - GraphQL Admin
description: The URL redirect for the online store.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirect'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirect.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Url​Redirect

object

Requires `read_online_store_navigation` access scope.

The URL redirect for the online store.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the URL redirect.

* path

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The old path to be redirected from. When the user visits this path, they will be redirected to the target location.

* target

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The target location where the user will be redirected to.

***

## Map

### Fields and connections with this object

* [UrlRedirectConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/UrlRedirectConnection#returns-nodes)
* [UrlRedirectEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectEdge#field-UrlRedirectEdge.fields.node)

***

## Queries

* [url​Redirect](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirect)

  query

  Returns a `UrlRedirect` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `UrlRedirect` to return.

  ***

* [url​Redirects](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirects)

  query

  A list of redirects for a shop.

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

    * * default

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * * id

        id

      * path

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * target

      string

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  * sort​Key

    [Url​Redirect​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/UrlRedirectSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## UrlRedirect Queries

### Queried by

* [url​Redirect](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirect)
* [url​Redirects](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirects)

***

## Mutations

* [url​Redirect​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectCreate)

  mutation

  Creates a [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object.

  * url​Redirect

    [Url​Redirect​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UrlRedirectInput)

    required

    ### Arguments

    The fields to use when creating the redirect.

  ***

* [url​Redirect​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectUpdate)

  mutation

  Updates a URL redirect.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the URL redirect to update.

  * url​Redirect

    [Url​Redirect​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UrlRedirectInput)

    required

    The input fields required to update the URL redirect.

  ***

***

## UrlRedirect Mutations

### Mutated by

* [url​Redirect​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectCreate)
* [url​Redirect​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectUpdate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## UrlRedirect Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
