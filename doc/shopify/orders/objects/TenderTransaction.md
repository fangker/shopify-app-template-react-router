---
title: TenderTransaction - GraphQL Admin
description: >-
  A TenderTransaction represents a transaction with financial impact on a shop's
  balance sheet. A tender transaction always

  represents actual money movement between a buyer and a shop.
  TenderTransactions can be used instead of OrderTransactions

  for reconciling a shop's cash flow. A TenderTransaction is immutable once
  created.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransaction'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransaction.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Tender​Transaction

object

Requires `read_orders` access scope.

A TenderTransaction represents a transaction with financial impact on a shop's balance sheet. A tender transaction always represents actual money movement between a buyer and a shop. TenderTransactions can be used instead of OrderTransactions for reconciling a shop's cash flow. A TenderTransaction is immutable once created.

## Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount and currency of the tender transaction.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order that's related to the tender transaction. This value is null if the order has been deleted.

* payment​Method

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Information about the payment method used for the transaction.

* processed​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  Date and time when the transaction was processed.

* remote​Reference

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The remote gateway reference associated with the tender transaction.

* test

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the transaction is a test transaction.

* transaction​Details

  [Tender​Transaction​Details](https://shopify.dev/docs/api/admin-graphql/latest/unions/TenderTransactionDetails)

  Information about the payment instrument used for the transaction.

* user

  [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  The staff member who performed the transaction.

***

## Map

### Fields and connections with this object

* [TenderTransactionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/TenderTransactionConnection#returns-nodes)
* [TenderTransactionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransactionEdge#field-TenderTransactionEdge.fields.node)

***

## Queries

* [tender​Transactions](https://shopify.dev/docs/api/admin-graphql/latest/queries/tenderTransactions)

  query

  Transactions representing a movement of money between customers and the shop. Each transaction records the amount, payment method, processing details, and the associated [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).

  Positive amounts indicate customer payments to the merchant. Negative amounts represent refunds from the merchant to the customer. Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/tenderTransactions#arguments-query) parameter to filter transactions by attributes such as transaction ID, processing date, and point-of-sale device ID.

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

    * * id

        id

      * point\_of\_sale\_device\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * processed\_at

      time

    * test

      boolean

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

## TenderTransaction Queries

### Queried by

* [tender​Transactions](https://shopify.dev/docs/api/admin-graphql/latest/queries/tenderTransactions)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## TenderTransaction Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
