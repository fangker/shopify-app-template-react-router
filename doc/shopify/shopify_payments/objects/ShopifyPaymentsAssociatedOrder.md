---
title: ShopifyPaymentsAssociatedOrder - GraphQL Admin
description: The order associated to the balance transaction.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAssociatedOrder
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAssociatedOrder.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Associated​Order

object

Requires The user must have access to payouts.

The order associated to the balance transaction.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the associated order.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the associated order.

***

## Map

### Fields with this object

* [ShopifyPaymentsBalanceTransaction.associatedOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction#field-ShopifyPaymentsBalanceTransaction.fields.associatedOrder)
