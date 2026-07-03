---
title: Locale - GraphQL Admin
description: A locale.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Locale'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Locale.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Locale

object

A locale.

## Fields

* iso​Code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Locale ISO code.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Human-readable locale name.

***

## Map

No referencing types

***

## Queries

* [available​Locales](https://shopify.dev/docs/api/admin-graphql/latest/queries/availableLocales)

  query

  Returns all locales that Shopify supports. Each [`Locale`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Locale) includes an ISO code and human-readable name. Use this query to discover which locales you can enable on a shop with the [`shopLocaleEnable`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleEnable) mutation.

***

## Locale Queries

### Queried by

* [available​Locales](https://shopify.dev/docs/api/admin-graphql/latest/queries/availableLocales)
