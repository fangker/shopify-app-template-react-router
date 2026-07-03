---
title: DiscountCountries - GraphQL Admin
description: >-
  Defines the geographic scope where a shipping discount can be applied based on

  customer shipping destinations. This configuration determines which countries

  are eligible for the promotional offer.


  For example, a "Free Shipping to EU" promotion would specify European Union

  countries, while a domestic-only sale might target just the store's home
  country.


  The object includes both specific country selections and an option to include

  all remaining countries not explicitly listed, providing flexible geographic

  targeting for international merchants.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCountries'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCountries.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Countries

object

Requires Apps must have `read_discounts` access scope.

Defines the geographic scope where a shipping discount can be applied based on customer shipping destinations. This configuration determines which countries are eligible for the promotional offer.

For example, a "Free Shipping to EU" promotion would specify European Union countries, while a domestic-only sale might target just the store's home country.

The object includes both specific country selections and an option to include all remaining countries not explicitly listed, providing flexible geographic targeting for international merchants.

## Fields

* countries

  [\[Country​Code!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  non-null

  The codes for the countries where the discount can be applied.

* include​Rest​Of​World

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the discount is applicable to countries that haven't been defined in the shop's shipping zones.

***

## Map

### Possible type in

* [Discount​Shipping​Destination​Selection](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountShippingDestinationSelection)
