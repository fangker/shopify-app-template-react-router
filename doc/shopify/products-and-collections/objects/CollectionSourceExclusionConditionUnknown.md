---
title: CollectionSourceExclusionConditionUnknown - GraphQL Admin
description: >-
  An exclusion condition introduced in a newer API version that is not modeled
  by

  this version of the API. Clients should treat the relation and values as
  opaque strings.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusionConditionUnknown
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusionConditionUnknown.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Source​Exclusion​Condition​Unknown

object

Requires `read_products` access scope.

An exclusion condition introduced in a newer API version that is not modeled by this version of the API. Clients should treat the relation and values as opaque strings.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique identifier for this exclusion condition.

* match​Type

  [Collection​Condition​Match​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionConditionMatchType)

  Whether products must match any or all values. Null when the condition has no concept of a match type.

* relation

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The relation, as a raw string. Nullable and not coerced into an enum because the set of possible relations is open-ended for unknown condition types, and some future conditions may not have a relation at all.

* values

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The condition values, as raw strings. Nullable because some future condition types may have no values at all.

***

## Map

No referencing types

***

## Interfaces

* [Collection​Source​Exclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceExclusionCondition)

  interface

***

## CollectionSourceExclusionConditionUnknown Implements

### Implements

* [Collection​Source​Exclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceExclusionCondition)
