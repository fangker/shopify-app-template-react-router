---
title: FulfillmentOrderLineItemFinancialSummary - GraphQL Admin
description: The financial details of a fulfillment order line item.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemFinancialSummary
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemFinancialSummary.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Fulfillment​Order​Line​Item​Financial​Summary

object

Requires `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope, `read_third_party_fulfillment_orders` access scope or `read_marketplace_fulfillment_orders` access scope.

The financial details of a fulfillment order line item.

## Fields

* approximate​Discounted​Unit​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The approximate split price of a line item unit, in shop and presentment currencies. This value doesn't include discounts applied to the entire order.For the full picture of applied discounts, see discountAllocations.

* discount​Allocations

  [\[Financial​Summary​Discount​Allocation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinancialSummaryDiscountAllocation)

  non-null

  The discounts that have been allocated onto the line item by discount applications, not including order edits and refunds.

* original​Unit​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The variant unit price without discounts applied, in shop and presentment currencies.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  Number of line items that this financial summary applies to.

***

## Map

### Fields with this object

* [FulfillmentOrderLineItem.financialSummaries](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem#field-FulfillmentOrderLineItem.fields.financialSummaries)
