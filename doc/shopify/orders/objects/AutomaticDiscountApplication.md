---
title: AutomaticDiscountApplication - GraphQL Admin
description: >-
  Automatic discount applications capture the intentions of a discount that was
  automatically applied.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AutomaticDiscountApplication
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AutomaticDiscountApplication.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Automatic​Discount​Application

object

Automatic discount applications capture the intentions of a discount that was automatically applied.

## Fields

* allocation​Method

  [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod)

  non-null

  The method by which the discount's value is applied to its entitled items.

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

## AutomaticDiscountApplication Implements

### Implements

* [Discount​Application](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication)
