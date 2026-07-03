---
title: TaxonomyChoiceListAttribute - GraphQL Admin
description: A Shopify product taxonomy choice list attribute.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyChoiceListAttribute
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyChoiceListAttribute.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Taxonomy​Choice​List​Attribute

object

A Shopify product taxonomy choice list attribute.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID of the TaxonomyAttribute.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the product taxonomy attribute. For example, Color.

* values

  [Taxonomy​Value​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyValueConnection)

  non-null

  A list of values on the choice list attribute.

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

  ***

***

## Map

### Possible type in

* [Taxonomy​Category​Attribute](https://shopify.dev/docs/api/admin-graphql/latest/unions/TaxonomyCategoryAttribute)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## TaxonomyChoiceListAttribute Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
