---
title: FinancialSummaryDiscountAllocation - GraphQL Admin
description: >-
  An amount that's allocated to a line item based on an associated discount
  application.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FinancialSummaryDiscountAllocation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FinancialSummaryDiscountAllocation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Financial​Summary​Discount​Allocation

object

Requires `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope, `read_third_party_fulfillment_orders` access scope or `read_marketplace_fulfillment_orders` access scope.

An amount that's allocated to a line item based on an associated discount application.

## Fields

* approximate​Allocated​Amount​Per​Item

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The money amount that's allocated per unit on the associated line based on the discount application in shop and presentment currencies. If the allocated amount for the line cannot be evenly divided by the quantity, then this amount will be an approximate amount, avoiding fractional pennies. For example, if the associated line had a quantity of 3 with a discount of 4 cents, then the discount distribution would be \[0.01, 0.01, 0.02]. This field returns the highest number of the distribution. In this example, this would be 0.02.

* discount​Application

  [Financial​Summary​Discount​Application!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinancialSummaryDiscountApplication)

  non-null

  The discount application that the allocated amount originated from.

***

## Map

### Fields with this object

* [FulfillmentOrderLineItemFinancialSummary.discountAllocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemFinancialSummary#field-FulfillmentOrderLineItemFinancialSummary.fields.discountAllocations)
