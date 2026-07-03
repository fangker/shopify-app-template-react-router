---
title: GiftCardProductSettings - GraphQL Admin
description: >-
  The gift card configuration settings for a

  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product),

  including the

  [`issuanceCurrency`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardProductSettings#field-GiftCardProductSettings.fields.issuanceCurrency)

  and whether the gift card can be redeemed across currencies via

  [`crossCurrencyRedeemable`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardProductSettings#field-GiftCardProductSettings.fields.crossCurrencyRedeemable).

  Configure these settings when creating a gift card product with the

  [`giftCardProductSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet)

  mutation.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardProductSettings
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardProductSettings.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Gift​Card​Product​Settings

object

Requires `read_products` access scope.

The gift card configuration settings for a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), including the [`issuanceCurrency`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardProductSettings#field-GiftCardProductSettings.fields.issuanceCurrency) and whether the gift card can be redeemed across currencies via [`crossCurrencyRedeemable`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardProductSettings#field-GiftCardProductSettings.fields.crossCurrencyRedeemable). Configure these settings when creating a gift card product with the [`giftCardProductSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet) mutation.

## Fields

* cross​Currency​Redeemable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the gift card can be redeemed in currencies other than the issuance currency.

* issuance​Currency

  [Currency​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  The currency in which the gift card fulfilled by this product is issued. When this field isn't set the gift card will be issued in the shop's currency, the return value of this field will be `null`. When this field is set the gift card product can only be purchased in the issuance currency. A checkout violation will prevent purchases if the checkout currency doesn't match the issuance currency. Extra care should be taken to only publish a gift card product with an issuance currency in markets where that currency can be guaranteed.

***

## Map

### Fields with this object

* [Product.giftCardSettings](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.giftCardSettings)
