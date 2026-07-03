---
title: ProductComponentType - GraphQL Admin
description: The product component information.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentType.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Component​Type

object

Requires `read_products` access scope.

The product component information.

## Fields

* component​Variants

  [Product​Variant​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection)

  non-null

  The list of products' variants that are components.

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

* component​Variants​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of component variants for the product component.

* non​Component​Variants

  [Product​Variant​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection)

  non-null

  The list of products' variants that are not components.

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

* non​Component​Variants​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of non\_components variants for the product component.

* product

  [Product!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  non-null

  The product that's a component.

***

## Map

### Fields and connections with this object

* [Product.productComponents](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.productComponents)
* [ProductComponentTypeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductComponentTypeConnection#returns-nodes)
* [ProductComponentTypeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentTypeEdge#field-ProductComponentTypeEdge.fields.node)
