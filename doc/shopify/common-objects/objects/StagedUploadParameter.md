---
title: StagedUploadParameter - GraphQL Admin
description: >-
  The parameters required to authenticate a file upload request using a

  [StagedMediaUploadTarget's url
  field](https://shopify.dev/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-stagedmediauploadtarget-url).


  For more information on the upload process, refer to

  [Upload media to
  Shopify](https://shopify.dev/apps/online-store/media/products#step-1-upload-media-to-shopify).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedUploadParameter
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedUploadParameter.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Staged​Upload​Parameter

object

The parameters required to authenticate a file upload request using a [StagedMediaUploadTarget's url field](https://shopify.dev/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-stagedmediauploadtarget-url).

For more information on the upload process, refer to [Upload media to Shopify](https://shopify.dev/apps/online-store/media/products#step-1-upload-media-to-shopify).

## Fields

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The parameter's name.

* value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The parameter's value.

***

## Map

### Fields with this object

* [StagedMediaUploadTarget.parameters](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.parameters)
