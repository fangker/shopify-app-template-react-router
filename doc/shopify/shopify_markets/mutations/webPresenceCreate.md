---
title: webPresenceCreate - GraphQL Admin
description: Creates a web presence.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceCreate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# web​Presence​Create

mutation

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

Creates a web presence.

## Arguments

* input

  [Web​Presence​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPresenceCreateInput)

  required

  The details of the web presence to be created.

***

## Web​Presence​Create​Payload returns

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* web​Presence

  [Market​Web​Presence](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence)

  The created web presence object.

***

## Examples

* ### webPresenceCreate reference
