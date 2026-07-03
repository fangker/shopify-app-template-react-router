---
title: CompanyLocationCatalog - GraphQL Admin
description: >-
  A list of products with publishing and pricing information associated with
  company locations.


  Company location catalogs can include an optional publication to control
  product

  visibility and a price list to customize pricing. When a publication isn't

  associated with the catalog, product availability is determined by the sales
  channel.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationCatalog
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationCatalog.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Company​Location​Catalog

object

Requires `read_products` access scope.

A list of products with publishing and pricing information associated with company locations.

Company location catalogs can include an optional publication to control product visibility and a price list to customize pricing. When a publication isn't associated with the catalog, product availability is determined by the sales channel.

## Fields

* company​Locations

  [Company​Location​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationConnection)

  non-null

  The company locations associated with the catalog.

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

      * company\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * created\_at

      time

    * external\_id

      string

    * * id

        id

      * ids

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * metafields.{namespace}.{key}

      mixed

      Filters resources by metafield value. Format: `metafields.{namespace}.{key}:{value}`. Learn more about [querying by metafield value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

    * * `metafields.custom.on_sale:true`\
        \- `metafields.product.material:"gid://shopify/Metaobject/43458085"`

    * name

      string

    * updated\_at

      time

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Company​Location​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyLocationSortKeys)

    Default:ID

    Sort the underlying list by the given key.

  ***

* company​Locations​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of company locations associated with the catalog.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

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

No referencing types

***

## Interfaces

* * [Catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## CompanyLocationCatalog Implements

### Implements

* [Catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
