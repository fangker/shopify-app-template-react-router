---
title: CombinedListingChild - GraphQL Admin
description: A child of a combined listing.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingChild
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingChild.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Combined​Listing​Child

object

Requires `read_products` access scope.

A child of a combined listing.

## Fields

* parent​Variant

  [Product​Variant!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  non-null

  The parent variant.

* product

  [Product!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  non-null

  The child product.

***

## Map

### Fields and connections with this object

* [CombinedListing.combinedListingChildren](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListing#field-CombinedListing.fields.combinedListingChildren)
* [CombinedListingChildConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CombinedListingChildConnection#returns-nodes)
* [CombinedListingChildEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingChildEdge#field-CombinedListingChildEdge.fields.node)
