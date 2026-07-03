---
title: DiscountAmount - GraphQL Admin
description: >-
  The fixed amount value of a discount, and whether the amount is applied to
  each

  entitled item or spread evenly across the entitled items.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAmount'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAmount.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Amount

object

Requires Apps must have `read_discounts` access scope.

The fixed amount value of a discount, and whether the amount is applied to each entitled item or spread evenly across the entitled items.

## Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The value of the discount.

* applies​On​Each​Item

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  If true, then the discount is applied to each of the entitled items. If false, then the amount is split across all of the entitled items.

***

## Map

### Possible type in

* [Discount​Customer​Gets​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerGetsValue)
* [Discount​Effect](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountEffect)
