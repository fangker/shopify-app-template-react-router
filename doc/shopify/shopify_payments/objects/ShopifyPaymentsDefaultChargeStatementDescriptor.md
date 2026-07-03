---
title: ShopifyPaymentsDefaultChargeStatementDescriptor - GraphQL Admin
description: The charge descriptors for a payments account.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDefaultChargeStatementDescriptor
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDefaultChargeStatementDescriptor.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Default​Charge​Statement​Descriptor

object

Requires `read_shopify_payments` access scope.

The charge descriptors for a payments account.

## Fields

* default

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The default charge statement descriptor.

* prefix

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The prefix of the statement descriptor.

***

## Map

No referencing types

***

## Interfaces

* [Shopify​Payments​Charge​Statement​Descriptor](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ShopifyPaymentsChargeStatementDescriptor)

  interface

***

## ShopifyPaymentsDefaultChargeStatementDescriptor Implements

### Implements

* [Shopify​Payments​Charge​Statement​Descriptor](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ShopifyPaymentsChargeStatementDescriptor)
