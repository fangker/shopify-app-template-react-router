---
title: ExchangeLineItem - GraphQL Admin
description: An item for exchange.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ExchangeLineItem'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ExchangeLineItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Exchange​Line​Item

object

Requires `read_returns` access scope.

An item for exchange.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* line​Items

  [\[Line​Item!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

  The order line items for the exchange.

* processable​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the exchange item that can be processed.

* processed​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the exchange item that have been processed.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of units ordered, including refunded and removed units.

* unprocessed​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the exchange item that haven't been processed.

* variant​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the variant at time of return creation.

* line​Item

  [Line​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

  Deprecated

***

## Map

### Fields and connections with this object

* [ExchangeLineItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ExchangeLineItemConnection#returns-nodes)
* [ExchangeLineItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExchangeLineItemEdge#field-ExchangeLineItemEdge.fields.node)
* [Return.exchangeLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.exchangeLineItems)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ExchangeLineItem Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
