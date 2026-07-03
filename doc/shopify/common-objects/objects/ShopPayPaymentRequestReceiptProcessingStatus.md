---
title: ShopPayPaymentRequestReceiptProcessingStatus - GraphQL Admin
description: >-
  The processing status of a Shop Pay payment request.

  Represents the different states a payment request can be in during its
  lifecycle,

  from initial creation through to completion or failure.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceiptProcessingStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceiptProcessingStatus.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shop​Pay​Payment​Request​Receipt​Processing​Status

object

The processing status of a Shop Pay payment request. Represents the different states a payment request can be in during its lifecycle, from initial creation through to completion or failure.

## Fields

* error​Code

  [Shop​Pay​Payment​Request​Receipt​Processing​Status​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopPayPaymentRequestReceiptProcessingStatusErrorCode)

  A standardized error code, independent of the payment provider.

* message

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The message of the payment request receipt.

* state

  [Shop​Pay​Payment​Request​Receipt​Processing​Status​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopPayPaymentRequestReceiptProcessingStatusState)

  non-null

  The state of the payment request receipt.

***

## Map

### Fields with this object

* [ShopPayPaymentRequestReceipt.processingStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceipt#field-ShopPayPaymentRequestReceipt.fields.processingStatus)
