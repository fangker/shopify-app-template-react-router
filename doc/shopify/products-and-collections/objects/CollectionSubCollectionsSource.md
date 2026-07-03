---
title: CollectionSubCollectionsSource - GraphQL Admin
description: >-
  A collection source whose membership comes from one or more referenced
  collections (sub-collections).


  Sub-collection sources are always non-shareable. Sharing a sub-collection
  source across owners is not

  supported because the collection references are owner-bound.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSubCollectionsSource
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSubCollectionsSource.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Sub​Collections​Source

object

Requires `read_products` access scope.

A collection source whose membership comes from one or more referenced collections (sub-collections).

Sub-collection sources are always non-shareable. Sharing a sub-collection source across owners is not supported because the collection references are owner-bound.

## Fields

* app

  [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  The app that created this source, if applicable. In the case of shareable sources, this app manages this source's conditions and selections exclusively.

* collections

  [\[Collection!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  non-null

  The referenced sub-collections that supply products to this source.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  An optional description of the source.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique identifier for this source.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the source.

***

## Map

No referencing types

***

## Interfaces

* * [Collection​Source](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSource)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## CollectionSubCollectionsSource Implements

### Implements

* [Collection​Source](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSource)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
