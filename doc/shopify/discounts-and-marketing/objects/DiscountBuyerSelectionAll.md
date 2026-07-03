---
title: DiscountBuyerSelectionAll - GraphQL Admin
description: >-
  Indicates that a discount applies to all buyers without restrictions, enabling

  universal promotions that reach every customer. This selection removes

  buyer-specific limitations from discount eligibility.


  For example, a flash sale or grand opening promotion would target all buyers
  to maximize participation and store visibility.


  Learn more about [discount
  targeting](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountApplication).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountBuyerSelectionAll
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountBuyerSelectionAll.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Buyer​Selection​All

object

Requires Apps must have `read_discounts` access scope.

Indicates that a discount applies to all buyers without restrictions, enabling universal promotions that reach every customer. This selection removes buyer-specific limitations from discount eligibility.

For example, a flash sale or grand opening promotion would target all buyers to maximize participation and store visibility.

Learn more about [discount targeting](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountApplication).

## Fields

* all

  [Discount​Buyer​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountBuyerSelection)

  non-null

  All buyers are eligible for the discount.

***

## Map

### Possible type in

* [Discount​Context](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountContext)
