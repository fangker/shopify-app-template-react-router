---
title: AdditionalFee - GraphQL Admin
description: >-
  Additional fees applied to an

  [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  beyond the standard product and shipping costs. Additional fees typically

  include duties, import fees, or other special handling charges that need

  separate tracking from regular

  [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)
  objects.


  Each fee includes its name, price in both shop and presentment currencies, and

  any applicable taxes broken down by

  [`TaxLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFee'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFee.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Additional​Fee

object

Requires `read_orders` access scope.

Additional fees applied to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) beyond the standard product and shipping costs. Additional fees typically include duties, import fees, or other special handling charges that need separate tracking from regular [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects.

Each fee includes its name, price in both shop and presentment currencies, and any applicable taxes broken down by [`TaxLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine).

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

* [Order.additionalFees](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.additionalFees)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## AdditionalFee Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
