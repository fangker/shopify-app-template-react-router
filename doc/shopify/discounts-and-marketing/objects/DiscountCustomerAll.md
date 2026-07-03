---
title: DiscountCustomerAll - GraphQL Admin
description: >-
  Creates the broadest possible discount reach by targeting all customers,

  regardless of their purchase history or segment membership. This gives
  merchants

  maximum flexibility to run store-wide promotions without worrying about
  customer

  eligibility restrictions.


  For example, a flash sale or grand opening promotion would target all
  customers

  to maximize participation and store visibility.


  Learn more about [customer
  targeting](https://help.shopify.com/manual/discounts/).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerAll
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerAll.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Customer​All

object

Requires Apps must have `read_discounts` access scope.

Creates the broadest possible discount reach by targeting all customers, regardless of their purchase history or segment membership. This gives merchants maximum flexibility to run store-wide promotions without worrying about customer eligibility restrictions.

For example, a flash sale or grand opening promotion would target all customers to maximize participation and store visibility.

Learn more about [customer targeting](https://help.shopify.com/manual/discounts/).

## Fields

* all​Customers

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the discount can be applied by all customers. This value is always `true`.

***

## Map

### Possible type in

* [Discount​Customer​Selection](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerSelection)
