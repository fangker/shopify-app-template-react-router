---
title: ShopPayPaymentRequestLineItem - GraphQL Admin
description: Represents a line item for a Shop Pay payment request.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestLineItem
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestLineItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shop​Pay​Payment​Request​Line​Item

object

Represents a line item for a Shop Pay payment request.

## Fields

* final​Item​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The final item price for the line item.

* final​Line​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The final line price for the line item.

* image

  [Shop​Pay​Payment​Request​Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestImage)

  The image of the line item.

* item​Discounts

  [\[Shop​Pay​Payment​Request​Discount!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestDiscount)

  The item discounts for the line item.

* label

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The label of the line item.

* line​Discounts

  [\[Shop​Pay​Payment​Request​Discount!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestDiscount)

  The line discounts for the line item.

* original​Item​Price

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The original item price for the line item.

* original​Line​Price

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The original line price for the line item.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the line item.

* requires​Shipping

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the line item requires shipping.

* sku

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The SKU of the line item.

***

## Map

### Fields with this object

* [ShopPayPaymentRequest.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequest#field-ShopPayPaymentRequest.fields.lineItems)
