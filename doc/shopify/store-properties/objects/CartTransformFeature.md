---
title: CartTransformFeature - GraphQL Admin
description: >-
  Provides access to the cart transform feature configuration for the merchant's

  store. This wrapper object indicates whether cart transformation capabilities

  are enabled and what operations are available.


  For example, when checking if your app can deploy customized bundle features,

  you would query this object to confirm cart transforms are supported and
  review

  the eligible operations.


  The feature configuration helps apps determine compatibility before attempting
  to create transform functions.


  Learn more about [cart
  transformation](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformFeature
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformFeature.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Cart​Transform​Feature

object

Provides access to the cart transform feature configuration for the merchant's store. This wrapper object indicates whether cart transformation capabilities are enabled and what operations are available.

For example, when checking if your app can deploy customized bundle features, you would query this object to confirm cart transforms are supported and review the eligible operations.

The feature configuration helps apps determine compatibility before attempting to create transform functions.

Learn more about [cart transformation](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform).

## Fields

* eligible​Operations

  [Cart​Transform​Eligible​Operations!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformEligibleOperations)

  non-null

  The cart transform operations eligible for the shop.

***

## Map

### Fields with this object

* [ShopFeatures.cartTransform](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopFeatures#field-ShopFeatures.fields.cartTransform)
