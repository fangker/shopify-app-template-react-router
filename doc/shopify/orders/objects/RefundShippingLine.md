---
title: RefundShippingLine - GraphQL Admin
description: A shipping line item that's included in a refund.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundShippingLine'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundShippingLine.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Refund​Shipping​Line

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

A shipping line item that's included in a refund.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* shipping​Line

  [Shipping​Line!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine)

  non-null

  The `ShippingLine` resource associated to the refunded shipping line item.

* subtotal​Amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The subtotal amount of the refund shipping line in shop and presentment currencies.

* tax​Amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The tax amount of the refund shipping line in shop and presentment currencies.

***

## Map

### Fields and connections with this object

* [Refund.refundShippingLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.refundShippingLines)
* [RefundShippingLineConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundShippingLineConnection#returns-nodes)
* [RefundShippingLineEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundShippingLineEdge#field-RefundShippingLineEdge.fields.node)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## RefundShippingLine Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
