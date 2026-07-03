---
title: ProductDeleteOperation - GraphQL Admin
description: >-
  An entity that represents details of an asynchronous

  [ProductDelete](/docs/api/admin-graphql/2026-07/mutations/productDelete)
  mutation.


  By querying this entity with the

  [productOperation](/docs/api/admin-graphql/2026-07/queries/productOperation)
  query

  using the ID that was returned when the product was deleted, this can be used
  to check the status of an operation.


  The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or
  `COMPLETE`.


  The `deletedProductId` field provides the ID of the deleted product.


  The `userErrors` field provides mutation errors that occurred during the
  operation.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDeleteOperation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDeleteOperation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Delete​Operation

object

Requires `read_products` access scope.

An entity that represents details of an asynchronous [ProductDelete](https://shopify.dev/docs/api/admin-graphql/2026-07/mutations/productDelete) mutation.

By querying this entity with the [productOperation](https://shopify.dev/docs/api/admin-graphql/2026-07/queries/productOperation) query using the ID that was returned when the product was deleted, this can be used to check the status of an operation.

The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or `COMPLETE`.

The `deletedProductId` field provides the ID of the deleted product.

The `userErrors` field provides mutation errors that occurred during the operation.

## Fields

* deleted​Product​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted product.

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

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  Returns mutation errors occurred during background mutation processing.

***

## Map

No referencing types

***

## Mutations

* [product​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete)

  mutation

  Permanently deletes a product and all its associated data, including variants, media, publications, and inventory items.

  Use the `productDelete` mutation to programmatically remove products from your store when they need to be permanently deleted from your catalog, such as when removing discontinued items, cleaning up test data, or synchronizing with external inventory management systems.

  The `productDelete` mutation removes the product from all associated collections, and removes all associated data for the product, including:

  * All product variants and their inventory items
  * Product media (images, videos) that are not referenced by other products
  * [Product options](https://shopify.dev/api/admin-graphql/latest/objects/ProductOption) and [option values](https://shopify.dev/api/admin-graphql/latest/objects/ProductOptionValue)
  * Product publications across all sales channels
  * Product tags and metadata associations

  The `productDelete` mutation also has the following effects on existing orders and transactions:

  * **Draft orders**: Existing draft orders that reference this product will retain the product information as stored data, but the product reference will be removed. Draft orders can still be completed with the stored product details.
  * **Completed orders and refunds**: Previously completed orders that included this product aren't affected. The product information in completed orders is preserved for record-keeping, and existing refunds for this product remain valid and processable.

  ***

  **Caution:** Product deletion is irreversible. After a product is deleted, it can\&#39;t be recovered. Consider archiving or unpublishing products instead if you might need to restore them later.

  ***

  If you need to delete a large product, such as one that has many [variants](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant) that are active at several [locations](https://shopify.dev/api/admin-graphql/latest/objects/Location), you might encounter timeout errors. To avoid these timeout errors, you can set the [`synchronous`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete#arguments-synchronous) parameter to `false` to run the deletion asynchronously, which returns a [`ProductDeleteOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDeleteOperation) that you can monitor for completion status.

  If you need more granular control over product cleanup, consider using these alternative mutations:

  * [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Update the product status to archived or unpublished instead of deleting.
  * [`productVariantsBulkDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete): Delete specific variants while keeping the product.
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete): Delete the choices available for a product, such as size, color, or material.

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model).

  * input

    [Product​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductDeleteInput)

    required

    ### Arguments

    Specifies the product to delete by its ID.

  * synchronous

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Specifies whether or not to run the mutation synchronously.

  ***

***

## ProductDeleteOperation Mutations

### Mutated by

* [product​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete)

***

## Interfaces

* * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

  * [Product​Operation](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ProductOperation)

    interface

***

## ProductDeleteOperation Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
* [Product​Operation](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ProductOperation)
