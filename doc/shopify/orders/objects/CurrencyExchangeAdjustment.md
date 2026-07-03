---
title: CurrencyExchangeAdjustment - GraphQL Admin
description: Represents a currency exchange adjustment applied to an order transaction.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencyExchangeAdjustment
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencyExchangeAdjustment.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Currency​Exchange​Adjustment

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

Represents a currency exchange adjustment applied to an order transaction.

## Fields

* adjustment

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The adjustment amount in both shop and presentment currencies.

* final​Amount​Set

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The final amount in both shop and presentment currencies after the adjustment.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* original​Amount​Set

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The original amount in both shop and presentment currencies before the adjustment.

***

## Map

### Fields with this object

* [OrderTransaction.currencyExchangeAdjustment](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.currencyExchangeAdjustment)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## CurrencyExchangeAdjustment Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
