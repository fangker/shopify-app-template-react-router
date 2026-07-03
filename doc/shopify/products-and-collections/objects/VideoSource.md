---
title: VideoSource - GraphQL Admin
description: >-
  Represents a source for a Shopify hosted video.


  Types of sources include the original video, lower resolution versions of the
  original video,

  and an m3u8 playlist file.


  Only [videos](https://shopify.dev/api/admin-graphql/latest/objects/video) with
  a status field

  of
  [READY](https://shopify.dev/api/admin-graphql/latest/enums/MediaStatus#value-ready)
  have sources.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/VideoSource'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/VideoSource.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Video​Source

object

Requires `read_products` access scope, `read_files` access scope, `read_themes` access scope, `read_orders` access scope, `read_draft_orders` access scope, `read_images` access scope or `read_quick_sale` access scope.

Represents a source for a Shopify hosted video.

Types of sources include the original video, lower resolution versions of the original video, and an m3u8 playlist file.

Only [videos](https://shopify.dev/api/admin-graphql/latest/objects/video) with a status field of [READY](https://shopify.dev/api/admin-graphql/latest/enums/MediaStatus#value-ready) have sources.

## Fields

* file​Size

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The video source's file size in bytes.

* format

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The video source's file format extension.

* height

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The video source's height.

* mime​Type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The video source's MIME type.

* url

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The video source's URL.

* width

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The video source's width.

***

## Map

### Fields with this object

* [Video.originalSource](https://shopify.dev/docs/api/admin-graphql/latest/objects/Video#field-Video.fields.originalSource)
* [Video.sources](https://shopify.dev/docs/api/admin-graphql/latest/objects/Video#field-Video.fields.sources)
