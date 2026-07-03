---
title: PriceRuleFixedAmountValue - GraphQL Admin
description: The value of a fixed amount price rule.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleFixedAmountValue
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleFixedAmountValue.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Price​Rule​Fixed​Amount​Value

object

Requires `read_price_rules` access scope.

The value of a fixed amount price rule.

## Fields

* amount

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-null

  The monetary value of the price rule.

***

## Map

### Possible type in

* [Price​Rule​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/PriceRuleValue)
