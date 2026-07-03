---
title: ProductSetOperation - GraphQL Admin
description: >-
  An entity that represents details of an asynchronous

  [ProductSet](/docs/api/admin-graphql/2026-07/mutations/productSet) mutation.


  By querying this entity with the

  [productOperation](/docs/api/admin-graphql/2026-07/queries/productOperation)
  query

  using the ID that was returned

  [when the product was created or
  updated](https://shopify.dev/api/admin/migrate/new-product-model/sync-data#create-a-product-with-variants-and-options-asynchronously),

  this can be used to check the status of an operation.


  The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or
  `COMPLETE`.


  The `product` field provides the details of the created or updated product.


  The `userErrors` field provides mutation errors that occurred during the
  operation.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Set​Operation

object

Requires `read_products` access scope.

An entity that represents details of an asynchronous [ProductSet](https://shopify.dev/docs/api/admin-graphql/2026-07/mutations/productSet) mutation.

By querying this entity with the [productOperation](https://shopify.dev/docs/api/admin-graphql/2026-07/queries/productOperation) query using the ID that was returned [when the product was created or updated](https://shopify.dev/api/admin/migrate/new-product-model/sync-data#create-a-product-with-variants-and-options-asynchronously), this can be used to check the status of an operation.

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

  [\[Product​Set​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetUserError)

  non-null

  Returns mutation errors occurred during background mutation processing.

***

## Map

No referencing types

***

## Mutations

* [gift​Card​Product​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet)

  mutation

  Creates or updates a [`gift card`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) product. This mutation is specifically designed for gift card products and automatically sets the `giftCard` field to `true`, applies gift card variant defaults (non-taxable, no shipping required, inventory untracked), and omits fields that aren't relevant to gift cards.

  For list fields like [`variants`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet#arguments-input.fields.variants), the mutation performs a full replacement: it creates new entries, updates existing ones, and removes any entries not included in the input. For all other fields, only included fields change and omitted fields remain unchanged.

  You can run the mutation synchronously to receive the updated product immediately, or asynchronously by setting [`synchronous`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet#arguments-synchronous)`: false` to receive a [`ProductSetOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation) object instead. Use the [`productOperation`](https://shopify.dev/docs/api/admin-graphql/latest/queries/productOperation) query to check the status and retrieve the product details when running asynchronously.

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet#arguments-input.fields.issuanceCurrency">\<code>\<span class="PreventFireFoxApplyingGapToWBR">issuance\<wbr/>Currency\</span>\</code>\</a> and \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet#arguments-input.fields.crossCurrencyRedeemable">\<code>\<span class="PreventFireFoxApplyingGapToWBR">cross\<wbr/>Currency\<wbr/>Redeemable\</span>\</code>\</a> fields can only be set during product creation. They can\&#39;t be changed after the product is created.

  ***

  * identifier

    [Product​Set​Identifiers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetIdentifiers)

    ### Arguments

    Specifies the identifier that will be used to lookup the resource.

  * input

    [Gift​Card​Product​Set​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardProductSetInput)

    required

    The properties of the gift card product to create or update.

  * synchronous

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the mutation should be run synchronously or asynchronously.

    If `true`, the mutation will return the updated `product`. If `false`, the mutation will return a `productSetOperation`.

    Defaults to `true`.

  ***

* [product​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  mutation

  Performs multiple operations to create or update products in a single request.

  Use the `productSet` mutation to sync information from an external data source into Shopify, manage large product catalogs, and perform batch updates. The mutation is helpful for bulk product management, including price adjustments, inventory updates, and product lifecycle management.

  The behavior of `productSet` depends on the type of field it's modifying:

  * **For list fields**: Creates new entries, updates existing entries, and deletes existing entries that aren't included in the mutation's input. Common examples of list fields include [`collections`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.collections), [`metafields`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.metafields), and [`variants`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.variants).

  * **For all other field types**: Updates only the included fields. Any omitted fields will remain unchanged.

  ***

  **Note:** By default, stores have a limit of 2048 product variants for each product.

  ***

  You can run `productSet` in one of the following modes:

  * **Synchronously**: Returns the updated product in the response.
  * **Asynchronously**: Returns a [`ProductSetOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation) object. Use the [`productOperation`](https://shopify.dev/api/admin-graphql/latest/queries/productOperation) query to check the status of the operation and retrieve details of the updated product and its product variants.

  If you need to only manage product variants, then use one of the following mutations:

  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productVariantsBulkDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete)

  If you need to only manage product options, then use one of the following mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

  Learn more about [syncing product data from an external source](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/sync-data).

  * identifier

    [Product​Set​Identifiers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetIdentifiers)

    ### Arguments

    Specifies the identifier that will be used to lookup the resource.

  * input

    [Product​Set​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput)

    required

    The properties of the newly created or updated product.

  * synchronous

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the mutation should be run synchronously or asynchronously.

    If `true`, the mutation will return the updated `product`.

    If `false`, the mutation will return a `productSetOperation`.

    Defaults to `true`.

    Setting `synchronous: false` may be desirable depending on the input complexity/size, and should be used if you are experiencing timeouts.

    **Note**: When run in the context of a [bulk operation](https://shopify.dev/api/usage/bulk-operations/imports), the mutation will always run synchronously and this argument will be ignored.

  ***

***

## ProductSetOperation Mutations

### Mutated by

* [gift​Card​Product​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet)
* [product​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

***

## Interfaces

* * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

  * [Product​Operation](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ProductOperation)

    interface

***

## ProductSetOperation Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
* [Product​Operation](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ProductOperation)
