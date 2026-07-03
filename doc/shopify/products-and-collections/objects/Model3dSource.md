---
title: Model3dSource - GraphQL Admin
description: |-
  A source for a Shopify-hosted 3d model.

  Types of sources include GLB and USDZ formatted 3d models, where the former
  is an original 3d model and the latter has been converted from the original.

  If the original source is in GLB format and over 15 MBs in size, then both the
  original and the USDZ formatted source are optimized to reduce the file size.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3dSource'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3dSource.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Model3d​Source

object

Requires `read_products` access scope, `read_files` access scope or `read_themes` access scope.

A source for a Shopify-hosted 3d model.

Types of sources include GLB and USDZ formatted 3d models, where the former is an original 3d model and the latter has been converted from the original.

If the original source is in GLB format and over 15 MBs in size, then both the original and the USDZ formatted source are optimized to reduce the file size.

## Fields

* filesize

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The 3d model source's filesize.

* format

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The 3d model source's format.

* mime​Type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The 3d model source's MIME type.

* url

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The 3d model source's URL.

***

## Map

### Fields with this object

* [Model3d.originalSource](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3d#field-Model3d.fields.originalSource)
* [Model3d.sources](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3d#field-Model3d.fields.sources)
