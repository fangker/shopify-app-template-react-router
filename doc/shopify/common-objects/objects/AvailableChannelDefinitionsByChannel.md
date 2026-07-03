---
title: AvailableChannelDefinitionsByChannel - GraphQL Admin
description: >-
  Represents an object containing all information for channels available to a
  shop.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AvailableChannelDefinitionsByChannel
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AvailableChannelDefinitionsByChannel.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Available​Channel​Definitions​By​Channel

object

Represents an object containing all information for channels available to a shop.

## Fields

* channel​Definitions

  [\[Channel​Definition!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelDefinition)

  non-null

  The channel definitions for channels installed on a shop.

* channel​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the channel.

***

## Map

### Fields with this object

* [Shop.channelDefinitionsForInstalledChannels](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.channelDefinitionsForInstalledChannels)
