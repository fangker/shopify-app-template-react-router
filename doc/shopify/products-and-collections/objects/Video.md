---
title: Video - GraphQL Admin
description: Represents a Shopify hosted video.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Video'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Video.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Video

object

Requires `read_products` access scope, `read_files` access scope, `read_themes` access scope, `read_orders` access scope, `read_draft_orders` access scope, `read_images` access scope or `read_quick_sale` access scope.

Represents a Shopify hosted video.

## Fields

* alt

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A word or phrase to share the nature or contents of a media.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.

* duration

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The video's duration in milliseconds. This value is `null` unless the video's status field is [READY](https://shopify.dev/api/admin-graphql/latest/enums/MediaStatus#value-ready).

* file​Errors

  [\[File​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FileError)

  non-null

  Any errors that have occurred on the file.

* filename

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The video's filename.

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

  [Video​Source](https://shopify.dev/docs/api/admin-graphql/latest/objects/VideoSource)

  The video's original source. This value is `null` unless the video's status field is [READY](https://shopify.dev/api/admin-graphql/latest/enums/MediaStatus#value-ready).

* preview

  [Media​Preview​Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaPreviewImage)

  The preview image for the media.

* sources

  [\[Video​Source!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/VideoSource)

  non-null

  The video's sources. This value is empty unless the video's status field is [READY](https://shopify.dev/api/admin-graphql/latest/enums/MediaStatus#value-ready).

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

## Video Implements

### Implements

* [File](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File)
* [Media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
