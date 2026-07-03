---
title: StoreCreditAccountExpirationTransaction - GraphQL Admin
description: >-
  An expiration transaction which decreases the store credit account balance.

  Expiration transactions are created automatically when a [store credit account
  credit
  transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction)
  expires.


  The amount subtracted from the balance is equal to the remaining amount of the
  credit transaction.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountExpirationTransaction
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountExpirationTransaction.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Store​Credit​Account​Expiration​Transaction

object

Requires `read_store_credit_account_transactions` access scope.

An expiration transaction which decreases the store credit account balance. Expiration transactions are created automatically when a [store credit account credit transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction) expires.

The amount subtracted from the balance is equal to the remaining amount of the credit transaction.

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

* credit​Transaction

  [Store​Credit​Account​Credit​Transaction!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction)

  non-null

  The credit transaction which expired.

* event

  [Store​Credit​System​Event!](https://shopify.dev/docs/api/admin-graphql/latest/enums/StoreCreditSystemEvent)

  non-null

  The event that caused the store credit account transaction.

* origin

  [Store​Credit​Account​Transaction​Origin](https://shopify.dev/docs/api/admin-graphql/latest/unions/StoreCreditAccountTransactionOrigin)

  The origin of the store credit account transaction.

***

## Map

No referencing types

***

## Interfaces

* [Store​Credit​Account​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/StoreCreditAccountTransaction)

  interface

***

## StoreCreditAccountExpirationTransaction Implements

### Implements

* [Store​Credit​Account​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/StoreCreditAccountTransaction)
