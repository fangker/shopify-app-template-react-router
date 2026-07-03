---
title: CollectionSourceExclusionConditionProductCategoryValue - GraphQL Admin
description: A value for a product category exclusion condition.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusionConditionProductCategoryValue
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusionConditionProductCategoryValue.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Source​Exclusion​Condition​Product​Category​Value

object

Requires `read_products` access scope.

A value for a product category exclusion condition.

## Fields

* category

  [Taxonomy​Category!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategory)

  non-null

  The product category to match against.

* include​Descendants

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether to include descendants of the product category.

***

## Map

### Fields with this object

* [CollectionSourceExclusionConditionProductCategory.values](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusionConditionProductCategory#field-CollectionSourceExclusionConditionProductCategory.fields.values)
