---
title: ProductOption - GraphQL Admin
description: >-
  A product attribute that customers can choose from, such as "Size", "Color",
  or "Material".

  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  objects use options to define the different variations available for purchase.

  Each option has a name and a set of possible values that combine to create
  [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)
  objects.


  The option includes its display position, associated values, and optional
  [`LinkedMetafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LinkedMetafield)

  for structured data. Options support translations for international selling
  and track which
  [`ProductOptionValue`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue)

  objects that variants actively use versus unused values that exist without

  associated variants.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Option

object

Requires `read_products` access scope.

A product attribute that customers can choose from, such as "Size", "Color", or "Material". [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects use options to define the different variations available for purchase. Each option has a name and a set of possible values that combine to create [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.

The option includes its display position, associated values, and optional [`LinkedMetafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LinkedMetafield) for structured data. Options support translations for international selling and track which [`ProductOptionValue`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue) objects that variants actively use versus unused values that exist without associated variants.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* linked​Metafield

  [Linked​Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/LinkedMetafield)

  The metafield identifier linked to this option.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The product option’s name.

* option​Values

  [\[Product​Option​Value!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue)

  non-null

  Similar to values, option\_values returns all the corresponding option value objects to the product option, including values not assigned to any variants.

* position

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The product option's position.

* translations

  [\[Translation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

  non-null

  The published translations associated with the resource.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Filters translations locale.

  * market​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Filters translations by market ID. Use this argument to retrieve content specific to a market.

  ***

* values

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The corresponding value to the product option name.

***

## Map

### Fields with this object

* [Product.options](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.options)
* [ProductBundleComponentOptionSelection.componentOption](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentOptionSelection#field-ProductBundleComponentOptionSelection.fields.componentOption)
* [ProductBundleComponentOptionSelection.parentOption](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentOptionSelection#field-ProductBundleComponentOptionSelection.fields.parentOption)
* [ProductBundleComponentQuantityOption.parentOption](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentQuantityOption#field-ProductBundleComponentQuantityOption.fields.parentOption)

***

## Interfaces

* * [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## ProductOption Implements

### Implements

* [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
