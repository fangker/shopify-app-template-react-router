---
title: PriceRuleValidityPeriod - GraphQL Admin
description: A time period during which a price rule is applicable.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleValidityPeriod
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleValidityPeriod.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Price​Rule​Validity​Period

object

Requires `read_price_rules` access scope.

A time period during which a price rule is applicable.

## Fields

* end

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The time after which the price rule becomes invalid.

* start

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The time after which the price rule is valid.

***

## Map

### Fields with this object

* [PriceRule.validityPeriod](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.validityPeriod)
