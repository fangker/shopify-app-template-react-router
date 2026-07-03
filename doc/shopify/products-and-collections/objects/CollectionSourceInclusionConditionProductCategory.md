---
title: CollectionSourceInclusionConditionProductCategory - GraphQL Admin
description: >-
  A condition based on product category IDs for including products in a
  collection.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionProductCategory
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionProductCategory.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Source​Inclusion​Condition​Product​Category

object

Requires `read_products` access scope.

A condition based on product category IDs for including products in a collection.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique identifier for this condition.

* match​Type

  [Collection​Condition​Match​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionConditionMatchType)

  non-null

  Specifies whether products must match any or all values.

* relation

  [Collection​Source​Inclusion​Condition​Product​Category​Relation!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSourceInclusionConditionProductCategoryRelation)

  non-null

  The relationship between the product category ID and the condition values.

* values

  [\[Collection​Source​Inclusion​Condition​Product​Category​Value!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionProductCategoryValue)

  non-null

  The product category values to match against.

***

## Map

No referencing types

***

## Interfaces

* [Collection​Source​Inclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceInclusionCondition)

  interface

***

## CollectionSourceInclusionConditionProductCategory Implements

### Implements

* [Collection​Source​Inclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceInclusionCondition)
