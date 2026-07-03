---
title: OrderPaymentCollectionDetails - GraphQL Admin
description: >-
  The payment collection details for an order that requires additional payment
  following an edit to the order.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderPaymentCollectionDetails
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderPaymentCollectionDetails.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Order​Payment​Collection​Details

object

Requires `read_orders` access scope.

The payment collection details for an order that requires additional payment following an edit to the order.

## Fields

* additional​Payment​Collection​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL to use for collecting an additional payment on the order.

* vaulted​Payment​Methods

  [\[Payment​Mandate!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandate)

  The list of vaulted payment methods for the order with their permissions.

***

## Map

### Fields with this object

* [Order.paymentCollectionDetails](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.paymentCollectionDetails)
