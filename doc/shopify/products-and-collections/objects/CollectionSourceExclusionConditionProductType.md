---
title: CollectionSourceExclusionConditionProductType - GraphQL Admin
description: A condition based on product types for excluding products from a collection.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusionConditionProductType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusionConditionProductType.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Source​Exclusion​Condition​Product​Type

object

Requires `read_products` access scope.

A condition based on product types for excluding products from a collection.

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

  [Collection​Source​Exclusion​Condition​Product​Type​Relation!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSourceExclusionConditionProductTypeRelation)

  non-null

  The relationship between the product type and the condition values.

* values

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The product type values to match against.

***

## Map

No referencing types

***

## Interfaces

* [Collection​Source​Exclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceExclusionCondition)

  interface

***

## CollectionSourceExclusionConditionProductType Implements

### Implements

* [Collection​Source​Exclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceExclusionCondition)
