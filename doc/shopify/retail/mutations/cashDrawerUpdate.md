---
title: cashDrawerUpdate - GraphQL Admin
description: Updates a cash drawer.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashDrawerUpdate'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashDrawerUpdate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# cash​Drawer​Update

mutation

Requires `write_cash_tracking` access scope.

Updates a cash drawer.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the cash drawer to update.

* input

  [Cash​Drawer​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CashDrawerUpdateInput)

  required

  The input fields for updating a cash drawer.

***

## Cash​Drawer​Update​Payload returns

* cash​Drawer

  [Cash​Drawer](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer)

  The updated cash drawer.

* user​Errors

  [\[Cash​Drawer​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawerUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### cashDrawerUpdate reference
