---
title: InventoryTransferLineItem - GraphQL Admin
description: Represents a line item belonging to an inventory transfer.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Inventory​Transfer​Line​Item

object

Requires `read_inventory_transfers` access scope. Also: The user must have permission to view products.

Represents a line item belonging to an inventory transfer.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* inventory​Item

  [Inventory​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

  The inventory item associated with this line item.

* picked​For​Shipment​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the item that has been picked for a draft shipment but not yet shipped.

* processable​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the item that can be actioned upon, such as editing the item quantity on the transfer or adding to a shipment.

* shippable​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the item that can be shipped.

* shipped​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the item that has been shipped.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of the product associated with this line item.

* total​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The total quantity of items being transferred.

***

## Map

### Fields and connections with this object

* [InventoryTransfer.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.lineItems)
* [InventoryTransferLineItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferLineItemConnection#returns-nodes)
* [InventoryTransferLineItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItemEdge#field-InventoryTransferLineItemEdge.fields.node)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## InventoryTransferLineItem Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
