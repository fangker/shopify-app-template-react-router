---
title: inventoryShipmentSetBarcode - GraphQL Admin
description: Sets the barcode on an inventory shipment.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentSetBarcode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentSetBarcode.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# inventory​Shipment​Set​Barcode

mutation

Requires `write_inventory_shipments` access scope. Also: The user must have permission to manage inventory shipments.

Sets the barcode on an inventory shipment.

## Arguments

* barcode

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  A unique barcode for the shipment.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the inventory shipment to set the barcode on.

***

## Inventory​Shipment​Set​Barcode​Payload returns

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The inventory shipment with the updated barcode.

* user​Errors

  [\[Inventory​Shipment​Set​Barcode​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentSetBarcodeUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### inventoryShipmentSetBarcode reference
