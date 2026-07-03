---
title: PriceRuleDiscountCode - GraphQL Admin
description: A discount code of a price rule.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleDiscountCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleDiscountCode.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Price​Rule​Discount​Code

object

Requires `read_price_rules` access scope.

A discount code of a price rule.

## Fields

* app

  [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  The application that created the discount code.

* code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The code to apply the discount.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* usage​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of times that the price rule has been used. This value is updated asynchronously and can be different than the actual usage count.

***

## Map

### Fields and connections with this object

* [PriceRule.discountCodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.discountCodes)
* [PriceRuleDiscountCodeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceRuleDiscountCodeConnection#returns-nodes)
* [PriceRuleDiscountCodeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleDiscountCodeEdge#field-PriceRuleDiscountCodeEdge.fields.node)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## PriceRuleDiscountCode Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
