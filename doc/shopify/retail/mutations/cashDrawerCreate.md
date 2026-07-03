---
title: cashDrawerCreate - GraphQL Admin
description: Creates a cash drawer in a provided location.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashDrawerCreate'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashDrawerCreate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# cash​Drawer​Create

mutation

Requires `write_cash_tracking` access scope.

Creates a cash drawer in a provided location.

## Arguments

* location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The location the cash drawer is located in.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  The name of the cash drawer.

***

## Cash​Drawer​Create​Payload returns

* cash​Drawer

  [Cash​Drawer](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer)

  The created cash drawer.

* user​Errors

  [\[Cash​Drawer​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawerCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### cashDrawerCreate reference
