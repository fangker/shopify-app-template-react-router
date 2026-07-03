---
title: DiscountPurchaseAmount - GraphQL Admin
description: |-
  A purchase amount in the context of a discount. This object can be used to
  define the minimum purchase amount required for a discount to be applicable.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountPurchaseAmount
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountPurchaseAmount.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Purchase​Amount

object

Requires Apps must have `read_discounts` access scope.

A purchase amount in the context of a discount. This object can be used to define the minimum purchase amount required for a discount to be applicable.

## Fields

* amount

  [Decimal!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  non-null

  The purchase amount in decimal format.

***

## Map

### Possible type in

* [Discount​Customer​Buys​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerBuysValue)
