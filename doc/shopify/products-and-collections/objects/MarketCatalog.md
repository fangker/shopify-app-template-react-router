---
title: MarketCatalog - GraphQL Admin
description: >-
  A catalog for managing product availability and pricing for specific

  [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  contexts. Each catalog links to one or more markets. The catalog can
  optionally include a
  [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

  to control which

  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  objects customers see, and a
  [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

  for market-specific pricing adjustments. When a publication isn't associated

  with the catalog, product availability is determined by the sales channel.


  Use catalogs to create distinct shopping experiences for different geographic
  regions or customer segments.


  Learn more about [building a

  catalog](https://shopify.dev/docs/apps/build/markets/build-catalog) and

  [managing markets](https://shopify.dev/docs/apps/build/markets).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Market​Catalog

object

Requires `read_products` access scope.

A catalog for managing product availability and pricing for specific [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) contexts. Each catalog links to one or more markets. The catalog can optionally include a [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) to control which [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects customers see, and a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) for market-specific pricing adjustments. When a publication isn't associated with the catalog, product availability is determined by the sales channel.

Use catalogs to create distinct shopping experiences for different geographic regions or customer segments.

Learn more about [building a catalog](https://shopify.dev/docs/apps/build/markets/build-catalog) and [managing markets](https://shopify.dev/docs/apps/build/markets).

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* markets

  [Market​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection)

  non-null

  The markets associated with the catalog.

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

  * status

    [Market​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketStatus)

    Default:null

    Filters markets by status.

  * type

    [Market​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketType)

    Default:null

    Filters markets by type.

  ***

* markets​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of markets associated with the catalog.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    The upper bound on count value before returning a result. Use `null` to have no limit.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      * market\_condition\_types

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        A comma-separated list of condition types.

    * market\_type

      string

    * name

      string

    * * status

        string

      * wildcard\_company\_location\_with\_country\_code

        string

      -
      - Valid values:
        * `ACTIVE`
        * `DRAFT`

  * status

    [Market​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketStatus)

    Default:null

    Filters markets by status.

  * type

    [Market​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketType)

    Default:null

    Filters markets by type.

  ***

* operations

  [\[Resource​Operation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ResourceOperation)

  non-null

  Most recent catalog operations.

* price​List

  [Price​List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

  The price list associated with the catalog.

* publication

  [Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

  A group of products and collections that's published to a catalog.

* status

  [Catalog​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogStatus)

  non-null

  The status of the catalog.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the catalog.

***

## Map

### Fields and connections with this object

* [Market.catalogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.catalogs)
* [MarketCatalogConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketCatalogConnection#returns-nodes)
* [MarketCatalogEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalogEdge#field-MarketCatalogEdge.fields.node)
* [MarketsResolvedValues.catalogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsResolvedValues#field-MarketsResolvedValues.fields.catalogs)

***

## Interfaces

* * [Catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## MarketCatalog Implements

### Implements

* [Catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
