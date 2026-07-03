---
title: SellingPlanCheckoutCharge - GraphQL Admin
description: The amount charged at checkout when the full amount isn't charged at checkout.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanCheckoutCharge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanCheckoutCharge.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Selling​Plan​Checkout​Charge

object

Requires `read_products` access scope.

The amount charged at checkout when the full amount isn't charged at checkout.

## Fields

* type

  [Selling​Plan​Checkout​Charge​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanCheckoutChargeType)

  non-null

  The charge type for the checkout charge.

* value

  [Selling​Plan​Checkout​Charge​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanCheckoutChargeValue)

  non-null

  The charge value for the checkout charge.

***

## Map

### Fields with this object

* [SellingPlanFixedBillingPolicy.checkoutCharge](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedBillingPolicy#field-SellingPlanFixedBillingPolicy.fields.checkoutCharge)
