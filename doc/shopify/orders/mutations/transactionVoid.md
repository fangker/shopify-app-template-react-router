---
title: transactionVoid - GraphQL Admin
description: Trigger the voiding of an uncaptured authorization transaction.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/transactionVoid'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/transactionVoid.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# transaction​Void

mutation

Requires `write_orders` access scope. Also: The user must have permission to cancel orders.

Trigger the voiding of an uncaptured authorization transaction.

## Arguments

* parent​Transaction​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  An uncaptured authorization transaction.

***

## Transaction​Void​Payload returns

* transaction

  [Order​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)

  The created void transaction.

* user​Errors

  [\[Transaction​Void​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TransactionVoidUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### transactionVoid reference
