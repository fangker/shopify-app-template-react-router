---
title: ShippingRate - GraphQL Admin
description: >-
  A shipping option associated with order delivery that includes pricing and
  service information.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingRate'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingRate.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shipping​Rate

object

Requires Any of `draft_orders`, `orders` or `shipping` access scopes or `manage_delivery_settings` user permission.

A shipping option associated with order delivery that includes pricing and service information.

## Fields

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Human-readable unique identifier for this shipping rate.

* price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The cost associated with the shipping rate.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the shipping rate.

***

## Map

### Fields with this object

* [CalculatedDraftOrder.availableShippingRates](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-CalculatedDraftOrder.fields.availableShippingRates)
