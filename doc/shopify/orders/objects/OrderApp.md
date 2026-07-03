---
title: OrderApp - GraphQL Admin
description: >-
  Identifies the
  [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) that

  created an order. Common sources include "online store" for web purchases,

  "Point of Sale" for in-person sales, or custom app names for orders created

  through third-party integrations.


  Use this information to track order attribution, analyze sales channels, and

  route orders to appropriate fulfillment workflows based on their source.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderApp'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderApp.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Order​App

object

Requires `read_orders` access scope.

Identifies the [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) that created an order. Common sources include "online store" for web purchases, "Point of Sale" for in-person sales, or custom app names for orders created through third-party integrations.

Use this information to track order attribution, analyze sales channels, and route orders to appropriate fulfillment workflows based on their source.

## Fields

* icon

  [Image!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  non-null

  The application icon.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The application ID.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the application.

***

## Map

### Fields with this object

* [Order.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.app)
* [Order.merchantOfRecordApp](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.merchantOfRecordApp)
