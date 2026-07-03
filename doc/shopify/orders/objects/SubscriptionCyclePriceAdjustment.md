---
title: SubscriptionCyclePriceAdjustment - GraphQL Admin
description: Represents a Subscription Line Pricing Cycle Adjustment.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionCyclePriceAdjustment
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionCyclePriceAdjustment.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Cycle​Price​Adjustment

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Represents a Subscription Line Pricing Cycle Adjustment.

## Fields

* adjustment​Type

  [Selling​Plan​Pricing​Policy​Adjustment​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanPricingPolicyAdjustmentType)

  non-null

  Price adjustment type.

* adjustment​Value

  [Selling​Plan​Pricing​Policy​Adjustment​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicyAdjustmentValue)

  non-null

  Price adjustment value.

* after​Cycle

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of cycles required before this pricing policy applies.

* computed​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The computed price after the adjustments applied.

***

## Map

### Fields with this object

* [SubscriptionPricingPolicy.cycleDiscounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionPricingPolicy#field-SubscriptionPricingPolicy.fields.cycleDiscounts)
