---
title: TipSale - GraphQL Admin
description: A sale associated with a tip.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/TipSale'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/TipSale.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Tip​Sale

object

Requires `read_orders` access scope.

A sale associated with a tip.

## Fields

* action​Type

  [Sale​Action​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleActionType)

  non-null

  The type of order action that the sale represents.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID for the sale.

* line​Item

  [Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

  non-null

  The line item for the associated sale.

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

## TipSale Implements

### Implements

* [Sale](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Sale)
