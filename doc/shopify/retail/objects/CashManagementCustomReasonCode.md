---
title: CashManagementCustomReasonCode - GraphQL Admin
description: Custom reason code.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementCustomReasonCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementCustomReasonCode.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Cash​Management​Custom​Reason​Code

object

Requires `read_cash_tracking` access scope.

Custom reason code.

## Fields

* code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The code for the custom reason code.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

***

## Map

### Possible type in

* [Cash​Management​Reason​Code](https://shopify.dev/docs/api/admin-graphql/latest/unions/CashManagementReasonCode)

***

## Mutations

* [cash​Management​Reason​Code​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashManagementReasonCodeCreate)

  mutation

  Create a cash management reason code.

  * code

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The reason code to create.

  ***

***

## CashManagementCustomReasonCode Mutations

### Mutated by

* [cash​Management​Reason​Code​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashManagementReasonCodeCreate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## CashManagementCustomReasonCode Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
