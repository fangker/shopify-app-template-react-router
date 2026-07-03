---
title: CashTransactionActivity - GraphQL Admin
description: A cash transaction activity.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTransactionActivity
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTransactionActivity.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Cash​Transaction​Activity

object

Requires `read_cash_tracking` access scope.

A cash transaction activity.

## Fields

* cash

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount of cash added or removed as part of the activity.

* order​Transaction

  [Order​Transaction!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)

  non-null

  The order transaction associated with the activity.

* payment​Session

  [Point​Of​Sale​Device​Payment​Session!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession)

  non-null

  The point of sale device payment session associated with the activity.

* staff​Member

  [Staff​Member!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  non-null

  The staff member who performed the activity.

* time

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The time at which the activity occurred.

* type

  [Cash​Transaction​Activity​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CashTransactionActivityType)

  non-null

  The type of transaction activity.

***

## Map

No referencing types

***

## Interfaces

* [Cash​Activity](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CashActivity)

  interface

***

## CashTransactionActivity Implements

### Implements

* [Cash​Activity](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CashActivity)
