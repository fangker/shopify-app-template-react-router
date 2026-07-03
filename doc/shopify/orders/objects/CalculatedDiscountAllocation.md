---
title: CalculatedDiscountAllocation - GraphQL Admin
description: >-
  An amount discounting the line that has been allocated by an associated
  discount application.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountAllocation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountAllocation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Calculated​Discount​Allocation

object

Requires `read_order_edits` access scope or `read_returns` access scope.

An amount discounting the line that has been allocated by an associated discount application.

## Fields

* allocated​Amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The money amount that's allocated by the discount application in shop and presentment currencies.

* discount​Application

  [Calculated​Discount​Application!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedDiscountApplication)

  non-null

  The discount that the allocated amount originated from.

***

## Map

### Fields with this object

* [CalculatedExchangeLineItem.calculatedDiscountAllocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedExchangeLineItem#field-CalculatedExchangeLineItem.fields.calculatedDiscountAllocations)
* [CalculatedLineItem.calculatedDiscountAllocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem#field-CalculatedLineItem.fields.calculatedDiscountAllocations)
