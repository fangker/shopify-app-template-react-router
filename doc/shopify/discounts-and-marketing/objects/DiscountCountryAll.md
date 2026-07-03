---
title: DiscountCountryAll - GraphQL Admin
description: >-
  Indicates that a shipping discount applies to all countries without
  restriction,

  enabling merchants to create truly global promotions. This object represents

  universal geographic eligibility for shipping discount offers.


  For example, an online store launching a "Worldwide Free Shipping" campaign

  would use this configuration to ensure customers from any country can benefit

  from the promotion.


  This setting simplifies international discount management by eliminating the

  need to manually select individual countries or regions, making it ideal for

  digital products or stores with comprehensive global shipping capabilities.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCountryAll'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCountryAll.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Country​All

object

Requires Apps must have `read_discounts` access scope.

Indicates that a shipping discount applies to all countries without restriction, enabling merchants to create truly global promotions. This object represents universal geographic eligibility for shipping discount offers.

For example, an online store launching a "Worldwide Free Shipping" campaign would use this configuration to ensure customers from any country can benefit from the promotion.

This setting simplifies international discount management by eliminating the need to manually select individual countries or regions, making it ideal for digital products or stores with comprehensive global shipping capabilities.

## Fields

* all​Countries

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the discount can be applied to all countries as shipping destination. This value is always `true`.

***

## Map

### Possible type in

* [Discount​Shipping​Destination​Selection](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountShippingDestinationSelection)
