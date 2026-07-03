---
title: ProductBundleComponentQuantityOption - GraphQL Admin
description: A quantity option related to a bundle.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentQuantityOption
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentQuantityOption.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Bundle​Component​Quantity​Option

object

Requires `read_products` access scope.

A quantity option related to a bundle.

## Fields

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the option value.

* parent​Option

  [Product​Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption)

  The option that was created on the parent product.

* values

  [\[Product​Bundle​Component​Quantity​Option​Value!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentQuantityOptionValue)

  non-null

  The quantity values of the option.

***

## Map

### Fields with this object

* [ProductBundleComponent.quantityOption](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponent#field-ProductBundleComponent.fields.quantityOption)
