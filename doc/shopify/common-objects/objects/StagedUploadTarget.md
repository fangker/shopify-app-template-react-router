---
title: StagedUploadTarget - GraphQL Admin
description: >-
  Information about the staged target.


  Deprecated in favor of

  [StagedMediaUploadTarget](https://shopify.dev/api/admin-graphql/latest/objects/StagedMediaUploadTarget),

  which is returned by the

  [stagedUploadsCreate
  mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stagedUploadsCreate).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedUploadTarget'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedUploadTarget.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Staged​Upload​Target

object

Information about the staged target.

Deprecated in favor of [StagedMediaUploadTarget](https://shopify.dev/api/admin-graphql/latest/objects/StagedMediaUploadTarget), which is returned by the [stagedUploadsCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stagedUploadsCreate).

## Fields

* parameters

  [\[Image​Upload​Parameter!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ImageUploadParameter)

  non-null

  The parameters of an image to be uploaded.

* url

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The image URL.

***

## Map

No referencing types

***

## Mutations

* [staged​Upload​Targets​Generate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stagedUploadTargetsGenerate)

  mutation

  Deprecated

  * input

    [\[Stage​Image​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StageImageInput)

    required

    ### Arguments

    The input fields for generating staged uploads.

  ***

***

## StagedUploadTarget Mutations
