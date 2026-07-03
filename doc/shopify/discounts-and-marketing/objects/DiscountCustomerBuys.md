---
title: DiscountCustomerBuys - GraphQL Admin
description: >-
  The prerequisite items and prerequisite value that a customer must have on the
  order for the discount to be applicable.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerBuys
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerBuys.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Customer​Buys

object

Requires Apps must have `read_discounts` access scope.

The prerequisite items and prerequisite value that a customer must have on the order for the discount to be applicable.

## Fields

* is​One​Time​Purchase

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  If the discount is applicable when a customer buys a one-time purchase.

* is​Subscription

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  If the discount is applicable when a customer buys a subscription purchase.

* items

  [Discount​Items!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountItems)

  non-null

  The items required for the discount to be applicable.

* value

  [Discount​Customer​Buys​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerBuysValue)

  non-null

  The prerequisite value.

***

## Map

### Fields with this object

* [DiscountAutomaticBxgy.customerBuys](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy#field-DiscountAutomaticBxgy.fields.customerBuys)
* [DiscountCodeBxgy.customerBuys](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.customerBuys)
