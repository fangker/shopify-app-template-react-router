---
title: shippingLabelPurchase - GraphQL Admin
description: Purchases shipping label.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingLabelPurchase
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingLabelPurchase.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# shipping​Label​Purchase

mutation

Requires `write_orders` access scope. Also: The user must have `buy_shipping_labels` permission.

Purchases shipping label.

## Arguments

* shipping​Label​Purchase

  [Shipping​Label​Purchase​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShippingLabelPurchaseInput)

  required

  The input for the shipping label purchase.

***

## Shipping​Label​Purchase​Payload returns

* shipping​Label​Purchase​Result

  [Shipping​Label​Purchase​Result](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLabelPurchaseResult)

  The result of the shipping label purchase request.

* user​Errors

  [\[Shipping​Label​Purchase​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLabelPurchaseUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### shippingLabelPurchase reference
