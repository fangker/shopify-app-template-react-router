---
title: ChannelDefinition - GraphQL Admin
description: >-
  A specific selling surface within a [sales

  channel](https://shopify.dev/docs/apps/build/sales-channels) platform. A
  channel

  definition identifies where products can be sold. Definitions can represent

  entire platforms (like Facebook or TikTok) or specific sales channels within

  those platforms, such as Instagram Shops, Instagram Shopping, or TikTok Live.


  Each definition includes the parent

  [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  name and subchannel name to indicate the selling surface hierarchy.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelDefinition'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelDefinition.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Channel​Definition

object

A specific selling surface within a [sales channel](https://shopify.dev/docs/apps/build/sales-channels) platform. A channel definition identifies where products can be sold. Definitions can represent entire platforms (like Facebook or TikTok) or specific sales channels within those platforms, such as Instagram Shops, Instagram Shopping, or TikTok Live.

Each definition includes the parent [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) name and subchannel name to indicate the selling surface hierarchy.

## Fields

* channel​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Name of the channel that this sub channel belongs to.

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Unique string used as a public identifier for the channel definition.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID for the channel definition.

* is​Marketplace

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether this channel definition represents a marketplace.

* sub​Channel​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Name of the sub channel (e.g. Online Store, Instagram Shopping, TikTok Live).

* svg​Icon

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

***

## Map

### Fields with this object

* [AvailableChannelDefinitionsByChannel.channelDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/AvailableChannelDefinitionsByChannel#field-AvailableChannelDefinitionsByChannel.fields.channelDefinitions)
* [ChannelInformation.channelDefinition](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelInformation#field-ChannelInformation.fields.channelDefinition)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ChannelDefinition Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
