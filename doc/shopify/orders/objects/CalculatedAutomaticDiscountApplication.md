---
title: CalculatedAutomaticDiscountApplication - GraphQL Admin
description: A discount that is automatically applied to an order that is being edited.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedAutomaticDiscountApplication
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedAutomaticDiscountApplication.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Calculated​Automatic​Discount​Application

object

Requires `read_order_edits` access scope.

A discount that is automatically applied to an order that is being edited.

## Fields

* allocation​Method

  [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod)

  non-null

  The method by which the discount's value is allocated to its entitled items.

* applied​To

  [Discount​Application​Level!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationLevel)

  non-null

  The level at which the discount was applied.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description of discount application. Indicates the reason why the discount was applied.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

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

* [Calculated​Discount​Application](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedDiscountApplication)

  interface

***

## CalculatedAutomaticDiscountApplication Implements

### Implements

* [Calculated​Discount​Application](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedDiscountApplication)
