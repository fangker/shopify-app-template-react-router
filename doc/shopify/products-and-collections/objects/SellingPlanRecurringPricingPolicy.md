---
title: SellingPlanRecurringPricingPolicy - GraphQL Admin
description: >-
  Represents a recurring selling plan pricing policy. It applies after the fixed

  pricing policy. By using the afterCycle parameter, you can specify the cycle

  when the recurring pricing policy comes into effect. Recurring pricing
  policies

  are not available for deferred purchase options.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanRecurringPricingPolicy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanRecurringPricingPolicy.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Selling​Plan​Recurring​Pricing​Policy

object

Requires `read_products` access scope.

Represents a recurring selling plan pricing policy. It applies after the fixed pricing policy. By using the afterCycle parameter, you can specify the cycle when the recurring pricing policy comes into effect. Recurring pricing policies are not available for deferred purchase options.

## Fields

* adjustment​Type

  [Selling​Plan​Pricing​Policy​Adjustment​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanPricingPolicyAdjustmentType)

  non-null

  The price adjustment type.

* adjustment​Value

  [Selling​Plan​Pricing​Policy​Adjustment​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicyAdjustmentValue)

  non-null

  The price adjustment value.

* after​Cycle

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Cycle after which this pricing policy applies.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the recurring selling plan pricing policy was created.

***

## Map

### Possible type in

* [Selling​Plan​Pricing​Policy](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicy)

***

## Interfaces

* [Selling​Plan​Pricing​Policy​Base](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SellingPlanPricingPolicyBase)

  interface

***

## SellingPlanRecurringPricingPolicy Implements

### Implements

* [Selling​Plan​Pricing​Policy​Base](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SellingPlanPricingPolicyBase)
