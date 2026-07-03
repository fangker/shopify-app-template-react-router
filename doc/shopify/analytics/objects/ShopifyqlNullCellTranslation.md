---
title: ShopifyqlNullCellTranslation - GraphQL Admin
description: >-
  Localized display text shown in place of a null cell in a ShopifyQL result
  row.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlNullCellTranslation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlNullCellTranslation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopifyql​Null​Cell​Translation

object

Requires `read_reports` access scope.

Localized display text shown in place of a null cell in a ShopifyQL result row.

## Fields

* column​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the column the translation applies to.

* display​Text

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The localized text to display in place of the null value.

***

## Map

### Fields with this object

* [ShopifyqlRowMetadata.nullCellTranslations](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlRowMetadata#field-ShopifyqlRowMetadata.fields.nullCellTranslations)
