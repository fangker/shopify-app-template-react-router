---
title: ShopifyPaymentsRefundSet - GraphQL Admin
description: Presents all Shopify Payments specific information related to an order refund.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsRefundSet
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsRefundSet.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Refund​Set

object

Requires `read_orders` access scope.

Presents all Shopify Payments specific information related to an order refund.

## Fields

* acquirer​Reference​Number

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The acquirer reference number (ARN) code generated for Visa/Mastercard transactions.

***

## Map

### Fields with this object

* [ShopifyPaymentsTransactionSet.refundSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsTransactionSet#field-ShopifyPaymentsTransactionSet.fields.refundSet)
