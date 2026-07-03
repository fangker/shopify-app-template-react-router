---
title: ReverseFulfillmentOrderLineItem - GraphQL Admin
description: The details about a reverse fulfillment order line item.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderLineItem
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderLineItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Reverse​Fulfillment​Order​Line​Item

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

The details about a reverse fulfillment order line item.

## Fields

* dispositions

  [\[Reverse​Fulfillment​Order​Disposition!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderDisposition)

  non-null

  The dispositions of the item.

* fulfillment​Line​Item

  [Fulfillment​Line​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItem)

  The corresponding fulfillment line item for a reverse fulfillment order line item.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* total​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The total number of units to be processed.

***

## Map

### Fields and connections with this object

* [ReverseDeliveryLineItem.reverseFulfillmentOrderLineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryLineItem#field-ReverseDeliveryLineItem.fields.reverseFulfillmentOrderLineItem)
* [ReverseFulfillmentOrder.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder#field-ReverseFulfillmentOrder.fields.lineItems)
* [ReverseFulfillmentOrderLineItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderLineItemConnection#returns-nodes)
* [ReverseFulfillmentOrderLineItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderLineItemEdge#field-ReverseFulfillmentOrderLineItemEdge.fields.node)

***

## Mutations

* [reverse​Fulfillment​Order​Dispose](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseFulfillmentOrderDispose)

  mutation

  Disposes reverse fulfillment order line items.

  * disposition​Inputs

    [\[Reverse​Fulfillment​Order​Dispose​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseFulfillmentOrderDisposeInput)

    required

    ### Arguments

    The input parameters required to dispose reverse fulfillment order line items.

  ***

***

## ReverseFulfillmentOrderLineItem Mutations

### Mutated by

* [reverse​Fulfillment​Order​Dispose](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseFulfillmentOrderDispose)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ReverseFulfillmentOrderLineItem Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
