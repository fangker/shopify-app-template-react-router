---
title: SearchResult - GraphQL Admin
description: Represents an individual result returned from a search.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SearchResult'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SearchResult.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Search​Result

object

Represents an individual result returned from a search.

## Fields

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Returns the search result description text.

* image

  [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  Returns the Image resource presented to accompany a search result.

* reference

  [Node!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  non-null

  Returns the resource represented by the search result.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Returns the resource title.

* url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  Returns the absolute URL to the resource in the search result.

***

## Map

### Fields with this object

* [SearchResultEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/SearchResultEdge#field-SearchResultEdge.fields.node)
* [Shop.search](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.search)
