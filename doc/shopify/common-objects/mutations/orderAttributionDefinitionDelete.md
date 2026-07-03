---
title: orderAttributionDefinitionDelete - GraphQL Admin
description: >-
  Deletes an order attribution definition for the calling app on the current
  shop. Existing orders

  attributed to this definition are preserved.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderAttributionDefinitionDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderAttributionDefinitionDelete.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# order​Attribution​Definition​Delete

mutation

Deletes an order attribution definition for the calling app on the current shop. Existing orders attributed to this definition are preserved.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the order attribution definition to delete.

***

## Order​Attribution​Definition​Delete​Payload returns

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted order attribution definition.

* user​Errors

  [\[Order​Attribution​Definition​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAttributionDefinitionDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### orderAttributionDefinitionDelete reference
