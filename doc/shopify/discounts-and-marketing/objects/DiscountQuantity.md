---
title: DiscountQuantity - GraphQL Admin
description: >-
  Defines a quantity threshold for discount eligibility or application. This

  simple object specifies the number of items required to trigger or calculate

  discount benefits.


  For example, a "Buy 3, Get 1 Free" promotion would use DiscountQuantity to

  define the minimum purchase quantity of 3 items, or a bulk discount might

  specify quantity tiers like 10+ items for wholesale pricing.


  The quantity value determines how discounts interact with cart contents,
  whether

  setting minimum purchase requirements or defining quantity-based discount
  calculations.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountQuantity'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountQuantity.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Quantity

object

Requires Apps must have `read_discounts` access scope.

Defines a quantity threshold for discount eligibility or application. This simple object specifies the number of items required to trigger or calculate discount benefits.

For example, a "Buy 3, Get 1 Free" promotion would use DiscountQuantity to define the minimum purchase quantity of 3 items, or a bulk discount might specify quantity tiers like 10+ items for wholesale pricing.

The quantity value determines how discounts interact with cart contents, whether setting minimum purchase requirements or defining quantity-based discount calculations.

## Fields

* quantity

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The quantity of items.

***

## Map

### Fields with this object

* [DiscountOnQuantity.quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountOnQuantity#field-DiscountOnQuantity.fields.quantity)

### Possible type in

* [Discount​Customer​Buys​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerBuysValue)
