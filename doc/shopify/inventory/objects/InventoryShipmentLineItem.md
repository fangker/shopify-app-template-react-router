---
title: InventoryShipmentLineItem - GraphQL Admin
description: Represents a single line item within an inventory shipment.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItem
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Inventory​Shipment​Line​Item

object

Requires `read_inventory_shipments` access scope.

Represents a single line item within an inventory shipment.

## Fields

* accepted​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of items that were accepted in this shipment line item.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* inventory​Item

  [Inventory​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

  The inventory item associated with this line item.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of items in this shipment line item.

* rejected​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of items that were rejected in this shipment line item.

* unreceived​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The total quantity of units that haven't been received (neither accepted or rejected) in this shipment line item.

***

## Map

### Fields and connections with this object

* [InventoryShipment.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment#field-InventoryShipment.fields.lineItems)
* [InventoryShipmentLineItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentLineItemConnection#returns-nodes)
* [InventoryShipmentLineItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItemEdge#field-InventoryShipmentLineItemEdge.fields.node)

***

## Mutations

* [inventory​Shipment​Add​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentAddItems)

  mutation

  Adds items to an inventory shipment.

  ***

  **Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to modify.

  * line​Items

    [\[Inventory​Shipment​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentLineItemInput)

    required

    The list of line items to add to the inventory shipment.

  ***

* [inventory​Shipment​Update​Item​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentUpdateItemQuantities)

  mutation

  Updates items on an inventory shipment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to update item quantities.

  * items

    [\[Inventory​Shipment​Update​Item​Quantities​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentUpdateItemQuantitiesInput)

    Default:\[]

    The list of line items to be updated to the shipment.

  ***

***

## InventoryShipmentLineItem Mutations

### Mutated by

* [inventory​Shipment​Add​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentAddItems)
* [inventory​Shipment​Update​Item​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentUpdateItemQuantities)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## InventoryShipmentLineItem Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
