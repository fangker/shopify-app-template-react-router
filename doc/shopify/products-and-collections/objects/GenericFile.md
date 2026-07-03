---
title: GenericFile - GraphQL Admin
description: Represents any file other than HTML.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/GenericFile'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/GenericFile.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Generic​File

object

Requires `read_products` access scope, `read_files` access scope, `read_themes` access scope, `read_orders` access scope, `read_draft_orders` access scope, `read_images` access scope or `read_quick_sale` access scope.

Represents any file other than HTML.

## Fields

* alt

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A word or phrase to describe the contents or the function of a file.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.

* file​Errors

  [\[File​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FileError)

  non-null

  Any errors that have occurred on the file.

* file​Status

  [File​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileStatus)

  non-null

  The status of the file.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* mime​Type

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The generic file's MIME type.

* original​File​Size

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The generic file's size in bytes.

* preview

  [Media​Preview​Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaPreviewImage)

  The preview image for the media.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated.

* url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The generic file's URL.

***

## Map

### Possible type in

* [Metafield​Reference](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)

***

## Interfaces

* * [File](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## GenericFile Implements

### Implements

* [File](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
