---
title: CartTransformEligibleOperations - GraphQL Admin
description: >-
  Controls which cart transformation operations apps can perform in your store.

  This lets you define exactly what types of cart modifications are allowed
  based

  on your checkout setup and business needs.


  The eligible operations determine what cart transform functions can
  accomplish,

  providing a clear boundary for app capabilities within the store's ecosystem.


  Learn more about [cart transform
  operations](https://shopify.dev/docs/api/functions/latest/cart-transform#multiple-operations).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformEligibleOperations
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformEligibleOperations.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Cart​Transform​Eligible​Operations

object

Controls which cart transformation operations apps can perform in your store. This lets you define exactly what types of cart modifications are allowed based on your checkout setup and business needs.

The eligible operations determine what cart transform functions can accomplish, providing a clear boundary for app capabilities within the store's ecosystem.

Learn more about [cart transform operations](https://shopify.dev/docs/api/functions/latest/cart-transform#multiple-operations).

## Fields

* expand​Operation

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  The shop is eligible for expand operations.

* merge​Operation

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  The shop is eligible for merge operations.

* update​Operation

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  The shop is eligible for update operations.

***

## Map

### Fields with this object

* [CartTransformFeature.eligibleOperations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformFeature#field-CartTransformFeature.fields.eligibleOperations)
