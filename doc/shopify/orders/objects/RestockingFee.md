---
title: RestockingFee - GraphQL Admin
description: >-
  A restocking fee is a fee captured as part of a return to cover the costs of
  handling a return line item.

  Typically, this would cover the costs of inspecting, repackaging, and
  restocking the item.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/RestockingFee'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/RestockingFee.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Restocking​Fee

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

A restocking fee is a fee captured as part of a return to cover the costs of handling a return line item. Typically, this would cover the costs of inspecting, repackaging, and restocking the item.

## Fields

* amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The amount of the restocking fee, in shop and presentment currencies.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID for the Fee.

* percentage

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The value of the fee as a percentage.

***

## Map

### Fields with this object

* [ReturnLineItem.restockingFee](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnLineItem#field-ReturnLineItem.fields.restockingFee)

***

## Interfaces

* [Fee](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Fee)

  interface

***

## RestockingFee Implements

### Implements

* [Fee](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Fee)
