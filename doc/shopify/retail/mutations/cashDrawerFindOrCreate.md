---
title: cashDrawerFindOrCreate - GraphQL Admin
description: >-
  Finds or creates a cash drawer for cash management. Also ensures the provided
  device is assigned to the drawer.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashDrawerFindOrCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashDrawerFindOrCreate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# cash​Drawer​Find​Or​Create

mutation

Requires `write_cash_tracking` access scope.

Finds or creates a cash drawer for cash management. Also ensures the provided device is assigned to the drawer.

## Arguments

* location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The location the cash drawer is located in.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  The name of the cash drawer.

* point​Of​Sale​Device​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The point of sale device to assign to the cash drawer.

***

## Cash​Drawer​Find​Or​Create​Payload returns

* cash​Drawer

  [Cash​Drawer](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer)

  The cash drawer.

* user​Errors

  [\[Cash​Drawer​Find​Or​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawerFindOrCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### cashDrawerFindOrCreate reference
