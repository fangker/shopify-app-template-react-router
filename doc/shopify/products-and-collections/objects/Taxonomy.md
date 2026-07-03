---
title: Taxonomy - GraphQL Admin
description: >-
  Represents Shopify's [standardized product
  taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17)

  tree. Provides categories that you can filter by search criteria or
  hierarchical relationships.


  You can search categories globally, retrieve children of a specific category,

  find siblings, or get descendants. When you specify no filter arguments, you
  get

  all top-level categories in the taxonomy.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Taxonomy'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Taxonomy.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Taxonomy

object

Represents Shopify's [standardized product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17) tree. Provides categories that you can filter by search criteria or hierarchical relationships.

You can search categories globally, retrieve children of a specific category, find siblings, or get descendants. When you specify no filter arguments, you get all top-level categories in the taxonomy.

## Fields

* categories

  [Taxonomy​Category​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryConnection)

  non-null

  Returns the categories of the product taxonomy based on the arguments provided. If a `search` argument is provided, then all categories that match the search query globally are returned. If a `children_of` argument is provided, then all children of the specified category are returned. If a `siblings_of` argument is provided, then all siblings of the specified category are returned. If a `decendents_of` argument is provided, then all descendents of the specified category are returned. If no arguments are provided, then all the top-level categories of the taxonomy are returned.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * children​Of

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the category associated with the child categories to return.

  * descendants​Of

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the category associated with the descendant categories to return.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Searches the product taxonomy for matching categories.

  * siblings​Of

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the category associated with the sibling categories to return.

  ***

***

## Map

No referencing types

***

## Queries

* [taxonomy](https://shopify.dev/docs/api/admin-graphql/latest/queries/taxonomy)

  query

  Access to Shopify's [standardized product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17) for categorizing products. The [`Taxonomy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Taxonomy) organizes products into a hierarchical tree structure with categories, attributes, and values.

  Query categories using search terms, or navigate the hierarchy by requesting children, siblings, or descendants of specific categories. Each [`TaxonomyCategory`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategory) includes its position in the tree, parent-child relationships, and associated attributes for that product category.

***

## Taxonomy Queries

### Queried by

* [taxonomy](https://shopify.dev/docs/api/admin-graphql/latest/queries/taxonomy)
