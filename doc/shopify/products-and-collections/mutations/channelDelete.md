---
title: channelDelete - GraphQL Admin
description: >-
  Deletes a
  [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  from the shop. All associated product feeds are removed. Existing orders

  attributed to the channel are preserved. The channel must have been created
  via
  [`channelCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelDelete'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelDelete.md'
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# channel​Delete

mutation

Deletes a [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) from the shop. All associated product feeds are removed. Existing orders attributed to the channel are preserved. The channel must have been created via [`channelCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate).

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the channel to delete.

***

## Channel​Delete​Payload returns

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted channel.

* user​Errors

  [\[Channel​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### channelDelete reference
