---
title: channelFullSync - GraphQL Admin
description: >-
  Triggers a full product resync for the specified
  [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel).

  All published products are added to the channel's product feed attention set,

  causing the next poll or event-triggered consumption to receive current state

  for the complete catalog. Use this mutation after initial channel setup, after

  recovering from a prolonged outage, or when the channel's external catalog has

  drifted from Shopify's state.


  The sync can be scoped to a specific country and language. When neither is

  specified, all country-language combinations covered by the channel's

  specification are triggered.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelFullSync'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelFullSync.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# channel​Full​Sync

mutation

Requires Access allowed for apps with `read_product_listings` scope.

Triggers a full product resync for the specified [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). All published products are added to the channel's product feed attention set, causing the next poll or event-triggered consumption to receive current state for the complete catalog. Use this mutation after initial channel setup, after recovering from a prolonged outage, or when the channel's external catalog has drifted from Shopify's state.

The sync can be scoped to a specific country and language. When neither is specified, all country-language combinations covered by the channel's specification are triggered.

## Arguments

* before​Updated​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  Syncs only products that haven't changed since the specified timestamp.

* channel​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the channel to trigger a full sync for. Accepts a [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) or [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) global ID.

* country

  [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The country to scope the sync to. When omitted, all countries covered by the channel's specification are synced.

* language

  [Language​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/LanguageCode)

  The language to scope the sync to. When omitted, all languages for the targeted countries are synced.

* updated​At​Since

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  Syncs only products that have changed since the specified timestamp.

***

## Channel​Full​Sync​Payload returns

* full​Sync​Trace​Info

  [\[Full​Sync​Trace​Info!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/FullSyncTraceInfo)

  Trace information for each country-language product feed that was triggered. Returns one entry per feed.

* user​Errors

  [\[Channel​Full​Sync​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelFullSyncUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### channelFullSync reference
