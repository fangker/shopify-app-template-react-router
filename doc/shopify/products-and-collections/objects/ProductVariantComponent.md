---
title: ProductVariantComponent - GraphQL Admin
description: |-
  A product variant component that is included within a bundle.

  These are the individual product variants that make up a bundle product,
  where each component has a specific required quantity.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantComponent
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantComponent.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Variant​Component

object

Requires `read_products` access scope or `read_quick_sale` access scope.

A product variant component that is included within a bundle.

These are the individual product variants that make up a bundle product, where each component has a specific required quantity.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* product​Variant

  [Product​Variant!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  non-null

  The product variant associated with the component.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The required quantity of the component.

***

## Map

### Fields and connections with this object

* [ProductVariant.productVariantComponents](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.productVariantComponents)
* [ProductVariantComponentConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantComponentConnection#returns-nodes)
* [ProductVariantComponentEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantComponentEdge#field-ProductVariantComponentEdge.fields.node)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ProductVariantComponent Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
