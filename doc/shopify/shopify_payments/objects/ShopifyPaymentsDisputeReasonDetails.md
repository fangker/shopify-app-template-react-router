---
title: ShopifyPaymentsDisputeReasonDetails - GraphQL Admin
description: Details regarding a dispute reason.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeReasonDetails
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeReasonDetails.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Dispute​Reason​Details

object

Requires User must have `read_shopify_payments_disputes` access.

Details regarding a dispute reason.

## Fields

* network​Reason​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The raw code provided by the payment network.

* reason

  [Shopify​Payments​Dispute​Reason!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsDisputeReason)

  non-null

  The reason for the dispute provided by the cardholder's banks.

***

## Map

### Fields with this object

* [ShopifyPaymentsDispute.reasonDetails](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute#field-ShopifyPaymentsDispute.fields.reasonDetails)
