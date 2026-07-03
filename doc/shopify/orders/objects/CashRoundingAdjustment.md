---
title: CashRoundingAdjustment - GraphQL Admin
description: >-
  The rounding adjustment applied to total payment or refund received for an
  Order involving cash payments.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashRoundingAdjustment
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashRoundingAdjustment.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Cash​Rounding​Adjustment

object

Requires `read_orders` access scope or `read_quick_sale` access scope.

The rounding adjustment applied to total payment or refund received for an Order involving cash payments.

## Fields

* payment​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The rounding adjustment that can be applied to totalReceived for an Order involving cash payments in shop and presentment currencies. Could be a positive or negative value. Value is 0 if there's no rounding, or for non-cash payments.

* refund​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The rounding adjustment that can be applied to totalRefunded for an Order involving cash payments in shop and presentment currencies. Could be a positive or negative value. Value is 0 if there's no rounding, or for non-cash refunds.

***

## Map

### Fields with this object

* [Order.totalCashRoundingAdjustment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.totalCashRoundingAdjustment)
