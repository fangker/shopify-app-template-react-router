---
title: AddAllProductsOperation - GraphQL Admin
description: Represents an operation publishing all products to a publication.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AddAllProductsOperation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AddAllProductsOperation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Add​All​Products​Operation

object

Requires `read_products` access scope or `read_publications` access scope.

Represents an operation publishing all products to a publication.

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

## AddAllProductsOperation Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
* [Resource​Operation](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ResourceOperation)
