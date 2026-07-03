---
title: DiscountPercentage - GraphQL Admin
description: >-
  Creates percentage-based discounts that reduce item prices by a specified

  percentage amount. This gives merchants a flexible way to offer proportional

  savings that automatically scale with order value.


  For example, a "20% off all winter clothing" promotion would use this object
  to

  apply consistent percentage savings across different price points.


  Learn more about [discount types](https://help.shopify.com/manual/discounts/).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountPercentage'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountPercentage.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Percentage

object

Requires Apps must have `read_discounts` access scope.

Creates percentage-based discounts that reduce item prices by a specified percentage amount. This gives merchants a flexible way to offer proportional savings that automatically scale with order value.

For example, a "20% off all winter clothing" promotion would use this object to apply consistent percentage savings across different price points.

Learn more about [discount types](https://help.shopify.com/manual/discounts/).

## Fields

* percentage

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The percentage value of the discount.

***

## Map

### Possible type in

* [Discount​Customer​Gets​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerGetsValue)
* [Discount​Effect](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountEffect)
