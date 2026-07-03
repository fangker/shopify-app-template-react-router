---
title: CollectionSourceExclusionConditionProductCategory - GraphQL Admin
description: >-
  A condition based on product category IDs for excluding products from a
  collection.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusionConditionProductCategory
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusionConditionProductCategory.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Source​Exclusion​Condition​Product​Category

object

Requires `read_products` access scope.

A condition based on product category IDs for excluding products from a collection.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique identifier for this exclusion condition.

* match​Type

  [Collection​Condition​Match​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionConditionMatchType)

  non-null

  Specifies whether products must match any or all values.

* relation

  [Collection​Source​Exclusion​Condition​Product​Category​Relation!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSourceExclusionConditionProductCategoryRelation)

  non-null

  The relationship between the product category ID and the condition values.

* values

  [\[Collection​Source​Exclusion​Condition​Product​Category​Value!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusionConditionProductCategoryValue)

  non-null

  The product category values to match against.

***

## Map

No referencing types

***

## Interfaces

* [Collection​Source​Exclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceExclusionCondition)

  interface

***

## CollectionSourceExclusionConditionProductCategory Implements

### Implements

* [Collection​Source​Exclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceExclusionCondition)
