---
title: StoreCreditAccountCreditTransaction - GraphQL Admin
description: A credit transaction which increases the store credit account balance.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Store​Credit​Account​Credit​Transaction

object

Requires `read_store_credit_account_transactions` access scope.

A credit transaction which increases the store credit account balance.

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

* expires​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The time at which the transaction expires. Debit transactions will always spend the soonest expiring credit first.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* origin

  [Store​Credit​Account​Transaction​Origin](https://shopify.dev/docs/api/admin-graphql/latest/unions/StoreCreditAccountTransactionOrigin)

  The origin of the store credit account transaction.

* remaining​Amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The remaining amount of the credit. The remaining amount will decrease when a debit spends this credit. It may also increase if that debit is subsequently reverted. In the event that the credit expires, the remaining amount will represent the amount that remained as the expiry ocurred.

***

## Map

### Fields with this object

* [StoreCreditAccountExpirationTransaction.creditTransaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountExpirationTransaction#field-StoreCreditAccountExpirationTransaction.fields.creditTransaction)

***

## Mutations

* [store​Credit​Account​Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storeCreditAccountCredit)

  mutation

  Adds funds to a [`StoreCreditAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount) by creating a [`StoreCreditAccountCreditTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction). The mutation accepts either a store credit account ID, a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) ID, or a [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) ID. When you provide a customer or company location ID, it automatically creates an account if one doesn't exist for the specified currency.

  Store credit accounts are currency-specific. A single owner can have multiple accounts, each holding a different currency. Use the most appropriate currency for the given store credit account owner.

  Credits can optionally include an expiration date.

  * credit​Input

    [Store​Credit​Account​Credit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditAccountCreditInput)

    required

    ### Arguments

    The input fields for a store credit account credit transaction.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the store credit account or the ID of the account owner.

  ***

***

## StoreCreditAccountCreditTransaction Mutations

### Mutated by

* [store​Credit​Account​Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storeCreditAccountCredit)

***

## Interfaces

* * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

  * [Store​Credit​Account​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/StoreCreditAccountTransaction)

    interface

***

## StoreCreditAccountCreditTransaction Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
* [Store​Credit​Account​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/StoreCreditAccountTransaction)
