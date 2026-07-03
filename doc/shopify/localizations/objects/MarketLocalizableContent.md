---
title: MarketLocalizableContent - GraphQL Admin
description: The market localizable content of a resource's field.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableContent
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableContent.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Market​Localizable​Content

object

The market localizable content of a resource's field.

## Fields

* digest

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The hash digest representation of the content value.

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The resource field that's being localized.

* value

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The content value.

***

## Map

### Fields with this object

* [MarketLocalizableResource.marketLocalizableContent](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableResource#field-MarketLocalizableResource.fields.marketLocalizableContent)
