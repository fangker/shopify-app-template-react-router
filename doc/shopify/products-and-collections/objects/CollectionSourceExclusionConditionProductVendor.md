---
title: CollectionSourceExclusionConditionProductVendor - GraphQL Admin
description: A condition based on product vendors for excluding products from a collection.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusionConditionProductVendor
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusionConditionProductVendor.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Source​Exclusion​Condition​Product​Vendor

object

Requires `read_products` access scope.

A condition based on product vendors for excluding products from a collection.

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

  [Collection​Source​Exclusion​Condition​Product​Vendor​Relation!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSourceExclusionConditionProductVendorRelation)

  non-null

  The relationship between the product vendor and the condition values.

* values

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The product vendor values to match against.

***

## Map

No referencing types

***

## Interfaces

* [Collection​Source​Exclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceExclusionCondition)

  interface

***

## CollectionSourceExclusionConditionProductVendor Implements

### Implements

* [Collection​Source​Exclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceExclusionCondition)
