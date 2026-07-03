---
title: CashManagementDefaultReasonCode - GraphQL Admin
description: Default reason code.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementDefaultReasonCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementDefaultReasonCode.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Cash​Management​Default​Reason​Code

object

Requires `read_cash_tracking` access scope.

Default reason code.

## Fields

* code

  [Cash​Management​Default​Reason​Code​Enum!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CashManagementDefaultReasonCodeEnum)

  non-null

  The code for the default reason code.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

***

## Map

### Possible type in

* [Cash​Management​Reason​Code](https://shopify.dev/docs/api/admin-graphql/latest/unions/CashManagementReasonCode)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## CashManagementDefaultReasonCode Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
