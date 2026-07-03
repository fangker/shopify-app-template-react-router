---
title: marketWebPresenceCreate - GraphQL Admin
description: Creates a web presence for a market.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceCreate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# market​Web​Presence​Create

mutation

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

Deprecated. Use [webPresenceCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceCreate) instead.

Creates a web presence for a market.

## Arguments

* market​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the market for which to create a web presence.

* web​Presence

  [Market​Web​Presence​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketWebPresenceCreateInput)

  required

  The details of the web presence to be created.

***

## Market​Web​Presence​Create​Payload returns

* market

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  The market object.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### marketWebPresenceCreate reference
