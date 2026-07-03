---
title: pointOfSaleDevicePaymentSessions - GraphQL Admin
description: A list of point of sale device payment sessions in the shop.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/pointOfSaleDevicePaymentSessions
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/pointOfSaleDevicePaymentSessions.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# point​Of​Sale​Device​Payment​Sessions

query

Requires `read_cash_tracking` access scope.

A list of point of sale device payment sessions in the shop.

## PointOfSaleDevicePaymentSessionConnection arguments

[PointOfSaleDevicePaymentSessionConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/PointOfSaleDevicePaymentSessionConnection)

* after

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

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

  * closing\_date

    date

  * closing\_time

    time

  * * id

      id

    * is\_open

      boolean

    - Filter by `id` range.

    - Example:
      * `id:1234`
      * `id:>=1234`
      * `id:<=1234`

  * location\_id

    id

  * opening\_date

    date

  * opening\_time

    time

  * point\_of\_sale\_device\_id

    id

* reverse

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Reverse the order of the underlying list.

* sort​Key

  [Point​Of​Sale​Device​Payment​Session​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/PointOfSaleDevicePaymentSessionSortKeys)

  Default:ID

  Sort the underlying list by the given key.

***

## Possible returns

* edges

  [\[Point​Of​Sale​Device​Payment​Session​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSessionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Point​Of​Sale​Device​Payment​Session!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession)

  non-null

  A list of nodes that are contained in PointOfSaleDevicePaymentSessionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Examples

* ### pointOfSaleDevicePaymentSessions reference
