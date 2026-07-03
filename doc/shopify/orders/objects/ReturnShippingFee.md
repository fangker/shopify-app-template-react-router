---
title: ReturnShippingFee - GraphQL Admin
description: >-
  A return shipping fee is a fee captured as part of a return to cover the costs
  of shipping the return.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnShippingFee'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnShippingFee.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Return​Shipping​Fee

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

A return shipping fee is a fee captured as part of a return to cover the costs of shipping the return.

## Fields

* amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The amount of the return shipping fee, in shop and presentment currencies.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID for the Fee.

***

## Map

### Fields with this object

* [Return.returnShippingFees](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.returnShippingFees)

***

## Interfaces

* [Fee](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Fee)

  interface

***

## ReturnShippingFee Implements

### Implements

* [Fee](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Fee)
