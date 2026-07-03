---
title: cashManagementReasonCodeDelete - GraphQL Admin
description: Deletes a cash management reason code.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashManagementReasonCodeDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashManagementReasonCodeDelete.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# cash​Management​Reason​Code​Delete

mutation

Requires `write_cash_tracking` access scope.

Deletes a cash management reason code.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The reason code id to delete.

***

## Cash​Management​Reason​Code​Delete​Payload returns

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The deleted cash management reason code gid.

* user​Errors

  [\[Cash​Management​Reason​Code​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementReasonCodeDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### cashManagementReasonCodeDelete reference
