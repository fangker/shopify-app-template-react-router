---
title: QuantityRule - GraphQL Admin
description: The quantity rule for the product variant in a given context.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRule'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRule.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Quantity​Rule

object

Requires `read_products` access scope.

The quantity rule for the product variant in a given context.

## Fields

* increment

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The value that specifies the quantity increment between minimum and maximum of the rule. Only quantities divisible by this value will be considered valid.

  The increment must be lower than or equal to the minimum and the maximum, and both minimum and maximum must be divisible by this value.

* is​Default

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the quantity rule fields match one increment, one minimum and no maximum.

* maximum

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  An optional value that defines the highest allowed quantity purchased by the customer. If defined, maximum must be lower than or equal to the minimum and must be a multiple of the increment.

* minimum

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The value that defines the lowest allowed quantity purchased by the customer. The minimum must be a multiple of the quantity rule's increment.

* origin​Type

  [Quantity​Rule​Origin​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/QuantityRuleOriginType)

  non-null

  Whether the values of the quantity rule were explicitly set.

* product​Variant

  [Product​Variant!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  non-null

  The product variant for which the quantity rule is applied.

***

## Map

### Fields and connections with this object

* [PriceList.quantityRules](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList#field-PriceList.fields.quantityRules)
* [ProductVariantContextualPricing.quantityRule](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantContextualPricing#field-ProductVariantContextualPricing.fields.quantityRule)
* [QuantityRuleConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/QuantityRuleConnection#returns-nodes)
* [QuantityRuleEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRuleEdge#field-QuantityRuleEdge.fields.node)

***

## Mutations

* [quantity​Rules​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityRulesAdd)

  mutation

  Creates or updates existing quantity rules on a price list. You can use the `quantityRulesAdd` mutation to set order level minimums, maximumums and increments for specific product variants.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list to which the quantity rules will be added or updated.

  * quantity​Rules

    [\[Quantity​Rule​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityRuleInput)

    required

    The list of quantity rules to add or update in the price list.

  ***

***

## QuantityRule Mutations

### Mutated by

* [quantity​Rules​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityRulesAdd)
