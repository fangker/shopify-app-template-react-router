---
title: ShopifyPaymentsToolingProviderPayout - GraphQL Admin
description: Relevant reference information for an alternate currency payout.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsToolingProviderPayout
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsToolingProviderPayout.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Tooling​Provider​Payout

object

Requires `read_shopify_payments_tooling` access scope.

Relevant reference information for an alternate currency payout.

## Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The balance amount the alternate currency payout was created for.

* arrival​Date

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  A timestamp for the arrival of the alternate currency payout.

* created​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  A timestamp for the creation of the alternate currency payout.

* currency

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The currency alternate currency payout was created in.

* remote​Id

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The remote ID for the alternate currency payout.

***

## Map

No referencing types

***

## Mutations

* [shopify​Payments​Payout​Alternate​Currency​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifyPaymentsPayoutAlternateCurrencyCreate)

  mutation

  Creates an alternate currency payout for a Shopify Payments account.

  * account​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the Shopify Payments account on which the mutation is being performed.

  * currency

    [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

    required

    The currency of the balance to payout.

  ***

***

## ShopifyPaymentsToolingProviderPayout Mutations

### Mutated by

* [shopify​Payments​Payout​Alternate​Currency​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifyPaymentsPayoutAlternateCurrencyCreate)
