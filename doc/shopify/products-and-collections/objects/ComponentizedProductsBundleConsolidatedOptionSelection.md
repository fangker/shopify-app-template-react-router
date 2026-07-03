---
title: ComponentizedProductsBundleConsolidatedOptionSelection - GraphQL Admin
description: An option selection for a bundle consolidated option.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ComponentizedProductsBundleConsolidatedOptionSelection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ComponentizedProductsBundleConsolidatedOptionSelection.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Componentized​Products​Bundle​Consolidated​Option​Selection

object

Requires `read_products` access scope.

An option selection for a bundle consolidated option.

## Fields

* components

  [\[Componentized​Products​Bundle​Consolidated​Option​Selection​Component!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ComponentizedProductsBundleConsolidatedOptionSelectionComponent)

  non-null

  The component values that are included in the consolidated option selection.

* value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The value of the consolidated option on the bundle parent.

***

## Map

### Fields with this object

* [ComponentizedProductsBundleConsolidatedOption.selections](https://shopify.dev/docs/api/admin-graphql/latest/objects/ComponentizedProductsBundleConsolidatedOption#field-ComponentizedProductsBundleConsolidatedOption.fields.selections)
