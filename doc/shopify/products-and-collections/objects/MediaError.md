---
title: MediaError - GraphQL Admin
description: >-
  Represents a media error. This typically occurs when there is an issue with
  the media itself causing it to fail validation.

  Check the media before attempting to upload again.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaError'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaError.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Media​Error

object

Requires `read_products` access scope or `read_files` access scope.

Represents a media error. This typically occurs when there is an issue with the media itself causing it to fail validation. Check the media before attempting to upload again.

## Fields

* code

  [Media​Error​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaErrorCode)

  non-null

  Code representing the type of error.

* details

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Additional details regarding the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Translated error message.

***

## Map

### Fields with this object

* [ExternalVideo.mediaErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExternalVideo#field-ExternalVideo.fields.mediaErrors)
* [Media.mediaErrors](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media#fields-mediaErrors)
* [MediaImage.mediaErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImage#field-MediaImage.fields.mediaErrors)
* [Model3d.mediaErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3d#field-Model3d.fields.mediaErrors)
* [Video.mediaErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/Video#field-Video.fields.mediaErrors)
