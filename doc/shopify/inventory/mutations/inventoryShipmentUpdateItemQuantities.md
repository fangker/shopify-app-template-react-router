---
title: inventoryShipmentUpdateItemQuantities - GraphQL Admin
description: Updates items on an inventory shipment.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentUpdateItemQuantities
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentUpdateItemQuantities.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# inventory​Shipment​Update​Item​Quantities

mutation

Requires `write_inventory_shipments` access scope. Also: The user must have permission to manage inventory.

Updates items on an inventory shipment.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the inventory shipment to update item quantities.

* items

  [\[Inventory​Shipment​Update​Item​Quantities​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentUpdateItemQuantitiesInput)

  Default:\[]

  The list of line items to be updated to the shipment.

***

## Inventory​Shipment​Update​Item​Quantities​Payload returns

* shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The inventory shipment with updated item quantities.

* updated​Line​Items

  [\[Inventory​Shipment​Line​Item!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItem)

  The updated item quantities.

* user​Errors

  [\[Inventory​Shipment​Update​Item​Quantities​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentUpdateItemQuantitiesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### inventoryShipmentUpdateItemQuantities reference
