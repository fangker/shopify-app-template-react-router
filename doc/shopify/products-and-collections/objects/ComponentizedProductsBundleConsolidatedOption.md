---
title: ComponentizedProductsBundleConsolidatedOption - GraphQL Admin
description: >-
  An option on the bundle parent product that is consolidated from multiple
  different components.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ComponentizedProductsBundleConsolidatedOption
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ComponentizedProductsBundleConsolidatedOption.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Componentized​Products​Bundle​Consolidated​Option

object

Requires `read_products` access scope.

An option on the bundle parent product that is consolidated from multiple different components.

## Fields

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the consolidated option.

* selections

  [\[Componentized​Products​Bundle​Consolidated​Option​Selection!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ComponentizedProductsBundleConsolidatedOptionSelection)

  non-null

  The selections of the consolidated option.

***

## Map

### Fields with this object

* [Product.bundleConsolidatedOptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.bundleConsolidatedOptions)
