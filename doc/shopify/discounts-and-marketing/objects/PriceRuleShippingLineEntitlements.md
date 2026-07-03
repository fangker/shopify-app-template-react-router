---
title: PriceRuleShippingLineEntitlements - GraphQL Admin
description: The shipping lines to which the price rule applies to.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleShippingLineEntitlements
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleShippingLineEntitlements.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Price​Rule​Shipping​Line​Entitlements

object

Requires `read_price_rules` access scope.

The shipping lines to which the price rule applies to.

## Fields

* country​Codes

  [\[Country​Code!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  non-null

  The codes for the countries to which the price rule applies to.

* include​Rest​Of​World

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the price rule is applicable to countries that haven't been defined in the shop's shipping zones.

* target​All​Shipping​Lines

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the price rule applies to all shipping lines.

***

## Map

### Fields with this object

* [PriceRule.shippingEntitlements](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.shippingEntitlements)
