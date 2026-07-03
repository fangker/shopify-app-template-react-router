---
title: CollectionSourceInclusion - GraphQL Admin
description: Defines the rules and selections for including products in a collection.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusion
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusion.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Source​Inclusion

object

Requires `read_products` access scope.

Defines the rules and selections for including products in a collection.

## Fields

* conditions

  [\[Collection​Source​Inclusion​Condition!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceInclusionCondition)

  non-null

  The conditions that determine which products are included in the collection.

* match​Type

  [Collection​Condition​Match​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionConditionMatchType)

  Specifies whether products must match any or all conditions. Only relevant when conditions are present.

* selections

  [Collection​Inclusion​Product​Selection​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionInclusionProductSelectionConnection)

  non-null

  The products that have been manually selected for inclusion in the collection.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

## Map

### Fields with this object

* [CollectionConditionsSource.inclusion](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionsSource#field-CollectionConditionsSource.fields.inclusion)
