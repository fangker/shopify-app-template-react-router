---
title: InventoryQuantity - GraphQL Admin
description: >-
  The `InventoryQuantity` object lets you manage and track inventory quantities
  for specific
  [states](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states).

  Inventory quantities represent different states of items such as available for

  purchase, committed to orders, reserved for drafts, incoming from suppliers,
  or

  set aside for quality control or safety stock.


  You can use [inventory
  levels](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel)

  to manage where inventory items are stocked. You can also [make inventory
  adjustments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryAdjustQuantities)

  to apply changes to inventory quantities.


  Inventory quantities can be managed by a merchant or by [fulfillment
  services](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice)

  that handle inventory tracking.

  Learn more about working with [Shopify's inventory management

  system](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryQuantity'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryQuantity.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Inventory​Quantity

object

Requires `read_inventory` access scope.

The `InventoryQuantity` object lets you manage and track inventory quantities for specific [states](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states). Inventory quantities represent different states of items such as available for purchase, committed to orders, reserved for drafts, incoming from suppliers, or set aside for quality control or safety stock.

You can use [inventory levels](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel) to manage where inventory items are stocked. You can also [make inventory adjustments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryAdjustQuantities) to apply changes to inventory quantities.

Inventory quantities can be managed by a merchant or by [fulfillment services](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice) that handle inventory tracking. Learn more about working with [Shopify's inventory management system](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps).

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The inventory state [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states) that identifies the inventory quantity.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of an inventory item at a specific location, for a quantity [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states).

* updated​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  When the inventory quantity was last updated.

***

## Map

### Fields with this object

* [InventoryLevel.quantities](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel#field-InventoryLevel.fields.quantities)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## InventoryQuantity Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
