---
title: DiscountCustomerGets - GraphQL Admin
description: >-
  The items in the order that qualify for the discount, their quantities, and
  the total value of the discount.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerGets
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerGets.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Customer​Gets

object

Requires Apps must have `read_discounts` access scope.

The items in the order that qualify for the discount, their quantities, and the total value of the discount.

## Fields

* applies​On​One​Time​Purchase

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the discount applies on regular one-time-purchase items.

* applies​On​Subscription

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the discount applies on subscription items. [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts) enable customers to purchase products on a recurring basis.

* items

  [Discount​Items!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountItems)

  non-null

  The items to which the discount applies.

* value

  [Discount​Customer​Gets​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerGetsValue)

  non-null

  Entitled quantity and the discount value.

***

## Map

### Fields with this object

* [DiscountAutomaticBasic.customerGets](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic#field-DiscountAutomaticBasic.fields.customerGets)
* [DiscountAutomaticBxgy.customerGets](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy#field-DiscountAutomaticBxgy.fields.customerGets)
* [DiscountCodeBasic.customerGets](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.customerGets)
* [DiscountCodeBxgy.customerGets](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.customerGets)
