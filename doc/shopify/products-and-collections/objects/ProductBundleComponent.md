---
title: ProductBundleComponent - GraphQL Admin
description: The product's component information.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponent
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponent.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Bundle​Component

object

Requires `read_products` access scope.

The product's component information.

## Fields

* component​Product

  [Product!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  non-null

  The product that's related as a component.

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

* option​Selections

  [\[Product​Bundle​Component​Option​Selection!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentOptionSelection)

  non-null

  The options in the parent and the component options they're connected to, along with the chosen option values that appear in the bundle.

* quantity

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The quantity of the component product set for this bundle line. It will be null if there's a quantityOption present.

* quantity​Option

  [Product​Bundle​Component​Quantity​Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentQuantityOption)

  The quantity as option of the component product. It will be null if there's a quantity set.

***

## Map

### Fields and connections with this object

* [Product.bundleComponents](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.bundleComponents)
* [ProductBundleComponentConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductBundleComponentConnection#returns-nodes)
* [ProductBundleComponentEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentEdge#field-ProductBundleComponentEdge.fields.node)
