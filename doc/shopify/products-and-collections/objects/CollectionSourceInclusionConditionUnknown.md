---
title: CollectionSourceInclusionConditionUnknown - GraphQL Admin
description: >-
  An inclusion condition introduced in a newer API version that is not modeled
  by

  this version of the API. Clients should treat the relation and values as
  opaque strings.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionUnknown
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionUnknown.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Source​Inclusion​Condition​Unknown

object

Requires `read_products` access scope.

An inclusion condition introduced in a newer API version that is not modeled by this version of the API. Clients should treat the relation and values as opaque strings.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique identifier for this condition.

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

* [Collection​Source​Inclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceInclusionCondition)

  interface

***

## CollectionSourceInclusionConditionUnknown Implements

### Implements

* [Collection​Source​Inclusion​Condition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceInclusionCondition)
