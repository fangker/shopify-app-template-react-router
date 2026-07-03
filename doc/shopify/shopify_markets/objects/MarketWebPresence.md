---
title: MarketWebPresence - GraphQL Admin
description: >-
  The market’s web presence, which defines its SEO strategy. This can be a
  different domain

  (e.g. `example.ca`), subdomain (e.g. `ca.example.com`), or subfolders of the
  primary

  domain (e.g. `example.com/en-ca`). Each web presence comprises one or more
  language

  variants. If a market does not have its own web presence, it is accessible on
  the shop’s

  primary domain via [country

  selectors](https://shopify.dev/themes/internationalization/multiple-currencies-languages#the-country-selector).


  Note: while the domain/subfolders defined by a market’s web presence are not
  applicable to

  custom storefronts, which must manage their own domains and routing, the
  languages chosen

  here do govern [the languages available on the Storefront

  API](https://shopify.dev/custom-storefronts/internationalization/multiple-languages)
  for the countries in

  this market.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Market​Web​Presence

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

The market’s web presence, which defines its SEO strategy. This can be a different domain (e.g. `example.ca`), subdomain (e.g. `ca.example.com`), or subfolders of the primary domain (e.g. `example.com/en-ca`). Each web presence comprises one or more language variants. If a market does not have its own web presence, it is accessible on the shop’s primary domain via [country selectors](https://shopify.dev/themes/internationalization/multiple-currencies-languages#the-country-selector).

Note: while the domain/subfolders defined by a market’s web presence are not applicable to custom storefronts, which must manage their own domains and routing, the languages chosen here do govern [the languages available on the Storefront API](https://shopify.dev/custom-storefronts/internationalization/multiple-languages) for the countries in this market.

## Fields

* alternate​Locales

  [\[Shop​Locale!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopLocale)

  non-null

  The ShopLocale object for the alternate locales. When a domain is used, these locales will be available as language-specific subfolders. For example, if English is an alternate locale, and `example.ca` is the market’s domain, then `example.ca/en` will load in English.

* default​Locale

  [Shop​Locale!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopLocale)

  non-null

  The ShopLocale object for the default locale. When a domain is used, this is the locale that will be used when the domain root is accessed. For example, if French is the default locale, and `example.ca` is the market’s domain, then `example.ca` will load in French.

* domain

  [Domain](https://shopify.dev/docs/api/admin-graphql/latest/objects/Domain)

  The web presence’s domain. This field will be null if `subfolderSuffix` isn't null.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* markets

  [Market​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection)

  The associated markets for this web presence.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

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

* root​Urls

  [\[Market​Web​Presence​Root​Url!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresenceRootUrl)

  non-null

  The list of root URLs for each of the web presence’s locales. As of version `2024-04` this value will no longer have a trailing slash.

* subfolder​Suffix

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The market-specific suffix of the subfolders defined by the web presence. Example: in `/en-us` the subfolder suffix is `us`. This field will be null if `domain` isn't null.

* market

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  Deprecated

***

## Map

### Fields and connections with this object

* [Domain.marketWebPresence](https://shopify.dev/docs/api/admin-graphql/latest/objects/Domain#field-Domain.fields.marketWebPresence)
* [Market.webPresences](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.webPresences)
* [MarketWebPresenceConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketWebPresenceConnection#returns-nodes)
* [MarketWebPresenceEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresenceEdge#field-MarketWebPresenceEdge.fields.node)
* [MarketsResolvedValues.webPresences](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsResolvedValues#field-MarketsResolvedValues.fields.webPresences)
* [ShopLocale.marketWebPresences](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopLocale#field-ShopLocale.fields.marketWebPresences)

***

## Queries

* [web​Presences](https://shopify.dev/docs/api/admin-graphql/latest/queries/webPresences)

  query

  The web presences for the shop.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

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

***

## MarketWebPresence Queries

### Queried by

* [web​Presences](https://shopify.dev/docs/api/admin-graphql/latest/queries/webPresences)

***

## Mutations

* [web​Presence​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceCreate)

  mutation

  Creates a web presence.

  * input

    [Web​Presence​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPresenceCreateInput)

    required

    ### Arguments

    The details of the web presence to be created.

  ***

* [web​Presence​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceUpdate)

  mutation

  Updates a web presence.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web presence to update.

  * input

    [Web​Presence​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPresenceUpdateInput)

    required

    The web presence properties to update.

  ***

***

## MarketWebPresence Mutations

### Mutated by

* [web​Presence​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceCreate)
* [web​Presence​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceUpdate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## MarketWebPresence Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
