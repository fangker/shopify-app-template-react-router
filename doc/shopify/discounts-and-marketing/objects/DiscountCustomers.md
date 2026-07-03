---
title: DiscountCustomers - GraphQL Admin
description: >-
  Defines customer targeting for discounts through specific individual
  customers.

  This object allows merchants to create exclusive discounts that are only

  available to explicitly selected customers.


  For example, a VIP customer appreciation discount might target specific

  high-value customers by individually selecting them, or a beta program
  discount

  could be offered to selected early adopters.


  Use `DiscountCustomers` to:

  - Target specific individual customers for exclusive promotions

  - Create personalized discount experiences for selected customers

  - Offer special discounts to VIP or loyal customers

  - Provide exclusive access to promotions for specific individuals


  This targeting method requires you to add each customer who should be eligible

  for the discount. For broader targeting based on customer attributes or
  segments, use
  [`DiscountCustomerSegments`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerSegments)
  instead.


  Learn more about creating customer-specific discounts using
  [`discountCodeBasicCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate)
  and
  [`discountCodeBasicUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomers'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomers.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Customers

object

Requires Apps must have `read_discounts` access scope.

Defines customer targeting for discounts through specific individual customers. This object allows merchants to create exclusive discounts that are only available to explicitly selected customers.

For example, a VIP customer appreciation discount might target specific high-value customers by individually selecting them, or a beta program discount could be offered to selected early adopters.

Use `DiscountCustomers` to:

* Target specific individual customers for exclusive promotions
* Create personalized discount experiences for selected customers
* Offer special discounts to VIP or loyal customers
* Provide exclusive access to promotions for specific individuals

This targeting method requires you to add each customer who should be eligible for the discount. For broader targeting based on customer attributes or segments, use [`DiscountCustomerSegments`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerSegments) instead.

Learn more about creating customer-specific discounts using [`discountCodeBasicCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate) and [`discountCodeBasicUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate).

## Fields

* customers

  [\[Customer!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  non-null

  The list of individual customers eligible for the discount.

***

## Map

### Possible type in

* [Discount​Context](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountContext)
* [Discount​Customer​Selection](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerSelection)
