---
title: ProductFeed - GraphQL Admin
description: A product feed.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeed'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeed.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Feed

object

Requires `read_product_listings` access scope.

A product feed.

## Fields

* channel​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the channel to associate with the product feed.

* country

  [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The country of the product feed.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* language

  [Language​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/LanguageCode)

  The language of the product feed.

* status

  [Product​Feed​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductFeedStatus)

  non-null

  The status of the product feed.

***

## Map

### Fields and connections with this object

* [ProductFeedConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductFeedConnection#returns-nodes)
* [ProductFeedEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeedEdge#field-ProductFeedEdge.fields.node)

***

## Queries

* [product​Feed](https://shopify.dev/docs/api/admin-graphql/latest/queries/productFeed)

  query

  Returns a ProductFeed resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the ProductFeed to return.

  ***

* [product​Feeds](https://shopify.dev/docs/api/admin-graphql/latest/queries/productFeeds)

  query

  The product feeds for the shop.

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

## ProductFeed Queries

### Queried by

* [product​Feed](https://shopify.dev/docs/api/admin-graphql/latest/queries/productFeed)
* [product​Feeds](https://shopify.dev/docs/api/admin-graphql/latest/queries/productFeeds)

***

## Mutations

* [product​Feed​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFeedCreate)

  mutation

  Creates a product feed for a specific publication.

  * input

    [Product​Feed​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductFeedInput)

    ### Arguments

    The properties of the new product feed.

  ***

***

## ProductFeed Mutations

### Mutated by

* [product​Feed​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFeedCreate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ProductFeed Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
