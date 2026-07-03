---
title: SellingPlanFixedPricingPolicy - GraphQL Admin
description: >-
  Represents the pricing policy of a subscription or deferred purchase option
  selling plan.

  The selling plan fixed pricing policy works with the billing and delivery
  policy

  to determine the final price. Discounts are divided among fulfillments.

  For example, a subscription with a $10 discount and two deliveries will have a
  $5

  discount applied to each delivery.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedPricingPolicy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedPricingPolicy.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Selling​Plan​Fixed​Pricing​Policy

object

Requires `read_products` access scope.

Represents the pricing policy of a subscription or deferred purchase option selling plan. The selling plan fixed pricing policy works with the billing and delivery policy to determine the final price. Discounts are divided among fulfillments. For example, a subscription with a $10 discount and two deliveries will have a $5 discount applied to each delivery.

## Fields

* adjustment​Type

  [Selling​Plan​Pricing​Policy​Adjustment​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanPricingPolicyAdjustmentType)

  non-null

  The price adjustment type.

* adjustment​Value

  [Selling​Plan​Pricing​Policy​Adjustment​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicyAdjustmentValue)

  non-null

  The price adjustment value.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the fixed selling plan pricing policy was created.

***

## Map

### Possible type in

* [Selling​Plan​Pricing​Policy](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicy)

***

## Interfaces

* [Selling​Plan​Pricing​Policy​Base](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SellingPlanPricingPolicyBase)

  interface

***

## SellingPlanFixedPricingPolicy Implements

### Implements

* [Selling​Plan​Pricing​Policy​Base](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SellingPlanPricingPolicyBase)
