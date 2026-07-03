---
title: PriceRuleQuantityRange - GraphQL Admin
description: A quantity range within which the price rule is applicable.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleQuantityRange
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleQuantityRange.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Price​Rule​Quantity​Range

object

Requires `read_price_rules` access scope.

A quantity range within which the price rule is applicable.

## Fields

* greater​Than

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The lower bound of the quantity range.

* greater​Than​Or​Equal​To

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The lower bound or equal of the quantity range.

* less​Than

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The upper bound of the quantity range.

* less​Than​Or​Equal​To

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The upper bound or equal of the quantity range.

***

## Map

### Fields with this object

* [PriceRule.prerequisiteQuantityRange](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.prerequisiteQuantityRange)
