---
title: draftOrderBulkDelete - GraphQL Admin
description: Deletes multiple draft orders.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkDelete.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# draft​Order​Bulk​Delete

mutation

Requires `write_draft_orders` access scope. Also: The user must have access to delete multiple draft orders.

Deletes multiple draft orders.

## Arguments

* ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The IDs of the draft orders to delete.

* saved​Search​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the draft order saved search for filtering draft orders on.

* search

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The conditions for filtering draft orders on. See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax).

***

## Draft​Order​Bulk​Delete​Payload returns

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job for deleting the draft orders.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### draftOrderBulkDelete reference
