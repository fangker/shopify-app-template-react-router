---
title: cashManagementReasonCodeCreate - GraphQL Admin
description: Create a cash management reason code.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashManagementReasonCodeCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashManagementReasonCodeCreate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# cash​Management​Reason​Code​Create

mutation

Requires `write_cash_tracking` access scope.

Create a cash management reason code.

## Arguments

* code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  The reason code to create.

***

## Cash​Management​Reason​Code​Create​Payload returns

* reason​Code

  [Cash​Management​Custom​Reason​Code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementCustomReasonCode)

  The created cash management reason code.

* user​Errors

  [\[Cash​Management​Reason​Code​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementReasonCodeCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### cashManagementReasonCodeCreate reference
