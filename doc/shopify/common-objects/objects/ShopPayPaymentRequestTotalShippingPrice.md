---
title: ShopPayPaymentRequestTotalShippingPrice - GraphQL Admin
description: Represents a shipping total for a Shop Pay payment request.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestTotalShippingPrice
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestTotalShippingPrice.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shop​Pay​Payment​Request​Total​Shipping​Price

object

Represents a shipping total for a Shop Pay payment request.

## Fields

* discounts

  [\[Shop​Pay​Payment​Request​Discount!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestDiscount)

  non-null

  The discounts for the shipping total.

* final​Total

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The final total for the shipping line.

* original​Total

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The original total for the shipping line.

***

## Map

### Fields with this object

* [ShopPayPaymentRequest.totalShippingPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequest#field-ShopPayPaymentRequest.fields.totalShippingPrice)
