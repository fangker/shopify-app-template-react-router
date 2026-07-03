---
title: CalculatedRestockingFee - GraphQL Admin
description: >-
  The calculated costs of handling a return line item.

  Typically, this would cover the costs of inspecting, repackaging, and
  restocking the item.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedRestockingFee
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedRestockingFee.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Calculated​Restocking​Fee

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

The calculated costs of handling a return line item. Typically, this would cover the costs of inspecting, repackaging, and restocking the item.

## Fields

* amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The calculated amount of the return fee, in shop and presentment currencies.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* percentage

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The value of the fee as a percentage.

***

## Map

### Fields with this object

* [CalculatedReturnLineItem.restockingFee](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedReturnLineItem#field-CalculatedReturnLineItem.fields.restockingFee)

***

## Interfaces

* [Calculated​Return​Fee](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedReturnFee)

  interface

***

## CalculatedRestockingFee Implements

### Implements

* [Calculated​Return​Fee](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedReturnFee)
