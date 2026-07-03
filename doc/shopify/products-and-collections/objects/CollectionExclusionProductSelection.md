---
title: CollectionExclusionProductSelection - GraphQL Admin
description: >-
  Represents a product that has been manually selected for exclusion from a
  collection.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionExclusionProductSelection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionExclusionProductSelection.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Exclusion​Product​Selection

object

Requires `read_products` access scope.

Represents a product that has been manually selected for exclusion from a collection.

## Fields

* product

  [Product!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  non-null

  The product that's manually excluded from the collection.

***

## Map

### Fields and connections with this object

* [CollectionExclusionProductSelectionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionExclusionProductSelectionConnection#returns-nodes)
* [CollectionExclusionProductSelectionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionExclusionProductSelectionEdge#field-CollectionExclusionProductSelectionEdge.fields.node)
* [CollectionSourceExclusion.selections](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceExclusion#field-CollectionSourceExclusion.fields.selections)
