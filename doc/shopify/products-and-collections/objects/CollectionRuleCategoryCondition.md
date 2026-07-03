---
title: CollectionRuleCategoryCondition - GraphQL Admin
description: Specifies the taxonomy category to used for the condition.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleCategoryCondition
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleCategoryCondition.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Rule​Category​Condition

object

Requires `read_products` access scope.

Specifies the taxonomy category to used for the condition.

## Fields

* value

  [Taxonomy​Category!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategory)

  non-null

  The taxonomy category used as condition.

***

## Map

### Possible type in

* [Collection​Rule​Condition​Object](https://shopify.dev/docs/api/admin-graphql/latest/unions/CollectionRuleConditionObject)
