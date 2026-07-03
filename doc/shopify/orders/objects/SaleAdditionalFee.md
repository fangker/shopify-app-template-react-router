---
title: SaleAdditionalFee - GraphQL Admin
description: The additional fee details for a line item.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleAdditionalFee'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleAdditionalFee.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Sale​Additional​Fee

object

Requires `read_orders` access scope.

The additional fee details for a line item.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the additional fee.

* price

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The price of the additional fee.

* tax​Lines

  [\[Tax​Line!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

  non-null

  A list of taxes charged on the additional fee.

***

## Map

### Fields with this object

* [AdditionalFeeSale.additionalFee](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.additionalFee)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## SaleAdditionalFee Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
