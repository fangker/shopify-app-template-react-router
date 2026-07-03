---
title: CollectionConditionsSource - GraphQL Admin
description: >-
  A collection source that uses conditions and selections to determine which
  products are included.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionsSource
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionsSource.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Conditions​Source

object

Requires `read_products` access scope.

A collection source that uses conditions and selections to determine which products are included.

## Fields

* app

  [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  The app that created this source, if applicable. In the case of shareable sources, this app manages this source's conditions and selections exclusively.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  An optional description of the source.

* exclusion

  [Collection​Source​Exclusion](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusion)

  The rules and selections for excluding products from the collection.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique identifier for this source.

* inclusion

  [Collection​Source​Inclusion!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusion)

  non-null

  The rules and selections for including products in the collection.

* products

  [Product​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection)

  non-null

  The products that are members of this source: products matched by the source's inclusion conditions and manual selections, with the source's exclusion conditions, excluded collections, and manual exclusions removed.

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

* shareable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether this source can be shared across multiple collections.

* target​Type

  [Collection​Source​Target​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSourceTargetType)

  non-null

  Whether conditions match products or individual variants.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the source.

***

## Map

### Fields and connections with this object

* [CollectionConditionsSourceConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConditionsSourceConnection#returns-nodes)
* [CollectionConditionsSourceEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionsSourceEdge#field-CollectionConditionsSourceEdge.fields.node)
* [CollectionConditionsSourcesByApp.sources](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionsSourcesByApp#field-CollectionConditionsSourcesByApp.fields.sources)

***

## Queries

* [collection​Conditions​Sources](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionConditionsSources)

  query

  Returns the shareable collection sources owned by the given app for the shop.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * app​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the app whose collection sources to return.

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

## CollectionConditionsSource Queries

### Queried by

* [collection​Conditions​Sources](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionConditionsSources)

***

## Mutations

* [collection​Conditions​Source​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionConditionsSourceCreate)

  mutation

  Creates a shareable collection source that can later be linked to one or more collections.

  * input

    [Collection​Create​Conditions​Source​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionCreateConditionsSourceInput)

    required

    ### Arguments

    The input fields for the source to create.

  ***

* [collection​Conditions​Source​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionConditionsSourceUpdate)

  mutation

  Updates a shareable collection source owned by the calling app.

  * input

    [Collection​Update​Conditions​Source​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionUpdateConditionsSourceInput)

    required

    ### Arguments

    The input fields for the source to update.

  ***

***

## CollectionConditionsSource Mutations

### Mutated by

* [collection​Conditions​Source​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionConditionsSourceCreate)
* [collection​Conditions​Source​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionConditionsSourceUpdate)

***

## Interfaces

* * [Collection​Source](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSource)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## CollectionConditionsSource Implements

### Implements

* [Collection​Source](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSource)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
