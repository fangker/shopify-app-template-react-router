---
title: BundlesFeature - GraphQL Admin
description: Represents the Bundles feature configuration for the shop.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/BundlesFeature'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/BundlesFeature.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Bundles​Feature

object

Represents the Bundles feature configuration for the shop.

## Fields

* eligible​For​Bundles

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a shop is configured properly to sell bundles.

* ineligibility​Reason

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The reason why a shop is not eligible for bundles.

* sells​Bundles

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a shop has any fixed bundle products or has a cartTransform function installed.

***

## Map

### Fields with this object

* [ShopFeatures.bundles](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopFeatures#field-ShopFeatures.fields.bundles)
