---
title: checkoutAndAccountsConfigurations - GraphQL Admin
description: List of checkout and accounts configurations on a shop.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutAndAccountsConfigurations
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutAndAccountsConfigurations.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# checkout​And​Accounts​Configurations

query

List of checkout and accounts configurations on a shop.

## CheckoutAndAccountsConfigurationConnection arguments

[CheckoutAndAccountsConfigurationConnection](https://shopify.dev/docs/api/admin-graphql/latest/connections/CheckoutAndAccountsConfigurationConnection)

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

  * * id

      id

    * is\_published

      boolean

    - Filter by `id` range.

    - Example:
      * `id:1234`
      * `id:>=1234`
      * `id:<=1234`

  * one\_page\_checkout\_enabled

    boolean

  * typ\_osp\_pages\_enabled

    boolean

* reverse

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Reverse the order of the underlying list.

* sort​Key

  [Checkout​And​Accounts​Configurations​Graph​QLSort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationsGraphQLSortKeys)

  Default:ID

  Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

***

## Possible returns

* edges

  [\[Checkout​And​Accounts​Configuration​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Checkout​And​Accounts​Configuration!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfiguration)

  non-null

  A list of nodes that are contained in CheckoutAndAccountsConfigurationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Examples

* ### checkoutAndAccountsConfigurations reference
