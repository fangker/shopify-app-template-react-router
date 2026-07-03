---
title: CollectionSourceInclusionConditionMetafieldString - GraphQL Admin
description: >-
  A condition based on string metafield values for including products in a
  collection.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionMetafieldString
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionMetafieldString.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Source​Inclusion​Condition​Metafield​String

object

Requires `read_products` access scope.

A condition based on string metafield values for including products in a collection.

## Fields

* definition

  [Metafield​Definition!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  non-null

  The metafield definition to use for the condition.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique identifier for this condition.

* match​Type

  [Collection​Condition​Match​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionConditionMatchType)

  non-null

  Determines how many values a metafield must match against in order to satisfy this condition. Will be either at least one given value, or all of the given values.

* relation

  [Collection​Source​Inclusion​Condition​Metafield​String​Relation!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSourceInclusionConditionMetafieldStringRelation)

  non-null

  The relationship between the metafield value and the condition values.

* values

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The string values to match against.

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

## CollectionSourceInclusionConditionMetafieldString Implements

### Implements

* [Collection​Source​Inclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceInclusionCondition)
* [Collection​Source​Inclusion​Condition​Metafield](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceInclusionConditionMetafield)
