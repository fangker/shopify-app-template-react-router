---
title: ProductDuplicateOperation - GraphQL Admin
description: >-
  An entity that represents details of an asynchronous

  [ProductDuplicate](/docs/api/admin-graphql/2026-07/mutations/productDuplicate)
  mutation.


  By querying this entity with the

  [productOperation](/docs/api/admin-graphql/2026-07/queries/productOperation)
  query

  using the ID that was returned

  [when the product was
  duplicated](https://shopify.dev/api/admin/migrate/new-product-model/sync-data#create-a-product-with-variants-and-options-asynchronously),

  this can be used to check the status of an operation.


  The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or
  `COMPLETE`.


  The `product` field provides the details of the original product.


  The `newProduct` field provides the details of the new duplicate of the
  product.


  The `userErrors` field provides mutation errors that occurred during the
  operation.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDuplicateOperation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDuplicateOperation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Duplicate​Operation

object

Requires `read_products` access scope.

An entity that represents details of an asynchronous [ProductDuplicate](https://shopify.dev/docs/api/admin-graphql/2026-07/mutations/productDuplicate) mutation.

By querying this entity with the [productOperation](https://shopify.dev/docs/api/admin-graphql/2026-07/queries/productOperation) query using the ID that was returned [when the product was duplicated](https://shopify.dev/api/admin/migrate/new-product-model/sync-data#create-a-product-with-variants-and-options-asynchronously), this can be used to check the status of an operation.

The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or `COMPLETE`.

The `product` field provides the details of the original product.

The `newProduct` field provides the details of the new duplicate of the product.

The `userErrors` field provides mutation errors that occurred during the operation.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* new​Product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The newly created duplicate of the original product.

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product on which the operation is being performed.

* status

  [Product​Operation​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOperationStatus)

  non-null

  The status of this operation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  Returns mutation errors occurred during background mutation processing.

***

## Map

No referencing types

***

## Mutations

* [product​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDuplicate)

  mutation

  Duplicates a product.

  If you need to duplicate a large product, such as one that has many [variants](https://shopify.dev/api/admin-graphql/latest/input-objects/ProductVariantInput) that are active at several [locations](https://shopify.dev/api/admin-graphql/latest/input-objects/InventoryLevelInput), you might encounter timeout errors.

  To avoid these timeout errors, you can instead duplicate the product asynchronously.

  In API version 2024-10 and higher, include `synchronous: false` argument in this mutation to perform the duplication asynchronously.

  In API version 2024-07 and lower, use the asynchronous [`ProductDuplicateAsyncV2`](https://shopify.dev/api/admin-graphql/2024-07/mutations/productDuplicateAsyncV2).

  Metafield values are not duplicated if the unique values capability is enabled.

  * include​Images

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Specifies whether or not to duplicate images.

  * include​Translations

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Specifies whether or not to duplicate translations.

  * new​Status

    [Product​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus)

    The new status of the product. If no value is provided the status will be inherited from the original product.

  * new​Title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The new title of the product.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the product to be duplicated.

  * synchronous

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Specifies whether or not to run the mutation synchronously.

  ***

***

## ProductDuplicateOperation Mutations

### Mutated by

* [product​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDuplicate)

***

## Interfaces

* * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

  * [Product​Operation](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ProductOperation)

    interface

***

## ProductDuplicateOperation Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
* [Product​Operation](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ProductOperation)
