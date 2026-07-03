---
title: Model3d - GraphQL Admin
description: Represents a Shopify hosted 3D model.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3d'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3d.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Model3d

object

Requires `read_products` access scope, `read_files` access scope, `read_themes` access scope, `read_orders` access scope, `read_draft_orders` access scope, `read_images` access scope or `read_quick_sale` access scope.

Represents a Shopify hosted 3D model.

## Fields

* alt

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A word or phrase to describe the contents or the function of a file.

* bounding​Box

  [Model3d​Bounding​Box](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3dBoundingBox)

  The 3d model's bounding box information.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.

* file​Errors

  [\[File​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FileError)

  non-null

  Any errors that have occurred on the file.

* filename

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The 3d model's filename.

* file​Status

  [File​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileStatus)

  non-null

  The status of the file.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* media​Content​Type

  [Media​Content​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaContentType)

  non-null

  The media content type.

* media​Errors

  [\[Media​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaError)

  non-null

  Any errors which have occurred on the media.

* media​Warnings

  [\[Media​Warning!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaWarning)

  non-null

  The warnings attached to the media.

* original​Source

  [Model3d​Source](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3dSource)

  The 3d model's original source.

* preview

  [Media​Preview​Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaPreviewImage)

  The preview image for the media.

* sources

  [\[Model3d​Source!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Model3dSource)

  non-null

  The 3d model's sources.

* status

  [Media​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaStatus)

  non-null

  Current status of the media.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated.

***

## Map

### Possible type in

* [Metafield​Reference](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)

***

## Interfaces

* * [File](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File)

    interface

  * [Media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## Model3d Implements

### Implements

* [File](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File)
* [Media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
