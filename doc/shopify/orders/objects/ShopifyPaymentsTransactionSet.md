---
title: ShopifyPaymentsTransactionSet - GraphQL Admin
description: >-
  Presents all Shopify Payments specific information related to an order
  transaction.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsTransactionSet
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsTransactionSet.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Transaction​Set

object

Requires `read_orders` access scope.

Presents all Shopify Payments specific information related to an order transaction.

## Fields

* extended​Authorization​Set

  [Shopify​Payments​Extended​Authorization](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsExtendedAuthorization)

  Contains all fields related to an extended authorization.

* refund​Set

  [Shopify​Payments​Refund​Set](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsRefundSet)

  Contains all fields related to a refund.

***

## Map

### Fields with this object

* [OrderTransaction.shopifyPaymentsSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.shopifyPaymentsSet)
