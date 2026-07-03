---
title: ShopifyPaymentsJpChargeStatementDescriptor - GraphQL Admin
description: The charge descriptors for a Japanese payments account.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsJpChargeStatementDescriptor
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsJpChargeStatementDescriptor.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Jp​Charge​Statement​Descriptor

object

Requires `read_shopify_payments` access scope.

The charge descriptors for a Japanese payments account.

## Fields

* default

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The default charge statement descriptor.

* prefix

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The prefix of the statement descriptor.

### Deprecated fields

* kana

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

* kanji

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

***

## Map

No referencing types

***

## Interfaces

* [Shopify​Payments​Charge​Statement​Descriptor](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ShopifyPaymentsChargeStatementDescriptor)

  interface

***

## ShopifyPaymentsJpChargeStatementDescriptor Implements

### Implements

* [Shopify​Payments​Charge​Statement​Descriptor](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ShopifyPaymentsChargeStatementDescriptor)
