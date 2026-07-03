---
title: MetafieldDefinitionConstraints - GraphQL Admin
description: >-
  The
  [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions)

  that determine what subtypes of resources a metafield definition applies to.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionConstraints
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionConstraints.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Metafield​Definition​Constraints

object

The [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions) that determine what subtypes of resources a metafield definition applies to.

## Fields

* key

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The category of resource subtypes that the definition applies to.

* values

  [Metafield​Definition​Constraint​Value​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConstraintValueConnection)

  non-null

  The specific constraint subtype values that the definition applies to.

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

* [MetafieldDefinition.constraints](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.constraints)
