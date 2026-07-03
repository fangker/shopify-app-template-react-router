---
title: ProductTaxonomyNode - GraphQL Admin
description: >-
  Represents a [Shopify product
  taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17)
  node.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductTaxonomyNode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductTaxonomyNode.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Taxonomy​Node

object

Represents a [Shopify product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17) node.

## Fields

* full​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The full name of the product taxonomy node. For example, Animals & Pet Supplies > Pet Supplies > Dog Supplies > Dog Beds.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the product taxonomy node.

* is​Leaf

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the node is a leaf node.

* is​Root

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the node is a root node.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the product taxonomy node. For example, Dog Beds.

***

## Map

### Fields with this object

* [CollectionRuleProductCategoryCondition.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleProductCategoryCondition#field-CollectionRuleProductCategoryCondition.fields.value)
* [ProductCategory.productTaxonomyNode](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductCategory#field-ProductCategory.fields.productTaxonomyNode)
* [StandardizedProductType.productTaxonomyNode](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardizedProductType#field-StandardizedProductType.fields.productTaxonomyNode)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ProductTaxonomyNode Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
