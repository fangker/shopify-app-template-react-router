---
title: inventoryShipmentMarkInTransit - GraphQL Admin
description: Marks a draft inventory shipment as in transit.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentMarkInTransit
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentMarkInTransit.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# inventory​Shipment​Mark​In​Transit

mutation

Requires `write_inventory_shipments` access scope. Also: The user must have permission to manage inventory.

Marks a draft inventory shipment as in transit.

## Arguments

* date​Shipped

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date the shipment was shipped.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the inventory shipment to mark in transit.

***

## Inventory​Shipment​Mark​In​Transit​Payload returns

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The marked in transit inventory shipment.

* user​Errors

  [\[Inventory​Shipment​Mark​In​Transit​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentMarkInTransitUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### inventoryShipmentMarkInTransit reference
