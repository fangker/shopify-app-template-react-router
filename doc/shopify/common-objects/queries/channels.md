---
title: channels - GraphQL Admin
description: >-
  The list of
  [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  objects on the shop. When the calling application supports multi-channel, only

  channels established by the calling application are returned. Each channel

  represents an authenticated connection to an external selling platform such as

  a marketplace, social media platform, online store, or point-of-sale system.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/channels'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/channels.md'
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# channels

query

The list of [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) objects on the shop. When the calling application supports multi-channel, only channels established by the calling application are returned. Each channel represents an authenticated connection to an external selling platform such as a marketplace, social media platform, online store, or point-of-sale system.

## ChannelConnection arguments

[ChannelConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection)

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

  [\[Channel​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Channel!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  non-null

  A list of nodes that are contained in ChannelEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Examples

* ### channels reference
