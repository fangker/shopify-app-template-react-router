---
title: CollectionConditionsSourcesByApp - GraphQL Admin
description: >-
  An app together with the shareable collection sources it publishes for the
  shop.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionsSourcesByApp
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionsSourcesByApp.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Conditions​Sources​By​App

object

Requires `read_products` access scope.

An app together with the shareable collection sources it publishes for the shop.

## Fields

* app

  [App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  non-null

  The app that publishes the collection sources.

* sources

  [Collection​Conditions​Source​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConditionsSourceConnection)

  non-null

  The shareable collection sources owned by this app.

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

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Collection​Conditions​Source​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionConditionsSourceSortKeys)

    Default:TITLE

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## Map

### Fields and connections with this object

* [CollectionConditionsSourcesByAppConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConditionsSourcesByAppConnection#returns-nodes)
* [CollectionConditionsSourcesByAppEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionsSourcesByAppEdge#field-CollectionConditionsSourcesByAppEdge.fields.node)

***

## Queries

* [collection​Conditions​Sources​By​App](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionConditionsSourcesByApp)

  query

  Returns the apps that publish shareable collection sources for the shop, paginated.

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

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

## CollectionConditionsSourcesByApp Queries

### Queried by

* [collection​Conditions​Sources​By​App](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionConditionsSourcesByApp)
