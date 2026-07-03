---
title: CombinedListing - GraphQL Admin
description: A combined listing of products.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListing'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListing.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Combined​Listing

object

Requires `read_products` access scope.

A combined listing of products.

## Fields

* combined​Listing​Children

  [Combined​Listing​Child​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CombinedListingChildConnection)

  non-null

  A list of child products in the combined listing.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* parent​Product

  [Product!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  non-null

  The parent product.

***

## Map

### Fields with this object

* [Product.combinedListing](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.combinedListing)
