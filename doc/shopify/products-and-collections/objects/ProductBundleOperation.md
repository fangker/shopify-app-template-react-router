---
title: ProductBundleOperation - GraphQL Admin
description: >-
  An entity that represents details of an asynchronous

  [ProductBundleCreate](/docs/api/admin-graphql/2026-07/mutations/productBundleCreate)
  or

  [ProductBundleUpdate](/docs/api/admin-graphql/2026-07/mutations/productBundleUpdate)
  mutation.


  By querying this entity with the

  [productOperation](/docs/api/admin-graphql/2026-07/queries/productOperation)
  query

  using the ID that was returned when the bundle was created or updated, this
  can be used to check the status of an operation.


  The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or
  `COMPLETE`.


  The `product` field provides the details of the created or updated product.


  The `userErrors` field provides mutation errors that occurred during the
  operation.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleOperation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleOperation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Bundle​Operation

object

Requires `read_products` access scope.

An entity that represents details of an asynchronous [ProductBundleCreate](https://shopify.dev/docs/api/admin-graphql/2026-07/mutations/productBundleCreate) or [ProductBundleUpdate](https://shopify.dev/docs/api/admin-graphql/2026-07/mutations/productBundleUpdate) mutation.

By querying this entity with the [productOperation](https://shopify.dev/docs/api/admin-graphql/2026-07/queries/productOperation) query using the ID that was returned when the bundle was created or updated, this can be used to check the status of an operation.

The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or `COMPLETE`.

The `product` field provides the details of the created or updated product.

The `userErrors` field provides mutation errors that occurred during the operation.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product on which the operation is being performed.

* status

  [Product​Operation​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOperationStatus)

  non-null

  The status of this operation.

* user​Errors

  [\[Product​Bundle​Mutation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleMutationUserError)

  non-null

  Returns mutation errors occurred during background mutation processing.

***

## Map

No referencing types

***

## Mutations

* [product​Bundle​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleCreate)

  mutation

  Creates a product bundle that groups multiple [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects together as components. The bundle appears as a single product in the store, with its price determined by the parent product and inventory calculated from the component products.

  The mutation runs asynchronously and returns a [`ProductBundleOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleOperation) object to track the creation status. Poll the operation using the [`productOperation`](https://shopify.dev/docs/api/admin-graphql/latest/queries/productOperation) query to determine when the bundle is ready.

  Learn more about [creating product fixed bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-product-fixed-bundle#step-1-create-a-bundle).

  * input

    [Product​Bundle​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleCreateInput)

    required

    ### Arguments

    Input for creating a product bundle or componentized product.

  ***

* [product​Bundle​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleUpdate)

  mutation

  Updates a product bundle or componentized product.

  * input

    [Product​Bundle​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleUpdateInput)

    required

    ### Arguments

    Input for updating a product bundle or componentized product.

  ***

***

## ProductBundleOperation Mutations

### Mutated by

* [product​Bundle​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleCreate)
* [product​Bundle​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleUpdate)

***

## Interfaces

* * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

  * [Product​Operation](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ProductOperation)

    interface

***

## ProductBundleOperation Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
* [Product​Operation](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ProductOperation)
