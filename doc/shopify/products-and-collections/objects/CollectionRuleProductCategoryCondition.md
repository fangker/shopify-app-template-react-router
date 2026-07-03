---
title: CollectionRuleProductCategoryCondition - GraphQL Admin
description: Specifies the condition for a Product Category field.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleProductCategoryCondition
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleProductCategoryCondition.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Rule​Product​Category​Condition

object

Requires `read_products` access scope.

Specifies the condition for a Product Category field.

## Fields

* value

  [Product​Taxonomy​Node!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductTaxonomyNode)

  non-null

  The value of the condition.

***

## Map

### Possible type in

* [Collection​Rule​Condition​Object](https://shopify.dev/docs/api/admin-graphql/latest/unions/CollectionRuleConditionObject)
