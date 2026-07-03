---
title: ProductBundleComponentOptionSelectionValue - GraphQL Admin
description: A component option value related to a bundle line.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentOptionSelectionValue
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentOptionSelectionValue.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Bundle​Component​Option​Selection​Value

object

Requires `read_products` access scope.

A component option value related to a bundle line.

## Fields

* selection​Status

  [Product​Bundle​Component​Option​Selection​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductBundleComponentOptionSelectionStatus)

  non-null

  Selection status of the option.

* value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The value of the option.

***

## Map

### Fields with this object

* [ProductBundleComponentOptionSelection.values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentOptionSelection#field-ProductBundleComponentOptionSelection.fields.values)
