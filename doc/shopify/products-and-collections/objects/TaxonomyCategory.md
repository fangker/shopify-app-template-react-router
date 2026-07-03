---
title: TaxonomyCategory - GraphQL Admin
description: >-
  A product category within Shopify's [standardized product
  taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17).

  Provides hierarchical organization through parent-child relationships, with
  each

  category tracking its ancestors, children, and level in the taxonomy tree.


  Categories include attributes specific to their product type and navigation

  properties like whether they're root, leaf, or archived categories. The
  taxonomy

  enables consistent product classification across Shopify and integrated
  marketplaces.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategory'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategory.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Taxonomy​Category

object

A product category within Shopify's [standardized product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17). Provides hierarchical organization through parent-child relationships, with each category tracking its ancestors, children, and level in the taxonomy tree.

Categories include attributes specific to their product type and navigation properties like whether they're root, leaf, or archived categories. The taxonomy enables consistent product classification across Shopify and integrated marketplaces.

## Fields

* ancestor​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The IDs of the category's ancestor categories.

* attributes

  [Taxonomy​Category​Attribute​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryAttributeConnection)

  non-null

  The attributes of the taxonomy category.

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

* children​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The IDs of the category's child categories.

* full​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The full name of the taxonomy category. For example, Animals & Pet Supplies > Pet Supplies > Dog Supplies > Dog Beds.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The globally-unique ID of the TaxonomyCategory.

* is​Archived

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the category is archived. The default value is `false`.

* is​Leaf

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the category is a leaf category. A leaf category doesn't have any subcategories beneath it. For example, in Animals & Pet Supplies > Pet Supplies > Dog Supplies > Dog Treadmills, Dog Treadmills is a leaf category. The value is `true` when there are no `childrenIds` specified.

* is​Root

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the category is a root category. A root category is at the top level of the category hierarchy and doesn't have a parent category. For example, Animals & Pet Supplies. The value is `true` when there's no `parentId` specified.

* level

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The level of the category in the taxonomy tree. Levels indicate the depth of the category from the root. For example, in Animals & Pet Supplies > Pet Supplies > Dog Supplies, Animals & Pet Supplies is at level 1, Animals & Pet Supplies > Pet Supplies is at level 2, and Animals & Pet Supplies > Pet Supplies > Dog Supplies is at level 3.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the taxonomy category. For example, Dog Beds.

* parent​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the category's parent category.

***

## Map

### Fields and connections with this object

* [CollectionRuleCategoryCondition.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleCategoryCondition#field-CollectionRuleCategoryCondition.fields.value)
* [CollectionSourceExclusionConditionProductCategoryValue.category](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusionConditionProductCategoryValue#field-CollectionSourceExclusionConditionProductCategoryValue.fields.category)
* [CollectionSourceInclusionConditionProductCategoryValue.category](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionProductCategoryValue#field-CollectionSourceInclusionConditionProductCategoryValue.fields.category)
* [Product.category](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.category)
* [Shop.allProductCategoriesList](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.allProductCategoriesList)
* [Taxonomy.categories](https://shopify.dev/docs/api/admin-graphql/latest/objects/Taxonomy#field-Taxonomy.fields.categories)
* [TaxonomyCategoryConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryConnection#returns-nodes)
* [TaxonomyCategoryEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategoryEdge#field-TaxonomyCategoryEdge.fields.node)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## TaxonomyCategory Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
