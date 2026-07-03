---
title: shopPayPaymentRequestReceipt - GraphQL Admin
description: |-
  Returns a single Shop Pay payment request receipt by its ID. Payment request
  receipts document completed Shop Pay transactions, including the amount,
  customer details, and payment status. Use this to look up a specific Shop Pay
  transaction for order reconciliation or customer support.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/shopPayPaymentRequestReceipt
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/shopPayPaymentRequestReceipt.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# shop​Pay​Payment​Request​Receipt

query

Returns a single Shop Pay payment request receipt by its ID. Payment request receipts document completed Shop Pay transactions, including the amount, customer details, and payment status. Use this to look up a specific Shop Pay transaction for order reconciliation or customer support.

## Arguments

* token

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  Unique identifier of the payment request receipt.

***

## Possible returns

* Shop​Pay​Payment​Request​Receipt

  [Shop​Pay​Payment​Request​Receipt](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceipt)

  The receipt of Shop Pay payment request session submission.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the payment request receipt was created.

  * order

    [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

    The order that's associated with the payment request receipt.

  * payment​Request

    [Shop​Pay​Payment​Request!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequest)

    non-null

    The shop pay payment request object.

  * processing​Status

    [Shop​Pay​Payment​Request​Receipt​Processing​Status!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceiptProcessingStatus)

    non-null

    The status of the payment request session submission.

  * source​Identifier

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The source identifier provided in the `ShopPayPaymentRequestSessionCreate` mutation.

  * token

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The token of the receipt, initially returned by an `ShopPayPaymentRequestSessionSubmit` mutation.

***

## Examples

* ### shopPayPaymentRequestReceipt reference
