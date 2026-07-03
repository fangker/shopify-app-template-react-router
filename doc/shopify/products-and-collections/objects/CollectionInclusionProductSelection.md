---
title: CollectionInclusionProductSelection - GraphQL Admin
description: >-
  Represents a product that has been manually selected for inclusion in a
  collection.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionInclusionProductSelection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionInclusionProductSelection.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Inclusion​Product​Selection

object

Requires `read_products` access scope.

Represents a product that has been manually selected for inclusion in a collection.

## Fields

* product

  [Product!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  non-null

  The product that's manually included in the collection.

* variant​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The IDs of variants of this product that have been manually included in the collection. Null when no variant-level manual selections exist for this product; non-empty when one or more variants have been manually included.

***

## Map

### Fields and connections with this object

* [CollectionInclusionProductSelectionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionInclusionProductSelectionConnection#returns-nodes)
* [CollectionInclusionProductSelectionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionInclusionProductSelectionEdge#field-CollectionInclusionProductSelectionEdge.fields.node)
* [CollectionSourceInclusion.selections](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusion#field-CollectionSourceInclusion.fields.selections)
