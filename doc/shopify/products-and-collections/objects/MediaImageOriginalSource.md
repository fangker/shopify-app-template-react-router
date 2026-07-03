---
title: MediaImageOriginalSource - GraphQL Admin
description: The original source for an image.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImageOriginalSource
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImageOriginalSource.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Media​Image​Original​Source

object

Requires `read_products` access scope, `read_files` access scope, `read_themes` access scope, `read_orders` access scope, `read_draft_orders` access scope, `read_images` access scope or `read_quick_sale` access scope.

The original source for an image.

## Fields

* file​Size

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The size of the original file in bytes.

* url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL of the original image, valid only for a short period.

***

## Map

### Fields with this object

* [MediaImage.originalSource](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImage#field-MediaImage.fields.originalSource)
