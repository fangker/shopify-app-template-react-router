---
title: AppSubscriptionDiscount - GraphQL Admin
description: Discount applied to the recurring pricing portion of a subscription.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscount
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscount.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# App​Subscription​Discount

object

Discount applied to the recurring pricing portion of a subscription.

## Fields

* duration​Limit​In​Intervals

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The total number of billing intervals to which the discount will be applied. The discount will be applied to an indefinite number of billing intervals if this value is blank.

* price​After​Discount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The price of the subscription after the discount is applied.

* remaining​Duration​In​Intervals

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The remaining number of billing intervals to which the discount will be applied.

* value

  [App​Subscription​Discount​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/AppSubscriptionDiscountValue)

  non-null

  The value of the discount applied every billing interval.

***

## Map

### Fields with this object

* [AppRecurringPricing.discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRecurringPricing#field-AppRecurringPricing.fields.discount)
