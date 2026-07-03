---
title: OrderStagedChangeAddShippingLine - GraphQL Admin
description: >-
  A new [shipping
  line](https://shopify.dev/api/admin-graphql/latest/objects/shippingline)

  added as part of an order edit.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeAddShippingLine
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeAddShippingLine.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Order​Staged​Change​Add​Shipping​Line

object

Requires `read_order_edits` access scope.

A new [shipping line](https://shopify.dev/api/admin-graphql/latest/objects/shippingline) added as part of an order edit.

## Fields

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The phone number at the shipping address.

* presentment​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The shipping line's title that's shown to the buyer.

* price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The price that applies to the shipping line.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of the shipping line.

***

## Map

### Possible type in

* [Order​Staged​Change](https://shopify.dev/docs/api/admin-graphql/latest/unions/OrderStagedChange)
