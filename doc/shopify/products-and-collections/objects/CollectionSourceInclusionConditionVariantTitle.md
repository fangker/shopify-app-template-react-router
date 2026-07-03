---
title: CollectionSourceInclusionConditionVariantTitle - GraphQL Admin
description: A condition based on variant titles for including products in a collection.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionVariantTitle
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionVariantTitle.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Source​Inclusion​Condition​Variant​Title

object

Requires `read_products` access scope.

A condition based on variant titles for including products in a collection.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique identifier for this condition.

* match​Type

  [Collection​Condition​Match​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionConditionMatchType)

  non-null

  Determines how many values a metafield must match against in order to satisfy this condition. Will be either at least one given value, or all of the given values.

* relation

  [Collection​Source​Inclusion​Condition​Variant​Title​Relation!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSourceInclusionConditionVariantTitleRelation)

  non-null

  The relationship between the variant title and the condition values.

* values

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The variant title values to match against.

***

## Map

No referencing types

***

## Interfaces

* [Collection​Source​Inclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceInclusionCondition)

  interface

***

## CollectionSourceInclusionConditionVariantTitle Implements

### Implements

* [Collection​Source​Inclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceInclusionCondition)
