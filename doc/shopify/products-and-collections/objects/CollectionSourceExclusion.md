---
title: CollectionSourceExclusion - GraphQL Admin
description: Defines the rules and selections for excluding products from a collection.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusion
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusion.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Source​Exclusion

object

Requires `read_products` access scope.

Defines the rules and selections for excluding products from a collection.

## Fields

* conditions

  [\[Collection​Source​Exclusion​Condition!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceExclusionCondition)

  non-null

  The conditions that determine which products are excluded from the collection.

* match​Type

  [Collection​Condition​Match​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionConditionMatchType)

  Specifies whether products must match any or all non-collection exclusion conditions. Collection exclusion conditions are always applied independently with ANY semantics, so this field returns ANY for collection-only exclusions and null when collection and non-collection exclusion conditions are mixed.

* selections

  [Collection​Exclusion​Product​Selection​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionExclusionProductSelectionConnection)

  non-null

  The products that have been manually selected for exclusion from the collection.

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

* [CollectionConditionsSource.exclusion](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionsSource#field-CollectionConditionsSource.fields.exclusion)
