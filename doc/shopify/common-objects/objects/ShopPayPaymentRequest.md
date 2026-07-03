---
title: ShopPayPaymentRequest - GraphQL Admin
description: Represents a Shop Pay payment request.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequest
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequest.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shop​Pay​Payment​Request

object

Represents a Shop Pay payment request.

## Fields

* discounts

  [\[Shop​Pay​Payment​Request​Discount!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestDiscount)

  The discounts for the payment request order.

* line​Items

  [\[Shop​Pay​Payment​Request​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestLineItem)

  non-null

  The line items for the payment request.

* presentment​Currency

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  The presentment currency for the payment request.

* selected​Delivery​Method​Type

  [Shop​Pay​Payment​Request​Delivery​Method​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopPayPaymentRequestDeliveryMethodType)

  non-null

  The delivery method type for the payment request.

* shipping​Address

  [Shop​Pay​Payment​Request​Contact​Field](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestContactField)

  The shipping address for the payment request.

* shipping​Lines

  [\[Shop​Pay​Payment​Request​Shipping​Line!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestShippingLine)

  non-null

  The shipping lines for the payment request.

* subtotal

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The subtotal amount for the payment request.

* total

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The total amount for the payment request.

* total​Shipping​Price

  [Shop​Pay​Payment​Request​Total​Shipping​Price](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestTotalShippingPrice)

  The total shipping price for the payment request.

* total​Tax

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The total tax for the payment request.

***

## Map

### Fields with this object

* [ShopPayPaymentRequestReceipt.paymentRequest](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceipt#field-ShopPayPaymentRequestReceipt.fields.paymentRequest)
