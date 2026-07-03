---
title: ExternalVideo - GraphQL Admin
description: Represents a video hosted outside of Shopify.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ExternalVideo'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ExternalVideo.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# External​Video

object

Requires `read_products` access scope, `read_files` access scope, `read_themes` access scope, `read_orders` access scope, `read_draft_orders` access scope, `read_images` access scope or `read_quick_sale` access scope.

Represents a video hosted outside of Shopify.

## Fields

* alt

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A word or phrase to describe the contents or the function of a file.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.

* embed​Url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The embed URL of the video for the respective host.

* file​Errors

  [\[File​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FileError)

  non-null

  Any errors that have occurred on the file.

* file​Status

  [File​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileStatus)

  non-null

  The status of the file.

* host

  [Media​Host!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaHost)

  non-null

  The host of the external video.

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

* origin​Url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The origin URL of the video on the respective host.

* preview

  [Media​Preview​Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaPreviewImage)

  The preview image for the media.

* status

  [Media​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaStatus)

  non-null

  Current status of the media.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated.

* embedded​Url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-nullDeprecated

***

## Map

No referencing types

***

## Interfaces

* * [File](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File)

    interface

  * [Media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## ExternalVideo Implements

### Implements

* [File](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File)
* [Media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
