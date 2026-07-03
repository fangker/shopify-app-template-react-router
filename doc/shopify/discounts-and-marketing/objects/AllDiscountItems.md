---
title: AllDiscountItems - GraphQL Admin
description: >-
  Represents a discount configuration that applies to all items in a customer's

  cart without restriction. This object enables store-wide promotions that
  affect

  every product equally.


  For example, a "Sitewide 10% Off Everything" sale would target all items,

  ensuring that every product in the customer's cart receives the promotional

  discount regardless of category or collection.


  This universal targeting approach simplifies promotional campaigns and
  provides

  customers with clear, straightforward savings across the entire product
  catalog.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# All​Discount​Items

object

Requires Apps must have `read_discounts` access scope.

Represents a discount configuration that applies to all items in a customer's cart without restriction. This object enables store-wide promotions that affect every product equally.

For example, a "Sitewide 10% Off Everything" sale would target all items, ensuring that every product in the customer's cart receives the promotional discount regardless of category or collection.

This universal targeting approach simplifies promotional campaigns and provides customers with clear, straightforward savings across the entire product catalog.

## Fields

* all​Items

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether all items are eligible for the discount. This value always returns `true`.

***

## Map

### Possible type in

* [Discount​Items](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountItems)
