---
title: MediaWarning - GraphQL Admin
description: >-
  Represents a media warning. This occurs when there is a non-blocking concern
  regarding your media.

  Consider reviewing your media to ensure it is correct and its parameters are
  as expected.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaWarning'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaWarning.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Media​Warning

object

Requires `read_products` access scope or `read_files` access scope.

Represents a media warning. This occurs when there is a non-blocking concern regarding your media. Consider reviewing your media to ensure it is correct and its parameters are as expected.

## Fields

* code

  [Media​Warning​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaWarningCode)

  non-null

  The code representing the type of warning.

* message

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Translated warning message.

***

## Map

### Fields with this object

* [ExternalVideo.mediaWarnings](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExternalVideo#field-ExternalVideo.fields.mediaWarnings)
* [Media.mediaWarnings](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media#fields-mediaWarnings)
* [MediaImage.mediaWarnings](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImage#field-MediaImage.fields.mediaWarnings)
* [Model3d.mediaWarnings](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3d#field-Model3d.fields.mediaWarnings)
* [Video.mediaWarnings](https://shopify.dev/docs/api/admin-graphql/latest/objects/Video#field-Video.fields.mediaWarnings)
