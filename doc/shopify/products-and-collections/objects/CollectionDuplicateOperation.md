---
title: CollectionDuplicateOperation - GraphQL Admin
description: >-
  Represents an in-progress collection duplication operation. Collection

  duplication is a synchronous operation for simple collections, and an

  asynchronous operation for collections containing too many products to process
  synchronously.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionDuplicateOperation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionDuplicateOperation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Duplicate​Operation

object

Requires `read_products` access scope.

Represents an in-progress collection duplication operation. Collection duplication is a synchronous operation for simple collections, and an asynchronous operation for collections containing too many products to process synchronously.

## Fields

* collection​Role

  [Collection​Duplicate​Operation​Role!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionDuplicateOperationRole)

  non-null

  Whether the collection is the source that products are being duplicated from, or the target collection that products are being duplicated onto.

* job

  [Job!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  non-null

  The background job performing the duplication.

***

## Map

### Fields with this object

* [CollectionOperations.duplicate](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionOperations#field-CollectionOperations.fields.duplicate)
