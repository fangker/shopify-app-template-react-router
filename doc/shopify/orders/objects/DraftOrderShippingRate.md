---
title: DraftOrderShippingRate - GraphQL Admin
description: >-
  A shipping rate is an additional cost added to the cost of the products that
  were ordered.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderShippingRate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderShippingRate.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Draft​Order​Shipping​Rate

object

Requires Any of `draft_orders`, `orders` or `shipping` access scopes or `manage_delivery_settings` user permission.

A shipping rate is an additional cost added to the cost of the products that were ordered.

## Fields

* code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The code of the shipping rate.

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Unique identifier for this shipping rate.

* price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The cost associated with the shipping rate.

* source

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The source of the shipping rate.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the shipping rate.

***

## Map

### Fields with this object

* [DraftOrderAvailableDeliveryOptions.availableLocalDeliveryRates](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAvailableDeliveryOptions#field-DraftOrderAvailableDeliveryOptions.fields.availableLocalDeliveryRates)
* [DraftOrderAvailableDeliveryOptions.availableShippingRates](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAvailableDeliveryOptions#field-DraftOrderAvailableDeliveryOptions.fields.availableShippingRates)
