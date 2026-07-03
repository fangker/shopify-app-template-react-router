---
title: CollectionSourceExclusionConditionCollection - GraphQL Admin
description: A condition based on collections for excluding products from a collection.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusionConditionCollection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusionConditionCollection.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Source​Exclusion​Condition​Collection

object

Requires `read_products` access scope.

A condition based on collections for excluding products from a collection.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique identifier for this exclusion condition.

* match​Type

  [Collection​Condition​Match​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionConditionMatchType)

  non-null

  Collection exclusion conditions always match any referenced collection.

* values

  [\[Collection!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  non-null

  The collection values whose products are excluded.

***

## Map

No referencing types

***

## Interfaces

* [Collection​Source​Exclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceExclusionCondition)

  interface

***

## CollectionSourceExclusionConditionCollection Implements

### Implements

* [Collection​Source​Exclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceExclusionCondition)
