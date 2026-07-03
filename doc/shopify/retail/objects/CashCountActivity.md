---
title: CashCountActivity - GraphQL Admin
description: A cash count activity.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CashCountActivity'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashCountActivity.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Cash​Count​Activity

object

Requires `read_cash_tracking` access scope.

A cash count activity.

## Fields

* cash

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount of cash added or removed as part of the activity.

* cash​Counted

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount of cash counted during the activity.

* cash​Discrepancy

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The discrepancy between the counted and expected cash amounts.

* cash​Expected

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The expected amount of cash in the drawer at the time of the activity.

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

  [Cash​Count​Activity​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CashCountActivityType)

  non-null

  The type of count activity.

***

## Map

No referencing types

***

## Interfaces

* [Cash​Activity](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CashActivity)

  interface

***

## CashCountActivity Implements

### Implements

* [Cash​Activity](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CashActivity)
