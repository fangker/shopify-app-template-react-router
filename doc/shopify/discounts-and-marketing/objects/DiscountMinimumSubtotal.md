---
title: DiscountMinimumSubtotal - GraphQL Admin
description: The minimum subtotal required for the discount to apply.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountMinimumSubtotal
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountMinimumSubtotal.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Minimum​Subtotal

object

Requires Apps must have `read_discounts` access scope.

The minimum subtotal required for the discount to apply.

## Fields

* greater​Than​Or​Equal​To​Subtotal

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The minimum subtotal that's required for the discount to be applied.

***

## Map

### Possible type in

* [Discount​Minimum​Requirement](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountMinimumRequirement)
