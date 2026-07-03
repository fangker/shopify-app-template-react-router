---
title: CollectionRuleMetafieldCondition - GraphQL Admin
description: Identifies a metafield definition used as a rule for the collection.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleMetafieldCondition
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleMetafieldCondition.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Rule​Metafield​Condition

object

Requires `read_products` access scope.

Identifies a metafield definition used as a rule for the collection.

## Fields

* metafield​Definition

  [Metafield​Definition!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  non-null

  The metafield definition associated with the condition.

***

## Map

### Possible type in

* [Collection​Rule​Condition​Object](https://shopify.dev/docs/api/admin-graphql/latest/unions/CollectionRuleConditionObject)
* [Collection​Rule​Conditions​Rule​Object](https://shopify.dev/docs/api/admin-graphql/latest/unions/CollectionRuleConditionsRuleObject)
