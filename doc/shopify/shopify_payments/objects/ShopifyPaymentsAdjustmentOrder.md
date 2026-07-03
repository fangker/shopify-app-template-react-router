---
title: ShopifyPaymentsAdjustmentOrder - GraphQL Admin
description: The adjustment order object.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAdjustmentOrder
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAdjustmentOrder.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Adjustment​Order

object

Requires The user must have access to payouts.

The adjustment order object.

## Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount of the adjustment order.

* fees

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The fee of the adjustment order.

* link

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The link to the adjustment order.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the adjustment order.

* net

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The net of the adjustment order.

* order​Transaction​Id

  [Big​Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/BigInt)

  non-null

  The ID of the order transaction.

***

## Map

### Fields with this object

* [ShopifyPaymentsBalanceTransaction.adjustmentsOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction#field-ShopifyPaymentsBalanceTransaction.fields.adjustmentsOrders)
