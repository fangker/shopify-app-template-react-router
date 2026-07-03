---
title: CollectionSourceExclusionConditionProductTag - GraphQL Admin
description: A condition based on product tags for excluding products from a collection.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusionConditionProductTag
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusionConditionProductTag.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Source​Exclusion​Condition​Product​Tag

object

Requires `read_products` access scope.

A condition based on product tags for excluding products from a collection.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique identifier for this exclusion condition.

* match​Type

  [Collection​Condition​Match​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionConditionMatchType)

  non-null

  Determines how many values a metafield must match against in order to satisfy this condition. Will be either at least one given value, or all of the given values.

* relation

  [Collection​Source​Exclusion​Condition​Product​Tag​Relation!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSourceExclusionConditionProductTagRelation)

  non-null

  The relationship between the product tag and the condition values.

* values

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The tag values to match against.

***

## Map

No referencing types

***

## Interfaces

* [Collection​Source​Exclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceExclusionCondition)

  interface

***

## CollectionSourceExclusionConditionProductTag Implements

### Implements

* [Collection​Source​Exclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceExclusionCondition)
