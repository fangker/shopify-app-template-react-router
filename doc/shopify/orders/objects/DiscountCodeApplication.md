---
title: DiscountCodeApplication - GraphQL Admin
description: >-
  Discount code applications capture the intentions of a discount code at

  the time that it is applied onto an order.


  Discount applications don't represent the actual final amount discounted on a

  line (line item or shipping line). The actual amount discounted on a line is

  represented by the
  [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation)
  object.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApplication
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApplication.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Code​Application

object

Discount code applications capture the intentions of a discount code at the time that it is applied onto an order.

Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

## Fields

* allocation​Method

  [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod)

  non-null

  The method by which the discount's value is applied to its entitled items.

* code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The string identifying the discount code that was used at the time of application.

* index

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  An ordered index that can be used to identify the discount application and indicate the precedence of the discount application for calculations.

* target​Selection

  [Discount​Application​Target​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetSelection)

  non-null

  How the discount amount is distributed on the discounted lines.

* target​Type

  [Discount​Application​Target​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetType)

  non-null

  Whether the discount is applied on line items or shipping lines.

* value

  [Pricing​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/PricingValue)

  non-null

  The value of the discount application.

***

## Map

No referencing types

***

## Interfaces

* [Discount​Application](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication)

  interface

***

## DiscountCodeApplication Implements

### Implements

* [Discount​Application](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication)
