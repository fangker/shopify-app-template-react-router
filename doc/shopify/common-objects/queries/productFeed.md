---
title: productFeed - GraphQL Admin
description: Returns a ProductFeed resource by ID.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/productFeed'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/productFeed.md'
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# product​Feed

query

Requires `read_product_listings` access scope.

Returns a ProductFeed resource by ID.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the ProductFeed to return.

***

## Possible returns

* Product​Feed

  [Product​Feed](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeed)

  A product feed.

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

## Examples

* ### productFeed reference
