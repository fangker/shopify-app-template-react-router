---
title: OrderAdjustment - GraphQL Admin
description: >-
  An order adjustment accounts for the difference between a calculated and
  actual refund amount.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAdjustment'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAdjustment.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Order​Adjustment

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

An order adjustment accounts for the difference between a calculated and actual refund amount.

## Fields

* amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The amount of the order adjustment in shop and presentment currencies.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* reason

  [Order​Adjustment​Discrepancy​Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderAdjustmentDiscrepancyReason)

  An optional reason that explains a discrepancy between calculated and actual refund amounts.

* tax​Amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The tax amount of the order adjustment in shop and presentment currencies.

***

## Map

### Fields and connections with this object

* [OrderAdjustmentConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderAdjustmentConnection#returns-nodes)
* [OrderAdjustmentEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAdjustmentEdge#field-OrderAdjustmentEdge.fields.node)
* [Refund.orderAdjustments](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.orderAdjustments)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## OrderAdjustment Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
