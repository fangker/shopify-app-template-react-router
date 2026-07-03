---
title: TranslatableContent - GraphQL Admin
description: Translatable content of a resource's field.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Translatable​Content

object

Translatable content of a resource's field.

## Fields

* digest

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Hash digest representation of the content value.

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The resource field that's being translated.

* locale

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Locale of the content.

* type

  [Localizable​Content​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizableContentType)

  non-null

  Type of the translatable content.

* value

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Content value.

***

## Map

### Fields with this object

* [TranslatableResource.translatableContent](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource#field-TranslatableResource.fields.translatableContent)
