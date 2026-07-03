---
title: ShopifyPaymentsBalanceTransaction - GraphQL Admin
description: >-
  A transaction that contributes to a Shopify Payments account balance. Records

  money movement from charges, refunds, payouts, adjustments, or other payment

  activities. Includes the gross amount, processing fees, and resulting net
  amount

  that affects the account balance. Links to the source of the transaction and
  associated
  [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout)

  details, with optional references to

  [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  objects or adjustment reasons when applicable.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Balance​Transaction

object

Requires The user must have access to payouts.

A transaction that contributes to a Shopify Payments account balance. Records money movement from charges, refunds, payouts, adjustments, or other payment activities. Includes the gross amount, processing fees, and resulting net amount that affects the account balance. Links to the source of the transaction and associated [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) details, with optional references to [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects or adjustment reasons when applicable.

## Fields

* adjustment​Reason

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The reason for the adjustment that's associated with the transaction. If the source\_type isn't an adjustment, the value will be null.

* adjustments​Orders

  [\[Shopify​Payments​Adjustment​Order!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAdjustmentOrder)

  non-null

  The adjustment orders associated to the transaction.

* amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount contributing to the balance transaction.

* associated​Order

  [Shopify​Payments​Associated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAssociatedOrder)

  The associated order for the balance transaction.

* associated​Payout

  [Shopify​Payments​Balance​Transaction​Associated​Payout!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransactionAssociatedPayout)

  non-null

  Payout assoicated with the transaction.

* fee

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The fee amount contributing to the balance transaction.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* net

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The net amount contributing to the merchant's balance.

* source​Id

  [Big​Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/BigInt)

  The ID of the resource leading to the transaction.

* source​Order​Transaction​Id

  [Big​Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/BigInt)

  The id of the [Order Transaction](https://shopify.dev/docs/admin-api/rest/reference/orders/transaction)

  that resulted in this balance transaction.

* source​Type

  [Shopify​Payments​Source​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsSourceType)

  The source type of the balance transaction.

* test

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Wether the tranaction was created in test mode.

* transaction​Date

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the balance transaction was processed.

* type

  [Shopify​Payments​Transaction​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsTransactionType)

  non-null

  The type of transaction.

***

## Map

### Fields and connections with this object

* [ShopifyPaymentsAccount.balanceTransactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.balanceTransactions)
* [ShopifyPaymentsBalanceTransactionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsBalanceTransactionConnection#returns-nodes)
* [ShopifyPaymentsBalanceTransactionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransactionEdge#field-ShopifyPaymentsBalanceTransactionEdge.fields.node)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ShopifyPaymentsBalanceTransaction Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
