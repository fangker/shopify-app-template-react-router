---
title: channelCreate - GraphQL Admin
description: >-
  Creates a
  [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  representing a connection between the shop and an external selling platform

  account. Use this mutation after a merchant authenticates with an external

  platform to establish the publishing destination for product syndication and,

  for order-generating channels, order import.


  The platform resolves the [channel
  specification](https://shopify.dev/docs/apps/build/sales-channels/channel-config-extension)

  identified by `specificationHandle`, determines its country coverage,

  intersects with the shop's available region markets, and establishes product

  feeds for all matching regions. Product feeds immediately begin emitting

  events to the application's webhook or event subscription.


  If the specification sets `expects_online_store_parity` and no matching region

  markets exist, the mutation returns an error. If the specification doesn't

  require online store parity and no matching region markets exist, a channel

  subordinate to shop defaults is created automatically.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate.md'
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# channel​Create

mutation

Creates a [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) representing a connection between the shop and an external selling platform account. Use this mutation after a merchant authenticates with an external platform to establish the publishing destination for product syndication and, for order-generating channels, order import.

The platform resolves the [channel specification](https://shopify.dev/docs/apps/build/sales-channels/channel-config-extension) identified by `specificationHandle`, determines its country coverage, intersects with the shop's available region markets, and establishes product feeds for all matching regions. Product feeds immediately begin emitting events to the application's webhook or event subscription.

If the specification sets `expects_online_store_parity` and no matching region markets exist, the mutation returns an error. If the specification doesn't require online store parity and no matching region markets exist, a channel subordinate to shop defaults is created automatically.

## Arguments

* input

  [Channel​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChannelCreateInput)

  required

  The input fields for creating the channel.

***

## Channel​Create​Payload returns

* channel

  [Channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  The channel that was created.

* user​Errors

  [\[Channel​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### channelCreate reference
