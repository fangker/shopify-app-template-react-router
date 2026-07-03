---
title: PublicationResourceOperation - GraphQL Admin
description: A bulk update operation on a publication.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationResourceOperation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationResourceOperation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Publication​Resource​Operation

object

Requires `read_products` access scope or `read_publications` access scope.

A bulk update operation on a publication.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* processed​Row​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The count of processed rows, summing imported, failed, and skipped rows.

* row​Count

  [Row​Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/RowCount)

  Represents a rows objects within this background operation.

* status

  [Resource​Operation​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceOperationStatus)

  non-null

  The status of this operation.

***

## Map

### Possible type in

* [Publication​Operation](https://shopify.dev/docs/api/admin-graphql/latest/unions/PublicationOperation)

***

## Interfaces

* * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

  * [Resource​Operation](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ResourceOperation)

    interface

***

## PublicationResourceOperation Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
* [Resource​Operation](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ResourceOperation)
