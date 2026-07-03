---
title: StoreCreditAccount - GraphQL Admin
description: >-
  A store credit account contains a monetary balance that can be redeemed at
  checkout for purchases in the shop.

  The account is held in the specified currency and has an owner that cannot be
  transferred.


  The account balance is redeemable at checkout only when the owner is

  authenticated via [new customer accounts

  authentication](https://shopify.dev/docs/api/customer).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Store​Credit​Account

object

Requires `read_store_credit_accounts` access scope.

A store credit account contains a monetary balance that can be redeemed at checkout for purchases in the shop. The account is held in the specified currency and has an owner that cannot be transferred.

The account balance is redeemable at checkout only when the owner is authenticated via [new customer accounts authentication](https://shopify.dev/docs/api/customer).

## Fields

* balance

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The current balance of the store credit account.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* owner

  [Has​Store​Credit​Accounts!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasStoreCreditAccounts)

  non-null

  The owner of the store credit account.

* transactions

  [Store​Credit​Account​Transaction​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountTransactionConnection)

  non-null

  The transaction history of the store credit account.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * expires\_at

        time

      * id

        id

      * type

        string

      - Filter transactions by expiry date. Only applicable to StoreCreditAccountCreditTransaction objects. All other objects are handled as if they have a null expiry date.

      - Example:

        * `expires_at:<='2025-01-01T00:00:00+01:00'`
        * `expires_at:<='2025-12-31T23:00:00Z'`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter transactions by type. Any value other than the accepted values will be ignored.

        Valid values:

        * `credit`
        * `debit`
        * `debit_revert`
        * `expiration`

        Example:

        * `type:expiration`
        * `type:credit OR type:debit_revert`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Transaction​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/TransactionSortKeys)

    Default:CREATED\_AT

    Sort the underlying list by the given key.

  ***

***

## Map

### Fields and connections with this object

* [CompanyLocation.storeCreditAccounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.storeCreditAccounts)
* [Customer.storeCreditAccounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.storeCreditAccounts)
* [HasStoreCreditAccounts.storeCreditAccounts](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasStoreCreditAccounts#fields-storeCreditAccounts)
* [StoreCreditAccountConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountConnection#returns-nodes)
* [StoreCreditAccountCreditTransaction.account](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction#field-StoreCreditAccountCreditTransaction.fields.account)
* [StoreCreditAccountDebitRevertTransaction.account](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitRevertTransaction#field-StoreCreditAccountDebitRevertTransaction.fields.account)
* [StoreCreditAccountDebitTransaction.account](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction#field-StoreCreditAccountDebitTransaction.fields.account)
* [StoreCreditAccountEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountEdge#field-StoreCreditAccountEdge.fields.node)
* [StoreCreditAccountExpirationTransaction.account](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountExpirationTransaction#field-StoreCreditAccountExpirationTransaction.fields.account)
* [StoreCreditAccountTransaction.account](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/StoreCreditAccountTransaction#fields-account)

***

## Queries

* [store​Credit​Account](https://shopify.dev/docs/api/admin-graphql/latest/queries/storeCreditAccount)

  query

  Retrieves a [`StoreCreditAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount) by ID. Store credit accounts hold monetary balances that account owners can use at checkout. The owner is either a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) or a [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the store credit account to return.

  ***

***

## StoreCreditAccount Queries

### Queried by

* [store​Credit​Account](https://shopify.dev/docs/api/admin-graphql/latest/queries/storeCreditAccount)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## StoreCreditAccount Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
