---
title: MetafieldCapabilityCartToOrderCopyable - GraphQL Admin
description: >-
  Information about the cart to order copyable capability on a metafield
  definition.

  Only order metafield definitions are eligible to have this capability enabled.


  When enabled, the value from a cart metafield is automatically copied to the
  corresponding

  order metafield when an order is created. The namespace and key must match
  between the cart and order metafields.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilityCartToOrderCopyable
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilityCartToOrderCopyable.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Metafield​Capability​Cart​To​Order​Copyable

object

Information about the cart to order copyable capability on a metafield definition. Only order metafield definitions are eligible to have this capability enabled.

When enabled, the value from a cart metafield is automatically copied to the corresponding order metafield when an order is created. The namespace and key must match between the cart and order metafields.

## Fields

* eligible

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Indicates if the definition is eligible to have the capability.

* enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Indicates if the capability is enabled.

***

## Map

### Fields with this object

* [MetafieldCapabilities.cartToOrderCopyable](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilities#field-MetafieldCapabilities.fields.cartToOrderCopyable)
