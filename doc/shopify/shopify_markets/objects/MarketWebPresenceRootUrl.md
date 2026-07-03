---
title: MarketWebPresenceRootUrl - GraphQL Admin
description: >-
  The URL for the homepage of the online store in the context of a particular
  market and a

  particular locale.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresenceRootUrl
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresenceRootUrl.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Market​Web​Presence​Root​Url

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

The URL for the homepage of the online store in the context of a particular market and a particular locale.

## Fields

* locale

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The locale that the storefront loads in.

* url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The URL.

***

## Map

### Fields with this object

* [MarketWebPresence.rootUrls](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence#field-MarketWebPresence.fields.rootUrls)
