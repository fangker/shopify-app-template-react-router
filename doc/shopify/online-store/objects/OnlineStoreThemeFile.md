---
title: OnlineStoreThemeFile - GraphQL Admin
description: Represents a theme file.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFile
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFile.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Online​Store​Theme​File

object

Requires `read_themes` access scope.

Represents a theme file.

## Fields

* body

  [Online​Store​Theme​File​Body!](https://shopify.dev/docs/api/admin-graphql/latest/unions/OnlineStoreThemeFileBody)

  non-null

  The body of the theme file.

* checksum​Md5

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The md5 digest of the theme file for data integrity.

* content​Type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The content type of the theme file.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the theme file was created.

* filename

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The unique identifier of the theme file.

* size

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The size of the theme file in bytes.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the theme file was last updated.

***

## Map

### Fields and connections with this object

* [OnlineStoreTheme.files](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.files)
* [OnlineStoreThemeFileConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeFileConnection#returns-nodes)
* [OnlineStoreThemeFileEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileEdge#field-OnlineStoreThemeFileEdge.fields.node)
