---
title: InventoryTransferLineItemUpdate - GraphQL Admin
description: Represents an update to a single transfer line item.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItemUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItemUpdate.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Inventory​Transfer​Line​Item​Update

object

Requires `read_inventory` access scope.

Represents an update to a single transfer line item.

## Fields

* delta​Quantity

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The delta quantity for the transfer line item.

* inventory​Item​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The inventory item ID for the transfer line item.

* new​Quantity

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The new quantity for the transfer line item.

***

## Map

No referencing types

***

## Mutations

* [inventory​Transfer​Remove​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems)

  mutation

  This mutation removes [`InventoryTransferLineItem`s](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem), or portions of them, from a `DRAFT` or `READY_TO_SHIP` Transfer.

  For each referenced line item, if its entire quantity is still unallocated to a shipment, the line item is removed; otherwise the line item remains on the transfer with its quantity reduced to the allocated portion. Quantity allocated to a shipment (whether the shipment is in draft, in transit, or already received) is preserved.

  On `READY_TO_SHIP` transfers, removing items also returns the affected reserved quantity to available inventory at the origin location.

  To change the quantity of a line item without removing it, use [`inventoryTransferSetItems`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems).

  * input

    [Inventory​Transfer​Remove​Items​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferRemoveItemsInput)

    required

    ### Arguments

    The input fields for the InventoryTransferRemoveItems mutation.

  ***

* [inventory​Transfer​Set​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems)

  mutation

  This mutation sets the quantity for one or more line items on a Transfer.

  Only the items you include in the `lineItems` field are updated. Items already on the transfer but not referenced in your update will stay unchanged. Each inventory item may appear at most once in `lineItems`; duplicate `inventoryItemId` entries are rejected.

  For each entry in `lineItems`:

  * If the inventory item isn't yet on the transfer, a new line item is added with the provided quantity.
  * If the inventory item is already on the transfer, the provided quantity replaces the line item's [`processableQuantity`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem#field-InventoryTransferLineItem.fields.processableQuantity). Any quantity outside the processable portion (for example, already shipped or picked for shipment) is preserved, so the resulting total quantity equals the preserved portion plus the provided quantity.

  Passing a quantity of `0` is only allowed for transfers in `DRAFT` status; on `READY_TO_SHIP` or `IN_PROGRESS` transfers it returns an `INVALID_QUANTITY` error. On `DRAFT` transfers, `quantity: 0` leaves a zero-quantity line item on the transfer; it does not remove the item. To remove a line item from a transfer, use [`inventoryTransferRemoveItems`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems).

  ***

  **Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * input

    [Inventory​Transfer​Set​Items​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferSetItemsInput)

    required

    ### Arguments

    The input fields for the InventoryTransferSetItems mutation.

  ***

***

## InventoryTransferLineItemUpdate Mutations

### Mutated by

* [inventory​Transfer​Remove​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems)
* [inventory​Transfer​Set​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems)
