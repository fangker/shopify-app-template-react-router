---
title: AppRecurringPricing - GraphQL Admin
description: >-
  The pricing information about a subscription app.

  The object contains an interval (the frequency at which the shop is billed for
  an app subscription) and

  a price (the amount to be charged to the subscribing shop at each interval).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRecurringPricing
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRecurringPricing.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# App​Recurring​Pricing

object

The pricing information about a subscription app. The object contains an interval (the frequency at which the shop is billed for an app subscription) and a price (the amount to be charged to the subscribing shop at each interval).

## Fields

* discount

  [App​Subscription​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscount)

  The discount applied to the subscription for a given number of billing intervals.

* interval

  [App​Pricing​Interval!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPricingInterval)

  non-null

  The frequency at which the subscribing shop is billed for an app subscription.

* plan​Handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The app store pricing plan handle.

* price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount and currency to be charged to the subscribing shop every billing interval.

***

## Map

### Possible type in

* [App​Pricing​Details](https://shopify.dev/docs/api/admin-graphql/latest/unions/AppPricingDetails)
