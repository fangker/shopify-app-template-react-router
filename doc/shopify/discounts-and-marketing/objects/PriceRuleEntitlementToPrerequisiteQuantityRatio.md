---
title: PriceRuleEntitlementToPrerequisiteQuantityRatio - GraphQL Admin
description: >-
  Quantity of prerequisite items required for the price rule to be applicable,
  compared to quantity of entitled items.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleEntitlementToPrerequisiteQuantityRatio
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleEntitlementToPrerequisiteQuantityRatio.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Price​Rule​Entitlement​To​Prerequisite​Quantity​Ratio

object

Requires `read_price_rules` access scope.

Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items.

## Fields

* entitlement​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of entitled items in the ratio.

* prerequisite​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of prerequisite items in the ratio.

***

## Map
