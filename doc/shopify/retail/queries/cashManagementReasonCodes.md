---
title: cashManagementReasonCodes - GraphQL Admin
description: Returns the cash management reason codes for the shop.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/cashManagementReasonCodes
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/cashManagementReasonCodes.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# cash​Management​Reason​Codes

query

Requires `read_cash_tracking` access scope.

Returns the cash management reason codes for the shop.

## CashManagementReasonCodeConnection arguments

[CashManagementReasonCodeConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashManagementReasonCodeConnection)

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

* reverse

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Reverse the order of the underlying list.

***

## Possible returns

* edges

  [\[Cash​Management​Reason​Code​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementReasonCodeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Cash​Management​Reason​Code!\]!](https://shopify.dev/docs/api/admin-graphql/latest/unions/CashManagementReasonCode)

  non-null

  A list of nodes that are contained in CashManagementReasonCodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Examples

* ### cashManagementReasonCodes reference
