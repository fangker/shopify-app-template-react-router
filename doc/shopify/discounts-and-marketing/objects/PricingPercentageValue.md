---
title: PricingPercentageValue - GraphQL Admin
description: >-
  One type of value given to a customer when a discount is applied to an order.

  The application of a discount with this value gives the customer the specified
  percentage off a specified item.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PricingPercentageValue
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PricingPercentageValue.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Pricing​Percentage​Value

object

One type of value given to a customer when a discount is applied to an order. The application of a discount with this value gives the customer the specified percentage off a specified item.

## Fields

* percentage

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The percentage value of the object. This is a number between -100 (free) and 0 (no discount).

***

## Map

### Possible type in

* [Pricing​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/PricingValue)
