---
title: StoreCreditAccountDebitTransaction - GraphQL Admin
description: A debit transaction which decreases the store credit account balance.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Store​Credit​Account​Debit​Transaction

object

Requires `read_store_credit_account_transactions` access scope.

A debit transaction which decreases the store credit account balance.

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

### Fields with this object

* [StoreCreditAccountDebitRevertTransaction.debitTransaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitRevertTransaction#field-StoreCreditAccountDebitRevertTransaction.fields.debitTransaction)

***

## Mutations

* [store​Credit​Account​Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storeCreditAccountDebit)

  mutation

  Creates a debit transaction that decreases the store credit account balance by the given amount.

  * debit​Input

    [Store​Credit​Account​Debit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditAccountDebitInput)

    required

    ### Arguments

    The input fields for a store credit account debit transaction.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the store credit account or the ID of the account owner.

  ***

***

## StoreCreditAccountDebitTransaction Mutations

### Mutated by

* [store​Credit​Account​Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storeCreditAccountDebit)

***

## Interfaces

* * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

  * [Store​Credit​Account​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/StoreCreditAccountTransaction)

    interface

***

## StoreCreditAccountDebitTransaction Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
* [Store​Credit​Account​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/StoreCreditAccountTransaction)
