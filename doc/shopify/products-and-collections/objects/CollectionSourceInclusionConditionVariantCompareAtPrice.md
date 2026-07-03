---
title: CollectionSourceInclusionConditionVariantCompareAtPrice - GraphQL Admin
description: >-
  A condition based on variant compare at prices for including products in a
  collection.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionVariantCompareAtPrice
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionVariantCompareAtPrice.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Source​Inclusion​Condition​Variant​Compare​At​Price

object

Requires `read_products` access scope.

A condition based on variant compare at prices for including products in a collection.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique identifier for this condition.

* relation

  [Collection​Source​Inclusion​Condition​Variant​Compare​At​Price​Relation!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSourceInclusionConditionVariantCompareAtPriceRelation)

  non-null

  The relationship between the variant compare at price and the condition values.

* value

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The variant compare at price to match against. Null when the relation is IS\_SET or IS\_NOT\_SET.

***

## Map

No referencing types

***

## Interfaces

* [Collection​Source​Inclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceInclusionCondition)

  interface

***

## CollectionSourceInclusionConditionVariantCompareAtPrice Implements

### Implements

* [Collection​Source​Inclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceInclusionCondition)
