---
title: MediaPreviewImage - GraphQL Admin
description: Represents the preview image for a media.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaPreviewImage'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaPreviewImage.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Media​Preview​Image

object

Requires `read_products` access scope, `read_files` access scope or `read_images` access scope.

Represents the preview image for a media.

## Fields

* image

  [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  The preview image for the media. Returns `null` until `status` is `READY`.

* status

  [Media​Preview​Image​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaPreviewImageStatus)

  non-null

  Current status of the preview image.

***

## Map

### Fields with this object

* [ExternalVideo.preview](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExternalVideo#field-ExternalVideo.fields.preview)
* [File.preview](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File#fields-preview)
* [GenericFile.preview](https://shopify.dev/docs/api/admin-graphql/latest/objects/GenericFile#field-GenericFile.fields.preview)
* [Media.preview](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media#fields-preview)
* [MediaImage.preview](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImage#field-MediaImage.fields.preview)
* [Model3d.preview](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3d#field-Model3d.fields.preview)
* [Video.preview](https://shopify.dev/docs/api/admin-graphql/latest/objects/Video#field-Video.fields.preview)
