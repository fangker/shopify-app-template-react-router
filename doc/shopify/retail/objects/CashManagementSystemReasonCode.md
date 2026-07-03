---
title: CashManagementSystemReasonCode - GraphQL Admin
description: System reason code.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementSystemReasonCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementSystemReasonCode.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Cash​Management​System​Reason​Code

object

Requires `read_cash_tracking` access scope.

System reason code.

## Fields

* code

  [Cash​Management​System​Reason​Code​Enum!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CashManagementSystemReasonCodeEnum)

  non-null

  The code for the system reason code.

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

## CashManagementSystemReasonCode Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
