---
title: StagedMediaUploadTarget - GraphQL Admin
description: >-
  Information about a staged upload target, which should be used to send a
  request to upload

  the file.


  For more information on the upload process, refer to

  [Upload media to
  Shopify](https://shopify.dev/apps/online-store/media/products#step-1-upload-media-to-shopify).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Staged​Media​Upload​Target

object

Information about a staged upload target, which should be used to send a request to upload the file.

For more information on the upload process, refer to [Upload media to Shopify](https://shopify.dev/apps/online-store/media/products#step-1-upload-media-to-shopify).

## Fields

* parameters

  [\[Staged​Upload​Parameter!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedUploadParameter)

  non-null

  Parameters needed to authenticate a request to upload the file.

* resource​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL to be passed as `originalSource` in [CreateMediaInput](https://shopify.dev/api/admin-graphql/latest/input-objects/CreateMediaInput) and [FileCreateInput](https://shopify.dev/api/admin-graphql/2022-04/input-objects/FileCreateInput) for the [productCreateMedia](https://shopify.dev/api/admin-graphql/2022-04/mutations/productCreateMedia) and [fileCreate](https://shopify.dev/api/admin-graphql/2022-04/mutations/fileCreate) mutations.

* url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL to use when sending an request to upload the file. Should be used in conjunction with the parameters field.

***

## Map

No referencing types

***

## Mutations

* [staged​Uploads​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stagedUploadsCreate)

  mutation

  Creates staged upload targets for file uploads such as images, videos, and 3D models.

  Use the `stagedUploadsCreate` mutation instead of direct file creation mutations when:

  * **Uploading large files**: Files over a few MB benefit from staged uploads for better reliability
  * **Uploading media files**: Videos, 3D models, and high-resolution images
  * **Bulk importing**: CSV files, product catalogs, or other bulk data
  * **Using external file sources**: When files are stored remotely and need to be transferred to Shopify

  The `stagedUploadsCreate` mutation is the first step in Shopify's secure two-step upload process:

  **Step 1: Create staged upload targets** (this mutation)

  * Generate secure, temporary upload URLs for your files.
  * Receive authentication parameters for the upload.

  **Step 2: Upload files and create assets**

  * Upload your files directly to the provided URLs using the authentication parameters.
  * Use the returned `resourceUrl` as the `originalSource` in subsequent mutations like `fileCreate`.

  This approach provides better performance for large files, handles network interruptions gracefully, and ensures secure file transfers to Shopify's storage infrastructure.

  ***

  **Note:** File size is required when uploading \<a href="https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource#enums-VIDEO">\<code>VIDEO\</code>\</a> or \<a href="https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource#enums-MODEL\_3D">\<code>\<span class="PreventFireFoxApplyingGapToWBR">MODEL\_3\<wbr/>D\</span>\</code>\</a> resources.

  ***

  After creating staged upload targets, complete the process by:

  1. **Uploading files**: Send your files to the returned [`url`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.url) using the provided [`parameters`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.parameters) for authentication
  2. **Creating file assets**: Use the [`resourceUrl`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.resourceUrl) as the `originalSource` in mutations such as:

  * [`fileCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileCreate): Creates file assets from staged uploads
  * [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Updates products with new media from staged uploads

  Learn more about [uploading media to Shopify](https://shopify.dev/apps/online-store/media/products).

  * input

    [\[Staged​Upload​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadInput)

    required

    ### Arguments

    The information required to generate staged upload targets.

  ***

***

## StagedMediaUploadTarget Mutations

### Mutated by

* [staged​Uploads​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stagedUploadsCreate)
