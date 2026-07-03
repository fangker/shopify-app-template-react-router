---
title: DiscountMinimumQuantity - GraphQL Admin
description: >-
  Specifies the minimum item quantity required for discount eligibility, helping

  merchants create volume-based promotions that encourage larger purchases. This

  threshold applies to qualifying items in the customer's cart.


  For example, a "Buy 3, Get 10% Off" promotion would set the minimum quantity
  to 3 items.


  Learn more about [discount
  requirements](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountApplication).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountMinimumQuantity
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountMinimumQuantity.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Minimum​Quantity

object

Requires Apps must have `read_discounts` access scope.

Specifies the minimum item quantity required for discount eligibility, helping merchants create volume-based promotions that encourage larger purchases. This threshold applies to qualifying items in the customer's cart.

For example, a "Buy 3, Get 10% Off" promotion would set the minimum quantity to 3 items.

Learn more about [discount requirements](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountApplication).

## Fields

* greater​Than​Or​Equal​To​Quantity

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The minimum quantity of items that's required for the discount to be applied.

***

## Map

### Possible type in

* [Discount​Minimum​Requirement](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountMinimumRequirement)
