---
title: webPresenceUpdate - GraphQL Admin
description: Updates a web presence.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceUpdate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# web​Presence​Update

mutation

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

Updates a web presence.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the web presence to update.

* input

  [Web​Presence​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPresenceUpdateInput)

  required

  The web presence properties to update.

***

## Web​Presence​Update​Payload returns

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* web​Presence

  [Market​Web​Presence](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence)

  The web presence object.

***

## Examples

* ### webPresenceUpdate reference
