---
title: ShopifyProtectOrderEligibility - GraphQL Admin
description: >-
  The eligibility details of an order's protection against fraudulent
  chargebacks by Shopify Protect.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyProtectOrderEligibility
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyProtectOrderEligibility.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Protect​Order​Eligibility

object

Requires `read_orders` access scope.

The eligibility details of an order's protection against fraudulent chargebacks by Shopify Protect.

## Fields

* status

  [Shopify​Protect​Eligibility​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyProtectEligibilityStatus)

  non-null

  The status of whether an order is eligible for protection against fraudulent chargebacks.

***

## Map

### Fields with this object

* [ShopifyProtectOrderSummary.eligibility](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyProtectOrderSummary#field-ShopifyProtectOrderSummary.fields.eligibility)
