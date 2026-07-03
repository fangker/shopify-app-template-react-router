---
title: channelUpdate - GraphQL Admin
description: >-
  Updates the properties of an existing
  [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel).

  Use this mutation to update account information — such as the display name

  shown in Shopify Admin — or to bind the channel to a different channel
  specification.


  Updating the `specificationHandle` triggers re-evaluation of the

  specification's country coverage against the shop's region markets,

  reconciling product feeds accordingly. This is also the mechanism for

  migrating legacy channel records to the multi-channel model by assigning a

  specification handle.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelUpdate'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelUpdate.md'
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# channel​Update

mutation

Updates the properties of an existing [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Use this mutation to update account information — such as the display name shown in Shopify Admin — or to bind the channel to a different channel specification.

Updating the `specificationHandle` triggers re-evaluation of the specification's country coverage against the shop's region markets, reconciling product feeds accordingly. This is also the mechanism for migrating legacy channel records to the multi-channel model by assigning a specification handle.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) to update.

* input

  [Channel​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChannelUpdateInput)

  required

  The input fields for updating the channel.

***

## Channel​Update​Payload returns

* channel

  [Channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  The channel that was updated.

* user​Errors

  [\[Channel​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### channelUpdate reference
