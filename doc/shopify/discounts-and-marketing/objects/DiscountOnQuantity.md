---
title: DiscountOnQuantity - GraphQL Admin
description: >-
  Defines quantity-based discount rules that specify how many items are eligible

  for a discount effect. This object enables bulk purchase incentives and tiered

  pricing strategies.


  For example, a "Buy 4 candles, get 2 candles 50% off (mix and match)"
  promotion

  would specify a quantity threshold of 2 items that will receive a percentage

  discount effect, encouraging customers to purchase more items to unlock
  savings.


  The configuration combines quantity requirements with discount effects,
  allowing

  merchants to create sophisticated pricing rules that reward larger purchases
  and

  increase average order values.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountOnQuantity'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountOnQuantity.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​On​Quantity

object

Requires Apps must have `read_discounts` access scope.

Defines quantity-based discount rules that specify how many items are eligible for a discount effect. This object enables bulk purchase incentives and tiered pricing strategies.

For example, a "Buy 4 candles, get 2 candles 50% off (mix and match)" promotion would specify a quantity threshold of 2 items that will receive a percentage discount effect, encouraging customers to purchase more items to unlock savings.

The configuration combines quantity requirements with discount effects, allowing merchants to create sophisticated pricing rules that reward larger purchases and increase average order values.

## Fields

* effect

  [Discount​Effect!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountEffect)

  non-null

  The discount's effect on qualifying items.

* quantity

  [Discount​Quantity!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountQuantity)

  non-null

  The number of items being discounted. The customer must have at least this many items of specified products or product variants in their order to be eligible for the discount.

***

## Map

### Possible type in

* [Discount​Customer​Gets​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerGetsValue)
