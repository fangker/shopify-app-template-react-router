---
title: inventoryTransferRemoveItems - GraphQL Admin
description: >-
  This mutation removes
  [`InventoryTransferLineItem`s](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem),

  or portions of them, from a `DRAFT` or `READY_TO_SHIP` Transfer.


  For each referenced line item, if its entire quantity is still unallocated to
  a

  shipment, the line item is removed; otherwise the line item remains on the

  transfer with its quantity reduced to the allocated portion. Quantity
  allocated

  to a shipment (whether the shipment is in draft, in transit, or already

  received) is preserved.


  On `READY_TO_SHIP` transfers, removing items also returns the affected
  reserved

  quantity to available inventory at the origin location.


  To change the quantity of a line item without removing it, use

  [`inventoryTransferSetItems`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# inventory​Transfer​Remove​Items

mutation

Requires `write_inventory_transfers` access scope. Also: The user must have permission to manage inventory.

This mutation removes [`InventoryTransferLineItem`s](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem), or portions of them, from a `DRAFT` or `READY_TO_SHIP` Transfer.

For each referenced line item, if its entire quantity is still unallocated to a shipment, the line item is removed; otherwise the line item remains on the transfer with its quantity reduced to the allocated portion. Quantity allocated to a shipment (whether the shipment is in draft, in transit, or already received) is preserved.

On `READY_TO_SHIP` transfers, removing items also returns the affected reserved quantity to available inventory at the origin location.

To change the quantity of a line item without removing it, use [`inventoryTransferSetItems`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems).

## Arguments

* input

  [Inventory​Transfer​Remove​Items​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferRemoveItemsInput)

  required

  The input fields for the InventoryTransferRemoveItems mutation.

***

## Inventory​Transfer​Remove​Items​Payload returns

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The transfer with line items removed.

* removed​Quantities

  [\[Inventory​Transfer​Line​Item​Update!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItemUpdate)

  The line items that have had their shippable quantity removed.

* user​Errors

  [\[Inventory​Transfer​Remove​Items​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferRemoveItemsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### inventoryTransferRemoveItems reference
