---
title: ProductOptionValue - GraphQL Admin
description: >-
  A specific value for a
  [`ProductOption`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption),

  such as "Red" or "Blue" for a "Color" option. Each value can be assigned to
  [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  objects to create different versions of a

  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product).


  The value tracks whether any variants currently use it through the
  [`hasVariants`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue#field-hasVariants)

  field. Values can include visual representations through swatches that display

  colors or images. When linked to a
  [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield),
  the
  [`linkedMetafieldValue`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue#field-linkedMetafieldValue)

  provides additional structured data for the option value.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Option​Value

object

Requires `read_products` access scope.

A specific value for a [`ProductOption`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as "Red" or "Blue" for a "Color" option. Each value can be assigned to [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects to create different versions of a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product).

The value tracks whether any variants currently use it through the [`hasVariants`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue#field-hasVariants) field. Values can include visual representations through swatches that display colors or images. When linked to a [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield), the [`linkedMetafieldValue`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue#field-linkedMetafieldValue) provides additional structured data for the option value.

## Fields

* has​Variants

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the product option value has any linked variants.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* linked​Metafield​Value

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The value of the linked metafield.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the product option value.

* swatch

  [Product​Option​Value​Swatch](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValueSwatch)

  The swatch associated with the product option value.

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

***

## Map

### Fields with this object

* [ProductOption.optionValues](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption#field-ProductOption.fields.optionValues)
* [SelectedOption.optionValue](https://shopify.dev/docs/api/admin-graphql/latest/objects/SelectedOption#field-SelectedOption.fields.optionValue)

***

## Interfaces

* * [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## ProductOptionValue Implements

### Implements

* [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
