---
title: ShopifyPaymentsBankAccount - GraphQL Admin
description: A bank account that can receive payouts.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Bank​Account

object

Requires `read_shopify_payments_bank_accounts` access scope.

A bank account that can receive payouts.

## Fields

* account​Number​Last​Digits

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The last digits of the account number (the rest is redacted).

* bank​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the bank.

* country

  [Country​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  non-null

  The country of the bank.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date that the bank account was created.

* currency

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  The currency of the bank account.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* payouts

  [Shopify​Payments​Payout​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsPayoutConnection)

  non-null

  All current and previous payouts made between the account and the bank account.

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

    * * default

        string

      * amount

        float

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * bank\_account

      string

    * currency

      string

    * * id

        id

      * issued\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * ledger\_type

      string

    * status

      string

    * transaction\_dates

      time

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  * sort​Key

    [Payout​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/PayoutSortKeys)

    Default:ISSUED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * transaction​Type

    [Shopify​Payments​Payout​Transaction​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutTransactionType)

    Filter the direction of the payout.

  ***

* status

  [Shopify​Payments​Bank​Account​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsBankAccountStatus)

  non-null

  The status of the bank account.

***

## Map

### Fields and connections with this object

* [ShopifyPaymentsAccount.bankAccounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.bankAccounts)
* [ShopifyPaymentsBankAccountConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsBankAccountConnection#returns-nodes)
* [ShopifyPaymentsBankAccountEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccountEdge#field-ShopifyPaymentsBankAccountEdge.fields.node)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ShopifyPaymentsBankAccount Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
