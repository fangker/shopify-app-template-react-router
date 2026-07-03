---
title: CalculatedExchangeLineItem - GraphQL Admin
description: A calculated exchange line item.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedExchangeLineItem
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedExchangeLineItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Calculated​Exchange​Line​Item

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

A calculated exchange line item.

## Fields

* calculated​Discount​Allocations

  [\[Calculated​Discount​Allocation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountAllocation)

  non-null

  The discounts that have been allocated onto the line item by discount applications.

* discounted​Unit​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The unit price of the exchange line item after discounts.

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A globally-unique ID.

* original​Unit​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The original unit price of the exchange line item before discounts.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity being exchanged.

* subtotal​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The calculated subtotal set of the exchange line item, including discounts.

* total​Tax​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total tax of the exchange line item.

* variant

  [Product​Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The variant being exchanged.

***

## Map

### Fields with this object

* [CalculatedReturn.exchangeLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedReturn#field-CalculatedReturn.fields.exchangeLineItems)
