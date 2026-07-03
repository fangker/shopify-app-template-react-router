---
title: StoreCreditAccountDebitRevertTransaction - GraphQL Admin
description: >-
  A debit revert transaction which increases the store credit account balance.

  Debit revert transactions are created automatically when a [store credit
  account debit
  transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction)
  is reverted.


  Store credit account debit transactions are reverted when an order is
  cancelled,

  refunded or in the event of a payment failure at checkout.

  The amount added to the balance is equal to the amount reverted on the
  original credit.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitRevertTransaction
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitRevertTransaction.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Store​Credit​Account​Debit​Revert​Transaction

object

Requires `read_store_credit_account_transactions` access scope.

A debit revert transaction which increases the store credit account balance. Debit revert transactions are created automatically when a [store credit account debit transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction) is reverted.

Store credit account debit transactions are reverted when an order is cancelled, refunded or in the event of a payment failure at checkout. The amount added to the balance is equal to the amount reverted on the original credit.

## Fields

* account

  [Store​Credit​Account!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount)

  non-null

  The store credit account that the transaction belongs to.

* amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount of the transaction.

* balance​After​Transaction

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The balance of the account after the transaction.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was created.

* debit​Transaction

  [Store​Credit​Account​Debit​Transaction!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction)

  non-null

  The reverted debit transaction.

* event

  [Store​Credit​System​Event!](https://shopify.dev/docs/api/admin-graphql/latest/enums/StoreCreditSystemEvent)

  non-null

  The event that caused the store credit account transaction.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* origin

  [Store​Credit​Account​Transaction​Origin](https://shopify.dev/docs/api/admin-graphql/latest/unions/StoreCreditAccountTransactionOrigin)

  The origin of the store credit account transaction.

***

## Map

No referencing types

***

## Interfaces

* * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

  * [Store​Credit​Account​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/StoreCreditAccountTransaction)

    interface

***

## StoreCreditAccountDebitRevertTransaction Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
* [Store​Credit​Account​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/StoreCreditAccountTransaction)
