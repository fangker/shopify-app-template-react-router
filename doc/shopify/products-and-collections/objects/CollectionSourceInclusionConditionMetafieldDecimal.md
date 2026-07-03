---
title: CollectionSourceInclusionConditionMetafieldDecimal - GraphQL Admin
description: >-
  A condition based on decimal metafield values for including products in a
  collection.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionMetafieldDecimal
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionMetafieldDecimal.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Source​Inclusion​Condition​Metafield​Decimal

object

Requires `read_products` access scope.

A condition based on decimal metafield values for including products in a collection.

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

  [Collection​Source​Inclusion​Condition​Metafield​Decimal​Relation!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSourceInclusionConditionMetafieldDecimalRelation)

  non-null

  The relationship between the metafield value and the condition value.

* value

  [Decimal!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  non-null

  The decimal value to match against.

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

## CollectionSourceInclusionConditionMetafieldDecimal Implements

### Implements

* [Collection​Source​Inclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceInclusionCondition)
* [Collection​Source​Inclusion​Condition​Metafield](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceInclusionConditionMetafield)
