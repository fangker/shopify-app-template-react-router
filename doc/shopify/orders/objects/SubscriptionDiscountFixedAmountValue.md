---
title: SubscriptionDiscountFixedAmountValue - GraphQL Admin
description: The value of the discount and how it will be applied.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountFixedAmountValue
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountFixedAmountValue.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Discount​Fixed​Amount​Value

object

Requires `read_own_subscription_contracts` access scope.

The value of the discount and how it will be applied.

## Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The fixed amount value of the discount.

* applies​On​Each​Item

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the amount is applied per item.

***

## Map

### Possible type in

* [Subscription​Discount​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDiscountValue)
