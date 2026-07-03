---
title: FullSyncTraceInfo - GraphQL Admin
description: >-
  Trace information for a single country-language product feed sync triggered by
  [`channelFullSync`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelFullSync).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/FullSyncTraceInfo'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FullSyncTraceInfo.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Full​Sync​Trace​Info

object

Requires Access allowed for apps with `read_product_listings` scope.

Trace information for a single country-language product feed sync triggered by [`channelFullSync`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelFullSync).

## Fields

* country

  [Country​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  non-null

  The country of the product feed that was triggered.

* language

  [Language​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/LanguageCode)

  non-null

  The language of the product feed that was triggered.

* operation​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The operation ID of a successfully initiated product full sync operation. This field is set to nil when the full sync operation isn't successfully initiated.

***

## Map

No referencing types

***

## Mutations

* [channel​Full​Sync](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelFullSync)

  mutation

  Triggers a full product resync for the specified [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). All published products are added to the channel's product feed attention set, causing the next poll or event-triggered consumption to receive current state for the complete catalog. Use this mutation after initial channel setup, after recovering from a prolonged outage, or when the channel's external catalog has drifted from Shopify's state.

  The sync can be scoped to a specific country and language. When neither is specified, all country-language combinations covered by the channel's specification are triggered.

  * before​Updated​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    ### Arguments

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

***

## FullSyncTraceInfo Mutations

### Mutated by

* [channel​Full​Sync](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelFullSync)
