---
title: ManualDiscountApplication - GraphQL Admin
description: >-
  Manual discount applications capture the intentions of a discount that was
  manually created for an order.


  Discount applications don't represent the actual final amount discounted on a

  line (line item or shipping line). The actual amount discounted on a line is

  represented by the
  [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation)
  object.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ManualDiscountApplication
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ManualDiscountApplication.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Manual​Discount​Application

object

Manual discount applications capture the intentions of a discount that was manually created for an order.

Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

## Fields

* allocation​Method

  [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod)

  non-null

  The method by which the discount's value is applied to its entitled items.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description of the discount application.

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

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the discount application.

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

## ManualDiscountApplication Implements

### Implements

* [Discount​Application](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication)
