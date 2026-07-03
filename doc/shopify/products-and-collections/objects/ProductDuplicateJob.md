---
title: ProductDuplicateJob - GraphQL Admin
description: Represents a product duplication job.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDuplicateJob
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDuplicateJob.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Duplicate​Job

object

Represents a product duplication job.

## Fields

* done

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  This indicates if the job is still queued or has been run.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID that's returned when running an asynchronous mutation.

***

## Map

No referencing types

***

## Queries

* [product​Duplicate​Job](https://shopify.dev/docs/api/admin-graphql/latest/queries/productDuplicateJob)

  query

  Returns the product duplicate job.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    An ID of a product duplicate job to fetch.

  ***

***

## ProductDuplicateJob Queries

### Queried by

* [product​Duplicate​Job](https://shopify.dev/docs/api/admin-graphql/latest/queries/productDuplicateJob)
