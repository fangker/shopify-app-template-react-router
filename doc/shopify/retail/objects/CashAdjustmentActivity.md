---
title: CashAdjustmentActivity - GraphQL Admin
description: A cash adjustment activity.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashAdjustmentActivity
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashAdjustmentActivity.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Cash​Adjustment​Activity

object

Requires `read_cash_tracking` access scope.

A cash adjustment activity.

## Fields

* cash

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount of cash added or removed as part of the activity.

* gift​Card

  [Gift​Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

  The gift card associated with the activity.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A note associated with the activity.

* payment​Session

  [Point​Of​Sale​Device​Payment​Session!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession)

  non-null

  The point of sale device payment session associated with the activity.

* reason​Code

  [Cash​Management​Reason​Code](https://shopify.dev/docs/api/admin-graphql/latest/unions/CashManagementReasonCode)

  The reason code for the activity.

* staff​Member

  [Staff​Member!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  non-null

  The staff member who performed the activity.

* time

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The time at which the activity occurred.

* type

  [Cash​Adjustment​Activity​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CashAdjustmentActivityType)

  non-null

  The type of adjustment activity.

***

## Map

No referencing types

***

## Interfaces

* [Cash​Activity](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CashActivity)

  interface

***

## CashAdjustmentActivity Implements

### Implements

* [Cash​Activity](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CashActivity)
