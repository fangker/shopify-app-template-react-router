---
title: ReverseDeliveryLineItem - GraphQL Admin
description: The details about a reverse delivery line item.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryLineItem
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryLineItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Reverse​Delivery​Line​Item

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

The details about a reverse delivery line item.

## Fields

* dispositions

  [\[Reverse​Fulfillment​Order​Disposition!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderDisposition)

  non-null

  The dispositions of the item.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The expected number of units.

* reverse​Fulfillment​Order​Line​Item

  [Reverse​Fulfillment​Order​Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderLineItem)

  non-null

  The corresponding reverse fulfillment order line item.

***

## Map

### Fields and connections with this object

* [ReverseDelivery.reverseDeliveryLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDelivery#field-ReverseDelivery.fields.reverseDeliveryLineItems)
* [ReverseDeliveryLineItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryLineItemConnection#returns-nodes)
* [ReverseDeliveryLineItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryLineItemEdge#field-ReverseDeliveryLineItemEdge.fields.node)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ReverseDeliveryLineItem Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
