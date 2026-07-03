---
title: ImageUploadParameter - GraphQL Admin
description: >-
  A parameter to upload an image.


  Deprecated in favor of

  [StagedUploadParameter](https://shopify.dev/api/admin-graphql/latest/objects/StagedUploadParameter),

  which is used in

  [StagedMediaUploadTarget](https://shopify.dev/api/admin-graphql/latest/objects/StagedMediaUploadTarget)

  and returned by the

  [stagedUploadsCreate
  mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stagedUploadsCreate).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ImageUploadParameter
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ImageUploadParameter.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Image​Upload​Parameter

object

A parameter to upload an image.

Deprecated in favor of [StagedUploadParameter](https://shopify.dev/api/admin-graphql/latest/objects/StagedUploadParameter), which is used in [StagedMediaUploadTarget](https://shopify.dev/api/admin-graphql/latest/objects/StagedMediaUploadTarget) and returned by the [stagedUploadsCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stagedUploadsCreate).

## Fields

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The parameter name.

* value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The parameter value.

***

## Map

### Fields with this object

* [StagedUploadTarget.parameters](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedUploadTarget#field-StagedUploadTarget.fields.parameters)
