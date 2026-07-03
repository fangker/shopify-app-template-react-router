---
title: FinancialSummaryDiscountApplication - GraphQL Admin
description: |-
  Discount applications capture the intentions of a discount source at
  the time of application on an order's line items or shipping lines.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FinancialSummaryDiscountApplication
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FinancialSummaryDiscountApplication.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Financial​Summary​Discount​Application

object

Requires `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope, `read_third_party_fulfillment_orders` access scope or `read_marketplace_fulfillment_orders` access scope.

Discount applications capture the intentions of a discount source at the time of application on an order's line items or shipping lines.

## Fields

* allocation​Method

  [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod)

  non-null

  The method by which the discount's value is applied to its entitled items.

* target​Selection

  [Discount​Application​Target​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetSelection)

  non-null

  How the discount amount is distributed on the discounted lines.

* target​Type

  [Discount​Application​Target​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetType)

  non-null

  Whether the discount is applied on line items or shipping lines.

***

## Map

### Fields with this object

* [FinancialSummaryDiscountAllocation.discountApplication](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinancialSummaryDiscountAllocation#field-FinancialSummaryDiscountAllocation.fields.discountApplication)
