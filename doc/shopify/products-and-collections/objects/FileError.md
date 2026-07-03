---
title: FileError - GraphQL Admin
description: >-
  A file error. This typically occurs when there is an issue with the file
  itself causing it to fail validation.

  Check the file before attempting to upload again.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/FileError'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/FileError.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# File​Error

object

Requires `read_files` access scope, `read_themes` access scope or `read_images` access scope.

A file error. This typically occurs when there is an issue with the file itself causing it to fail validation. Check the file before attempting to upload again.

## Fields

* code

  [File​Error​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileErrorCode)

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

* [ExternalVideo.fileErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExternalVideo#field-ExternalVideo.fields.fileErrors)
* [File.fileErrors](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File#fields-fileErrors)
* [GenericFile.fileErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/GenericFile#field-GenericFile.fields.fileErrors)
* [MediaImage.fileErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImage#field-MediaImage.fields.fileErrors)
* [Model3d.fileErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3d#field-Model3d.fields.fileErrors)
* [Video.fileErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/Video#field-Video.fields.fileErrors)
