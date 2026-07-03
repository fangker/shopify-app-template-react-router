---
title: Link - GraphQL Admin
description: A link to direct users to.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Link'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Link.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Link

object

A link to direct users to.

## Fields

* label

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A context-sensitive label for the link.

* translations

  [\[Translation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

  non-null

  The published translations associated with the resource.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Filters translations locale.

  * market​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Filters translations by market ID. Use this argument to retrieve content specific to a market.

  ***

* url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The URL that the link visits.

***

## Map

### Fields with this object

* [AppFeedback.link](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback#field-AppFeedback.fields.link)

***

## Interfaces

* [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

  interface

***

## Link Implements

### Implements

* [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
