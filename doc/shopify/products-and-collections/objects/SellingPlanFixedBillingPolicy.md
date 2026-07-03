---
title: SellingPlanFixedBillingPolicy - GraphQL Admin
description: >-
  The fixed selling plan billing policy defines how much of the price of the
  product will be billed to customer

  at checkout. If there is an outstanding balance, it determines when it will be
  paid.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedBillingPolicy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedBillingPolicy.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Selling​Plan​Fixed​Billing​Policy

object

Requires `read_products` access scope.

The fixed selling plan billing policy defines how much of the price of the product will be billed to customer at checkout. If there is an outstanding balance, it determines when it will be paid.

## Fields

* checkout​Charge

  [Selling​Plan​Checkout​Charge!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanCheckoutCharge)

  non-null

  The checkout charge when the full amount isn't charged at checkout.

* remaining​Balance​Charge​Exact​Time

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The exact time when to capture the full payment.

* remaining​Balance​Charge​Time​After​Checkout

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The period after remaining\_balance\_charge\_trigger, before capturing the full payment. Expressed as an ISO8601 duration.

* remaining​Balance​Charge​Trigger

  [Selling​Plan​Remaining​Balance​Charge​Trigger!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanRemainingBalanceChargeTrigger)

  non-null

  When to capture payment for amount due.

***

## Map

### Possible type in

* [Selling​Plan​Billing​Policy](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanBillingPolicy)
