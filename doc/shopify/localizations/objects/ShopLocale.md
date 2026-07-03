---
title: ShopLocale - GraphQL Admin
description: A locale that's been enabled on a shop.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopLocale'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopLocale.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shop​Locale

object

Requires `read_locales` access scope or `read_markets_home` access scope.

A locale that's been enabled on a shop.

## Fields

* locale

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The locale ISO code.

* market​Web​Presences

  [\[Market​Web​Presence!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence)

  non-null

  The market web presences that use the locale.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The human-readable locale name.

* primary

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the locale is the default locale for the shop.

* published

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the locale is visible to buyers.

***

## Map

### Fields with this object

* [MarketWebPresence.alternateLocales](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence#field-MarketWebPresence.fields.alternateLocales)
* [MarketWebPresence.defaultLocale](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence#field-MarketWebPresence.fields.defaultLocale)

***

## Queries

* [shop​Locales](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopLocales)

  query

  Returns the locales enabled on a shop. Each locale represents a language for translations and determines how content displays to customers in different markets.

  Use the optional `published` argument to filter for only the locales that are visible to customers. The response includes the ISO locale code, whether it's the shop's primary locale, and which [`MarketWebPresence`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence) objects use each locale.

  * published

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Return only published locales.

  ***

***

## ShopLocale Queries

### Queried by

* [shop​Locales](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopLocales)

***

## Mutations

* [shop​Locale​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleEnable)

  mutation

  Adds a locale for a shop. The newly added locale is in the unpublished state.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    ISO code of the locale to enable.

  * market​Web​Presence​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The list of markets web presences to add the locale to.

  ***

* [shop​Locale​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleUpdate)

  mutation

  Updates a locale for a shop.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    ISO code of the locale to update.

  * shop​Locale

    [Shop​Locale​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopLocaleInput)

    required

    Specifies the input fields for a shop locale.

  ***

***

## ShopLocale Mutations

### Mutated by

* [shop​Locale​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleEnable)
* [shop​Locale​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleUpdate)
