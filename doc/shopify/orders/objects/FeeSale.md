---
title: FeeSale - GraphQL Admin
description: A sale associated with a fee.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/FeeSale'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/FeeSale.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Fee​Sale

object

Requires `read_orders` access scope.

A sale associated with a fee.

## Fields

* action​Type

  [Sale​Action​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleActionType)

  non-null

  The type of order action that the sale represents.

* fee

  [Fee](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Fee)

  The fee associated with the sale. It can be null if the fee was deleted.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID for the sale.

* line​Type

  [Sale​Line​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleLineType)

  non-null

  The line type assocated with the sale.

* quantity

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The number of units either ordered or intended to be returned.

* taxes

  [\[Sale​Tax!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleTax)

  non-null

  All individual taxes associated with the sale.

* total​Amount

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total sale amount after taxes and discounts.

* total​Discount​Amount​After​Taxes

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total discounts allocated to the sale after taxes.

* total​Discount​Amount​Before​Taxes

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total discounts allocated to the sale before taxes.

* total​Tax​Amount

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total amount of taxes for the sale.

***

## Map

No referencing types

***

## Interfaces

* [Sale](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Sale)

  interface

***

## FeeSale Implements

### Implements

* [Sale](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Sale)
