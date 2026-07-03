---
title: TransactionFee - GraphQL Admin
description: Transaction fee related to an order transaction.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/TransactionFee'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/TransactionFee.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Transaction​Fee

object

Requires `read_orders` access scope.

Transaction fee related to an order transaction.

## Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Amount of the fee.

* flat​Fee

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Flat rate charge for a transaction.

* flat​Fee​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Name of the credit card flat fee.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* rate

  [Decimal!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  non-null

  Percentage charge.

* rate​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Name of the credit card rate.

* tax​Amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Tax amount charged on the fee.

* type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Name of the type of fee.

***

## Map

### Fields with this object

* [OrderTransaction.fees](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.fees)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## TransactionFee Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
