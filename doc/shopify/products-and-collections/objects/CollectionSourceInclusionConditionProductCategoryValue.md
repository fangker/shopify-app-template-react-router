---
title: CollectionSourceInclusionConditionProductCategoryValue - GraphQL Admin
description: A value for a product category condition.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionProductCategoryValue
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionProductCategoryValue.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Source​Inclusion​Condition​Product​Category​Value

object

Requires `read_products` access scope.

A value for a product category condition.

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

* [CollectionSourceInclusionConditionProductCategory.values](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionProductCategory#field-CollectionSourceInclusionConditionProductCategory.fields.values)
