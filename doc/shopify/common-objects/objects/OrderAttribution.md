---
title: OrderAttribution - GraphQL Admin
description: The attribution details for an order.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAttribution'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAttribution.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Order​Attribution

object

The attribution details for an order.

## Fields

* display​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The display name of the attribution source.

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  An identifier for the attribution source.

* icon

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Sanitized SVG content used as the attribution source icon.

***

## Map

### Fields with this object

* [Order.attribution](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.attribution)
