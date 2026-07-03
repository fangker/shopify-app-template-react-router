---
title: MutationsStagedUploadTargetGenerateUploadParameter - GraphQL Admin
description: >-
  A signed upload parameter for uploading an asset to Shopify.


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
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MutationsStagedUploadTargetGenerateUploadParameter
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MutationsStagedUploadTargetGenerateUploadParameter.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Mutations​Staged​Upload​Target​Generate​Upload​Parameter

object

A signed upload parameter for uploading an asset to Shopify.

Deprecated in favor of [StagedUploadParameter](https://shopify.dev/api/admin-graphql/latest/objects/StagedUploadParameter), which is used in [StagedMediaUploadTarget](https://shopify.dev/api/admin-graphql/latest/objects/StagedMediaUploadTarget) and returned by the [stagedUploadsCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stagedUploadsCreate).

## Fields

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The upload parameter name.

* value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The upload parameter value.

***

## Map

No referencing types

***

## Mutations

* [staged​Upload​Target​Generate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stagedUploadTargetGenerate)

  mutation

  Deprecated

  * input

    [Staged​Upload​Target​Generate​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadTargetGenerateInput)

    required

    ### Arguments

    The input fields for generating a staged upload.

  ***

***

## MutationsStagedUploadTargetGenerateUploadParameter Mutations
