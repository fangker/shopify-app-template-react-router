---
title: ShopifyPaymentsPayout - GraphQL Admin
description: >-
  A transfer of funds between a merchant's Shopify Payments balance and their
  [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount).

  Provides the [net
  amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout#field-ShopifyPaymentsPayout.fields.net),
  [issue
  date](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout#field-ShopifyPaymentsPayout.fields.issuedAt),
  and current
  [`ShopifyPaymentsPayoutStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutStatus).


  The payout includes a
  [`ShopifyPaymentsPayoutSummary`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSummary)

  that breaks down fees and gross amounts by transaction type, such as charges,

  refunds, and adjustments. The
  [`ShopifyPaymentsPayoutTransactionType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutTransactionType)

  indicates whether funds move into the bank account (deposit) or back to
  Shopify

  Payments (withdrawal).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Payout

object

Requires The user must have access to payouts.

A transfer of funds between a merchant's Shopify Payments balance and their [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount). Provides the [net amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout#field-ShopifyPaymentsPayout.fields.net), [issue date](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout#field-ShopifyPaymentsPayout.fields.issuedAt), and current [`ShopifyPaymentsPayoutStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutStatus).

The payout includes a [`ShopifyPaymentsPayoutSummary`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSummary) that breaks down fees and gross amounts by transaction type, such as charges, refunds, and adjustments. The [`ShopifyPaymentsPayoutTransactionType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutTransactionType) indicates whether funds move into the bank account (deposit) or back to Shopify Payments (withdrawal).

## Fields

* business​Entity

  [Business​Entity!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessEntity)

  non-null

  The business entity associated with the payout.

* external​Trace​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique trace ID from the financial institution. Use this reference number to track the payout with your provider.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* issued​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The exact time when the payout was issued. The payout only contains balance transactions that were available at this time.

* legacy​Resource​Id

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The ID of the corresponding resource in the REST Admin API.

* net

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The total amount and currency of the payout.

* status

  [Shopify​Payments​Payout​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutStatus)

  non-null

  The transfer status of the payout.

* summary

  [Shopify​Payments​Payout​Summary!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSummary)

  non-null

  The summary of the payout.

* transaction​Type

  [Shopify​Payments​Payout​Transaction​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutTransactionType)

  non-null

  The direction of the payout.

### Deprecated fields

* bank​Account

  [Shopify​Payments​Bank​Account](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount)

  Deprecated

* gross

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [ShopifyPaymentsAccount.payouts](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.payouts)
* [ShopifyPaymentsBankAccount.payouts](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount#field-ShopifyPaymentsBankAccount.fields.payouts)
* [ShopifyPaymentsPayoutConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsPayoutConnection#returns-nodes)
* [ShopifyPaymentsPayoutEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutEdge#field-ShopifyPaymentsPayoutEdge.fields.node)

***

## Interfaces

* * [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## ShopifyPaymentsPayout Implements

### Implements

* [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
