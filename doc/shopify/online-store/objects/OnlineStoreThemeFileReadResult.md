---
title: OnlineStoreThemeFileReadResult - GraphQL Admin
description: Represents the result of a read operation performed on a theme asset.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileReadResult
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileReadResult.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Online​Store​Theme​File​Read​Result

object

Requires `read_themes` access scope.

Represents the result of a read operation performed on a theme asset.

## Fields

* code

  [Online​Store​Theme​File​Result​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OnlineStoreThemeFileResultType)

  non-null

  Type that indicates the result of the operation.

* filename

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Unique identifier associated with the operation and the theme file.

***

## Map

### Connections with this object

* [OnlineStoreThemeFileConnection.userErrors](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeFileConnection#returns-userErrors)
