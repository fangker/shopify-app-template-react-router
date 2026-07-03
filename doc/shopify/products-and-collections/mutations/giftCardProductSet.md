---
title: giftCardProductSet - GraphQL Admin
description: >-
  Creates or updates a

  [`gift
  card`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

  product. This mutation is specifically designed for gift card products and
  automatically sets

  the `giftCard` field to `true`, applies gift card variant defaults
  (non-taxable, no shipping

  required, inventory untracked), and omits fields that aren't relevant to gift
  cards.


  For list fields like

  [`variants`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet#arguments-input.fields.variants),

  the mutation performs a full replacement: it creates new entries, updates
  existing ones, and

  removes any entries not included in the input. For all other fields, only
  included fields

  change and omitted fields remain unchanged.


  You can run the mutation synchronously to receive the updated product
  immediately, or

  asynchronously by setting

  [`synchronous`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet#arguments-synchronous)`:
  false`

  to receive a

  [`ProductSetOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation)

  object instead. Use the

  [`productOperation`](https://shopify.dev/docs/api/admin-graphql/latest/queries/productOperation)

  query to check the status and retrieve the product details when running
  asynchronously.


  > Note:

  > The

  [`issuanceCurrency`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet#arguments-input.fields.issuanceCurrency)

  and
  [`crossCurrencyRedeemable`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet#arguments-input.fields.crossCurrencyRedeemable)
  fields can only be set during product creation. They can't be changed after

  the product is created.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# gift​Card​Product​Set

mutation

Requires `write_products` access scope. Also: The user must have a permission to create products.

Creates or updates a [`gift card`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) product. This mutation is specifically designed for gift card products and automatically sets the `giftCard` field to `true`, applies gift card variant defaults (non-taxable, no shipping required, inventory untracked), and omits fields that aren't relevant to gift cards.

For list fields like [`variants`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet#arguments-input.fields.variants), the mutation performs a full replacement: it creates new entries, updates existing ones, and removes any entries not included in the input. For all other fields, only included fields change and omitted fields remain unchanged.

You can run the mutation synchronously to receive the updated product immediately, or asynchronously by setting [`synchronous`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet#arguments-synchronous)`: false` to receive a [`ProductSetOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation) object instead. Use the [`productOperation`](https://shopify.dev/docs/api/admin-graphql/latest/queries/productOperation) query to check the status and retrieve the product details when running asynchronously.

***

**Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet#arguments-input.fields.issuanceCurrency">\<code>\<span class="PreventFireFoxApplyingGapToWBR">issuance\<wbr/>Currency\</span>\</code>\</a> and \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet#arguments-input.fields.crossCurrencyRedeemable">\<code>\<span class="PreventFireFoxApplyingGapToWBR">cross\<wbr/>Currency\<wbr/>Redeemable\</span>\</code>\</a> fields can only be set during product creation. They can\&#39;t be changed after the product is created.

***

## Arguments

* identifier

  [Product​Set​Identifiers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetIdentifiers)

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

## Gift​Card​Product​Set​Payload returns

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The gift card product object.

* product​Set​Operation

  [Product​Set​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation)

  The product set operation, returned when run in asynchronous mode.

* user​Errors

  [\[Gift​Card​Product​Set​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardProductSetUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### giftCardProductSet reference
