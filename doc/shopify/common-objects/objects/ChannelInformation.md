---
title: ChannelInformation - GraphQL Admin
description: >-
  Identifies the [sales

  channel](https://shopify.dev/docs/apps/build/sales-channels) and

  [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) from
  which

  an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  originated. Provides attribution details such as the specific platform
  (Facebook

  Marketplace, Instagram Shopping) or marketplace where the order was placed.


  Links to the app that manages the channel and optional
  [`ChannelDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelDefinition)

  details that specify the exact sub-channel or selling surface.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelInformation'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelInformation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Channel​Information

object

Identifies the [sales channel](https://shopify.dev/docs/apps/build/sales-channels) and [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) from which an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) originated. Provides attribution details such as the specific platform (Facebook Marketplace, Instagram Shopping) or marketplace where the order was placed.

Links to the app that manages the channel and optional [`ChannelDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelDefinition) details that specify the exact sub-channel or selling surface.

## Fields

* app

  [App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  non-null

  The app associated with the channel.

* channel​Definition

  [Channel​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelDefinition)

  The channel definition associated with the channel.

* channel​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID for the channel.

* display​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The publishing destination display name or channel name.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

***

## Map

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ChannelInformation Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
