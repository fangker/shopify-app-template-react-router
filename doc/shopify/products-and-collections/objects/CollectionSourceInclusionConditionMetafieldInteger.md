---
title: CollectionSourceInclusionConditionMetafieldInteger - GraphQL Admin
description: >-
  A condition based on integer metafield values for including products in a
  collection.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionMetafieldInteger
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionMetafieldInteger.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Source​Inclusion​Condition​Metafield​Integer

object

Requires `read_products` access scope.

A condition based on integer metafield values for including products in a collection.

## Fields

* definition

  [Metafield​Definition!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  non-null

  The metafield definition to use for the condition.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique identifier for this condition.

* relation

  [Collection​Source​Inclusion​Condition​Metafield​Integer​Relation!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSourceInclusionConditionMetafieldIntegerRelation)

  non-null

  The relationship between the metafield value and the condition value.

* value

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The integer value to match against.

***

## Map

No referencing types

***

## Interfaces

* * [Collection​Source​Inclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceInclusionCondition)

    interface

  * [Collection​Source​Inclusion​Condition​Metafield](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceInclusionConditionMetafield)

    interface

***

## CollectionSourceInclusionConditionMetafieldInteger Implements

### Implements

* [Collection​Source​Inclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceInclusionCondition)
* [Collection​Source​Inclusion​Condition​Metafield](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceInclusionConditionMetafield)
