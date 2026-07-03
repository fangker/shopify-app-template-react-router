---
title: PriceRuleMoneyRange - GraphQL Admin
description: A money range within which the price rule is applicable.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleMoneyRange
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleMoneyRange.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Price​Rule​Money​Range

object

Requires `read_price_rules` access scope.

A money range within which the price rule is applicable.

## Fields

* greater​Than

  [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  The lower bound of the money range.

* greater​Than​Or​Equal​To

  [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  The lower bound or equal of the money range.

* less​Than

  [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  The upper bound of the money range.

* less​Than​Or​Equal​To

  [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  The upper bound or equal of the money range.

***

## Map

### Fields with this object

* [PriceRule.prerequisiteShippingPriceRange](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.prerequisiteShippingPriceRange)
* [PriceRule.prerequisiteSubtotalRange](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.prerequisiteSubtotalRange)
