---
title: InventoryAdjustmentGroup - GraphQL Admin
description: >-
  Records a batch of inventory changes made together in a single operation.
  Tracks

  which [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)
  or
  [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  initiated the changes, when they occurred, and why they were made.


  Provides an audit trail through its reason and reference document URI. The

  reference document URI links to the source that triggered the adjustment, such
  as

  an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order),
  [`InventoryTransfer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer),

  or external system event. Use the
  [`changes`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup#field-InventoryAdjustmentGroup.fields.changes)

  field to retrieve the specific quantity adjustments for each inventory state
  at affected

  [locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Inventory​Adjustment​Group

object

Requires `read_inventory` access scope.

Records a batch of inventory changes made together in a single operation. Tracks which [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) or [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) initiated the changes, when they occurred, and why they were made.

Provides an audit trail through its reason and reference document URI. The reference document URI links to the source that triggered the adjustment, such as an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), [`InventoryTransfer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer), or external system event. Use the [`changes`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup#field-InventoryAdjustmentGroup.fields.changes) field to retrieve the specific quantity adjustments for each inventory state at affected [locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location).

## Fields

* app

  [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  The app that triggered the inventory event, if one exists.

* changes

  [\[Inventory​Change!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange)

  non-null

  The set of inventory quantity changes that occurred in the inventory event.

  * inventory​Item​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The IDs of the inventory items to filter changes by.

  * location​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the locations to filter changes by.

  * quantity​Names

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The [names](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states) of the requested inventory quantities.

  ***

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time the inventory adjustment group was created.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* reason

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The reason for the group of adjustments.

* reference​Document​Uri

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A freeform URI that represents why the inventory change happened. This can be the entity adjusting inventory quantities or the Shopify resource that's associated with the inventory adjustment. For example, a unit in a draft order might have been previously reserved, and a merchant later creates an order from the draft order. In this case, the `referenceDocumentUri` for the inventory adjustment is a URI referencing the order ID.

* staff​Member

  [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  The staff member associated with the inventory event.

***

## Map

No referencing types

***

## Mutations

* [inventory​Adjust​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryAdjustQuantities)

  mutation

  Adjusts quantities for inventory items by applying incremental changes at specific locations. Each adjustment modifies the quantity by a delta value rather than setting an absolute amount.

  The mutation tracks adjustments with a reason code and optional reference URI for audit trails. Returns an [`InventoryAdjustmentGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup) that records all changes made in the operation.

  Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#adjust-inventory-quantities).

  ***

  **Caution:** As of version \<code>2026-01\</code>, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of version \<code>2026-04\</code>, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * input

    [Inventory​Adjust​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryAdjustQuantitiesInput)

    required

    ### Arguments

    The information required to adjust inventory quantities.

  ***

* [inventory​Move​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryMoveQuantities)

  mutation

  Moves inventory quantities for a single inventory item between different states at a single location. Use this mutation to reallocate inventory across quantity states without moving it between locations.

  Each change specifies the quantity to move, the source state and location, and the destination state and location. The mutation returns an [`InventoryAdjustmentGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup) that tracks all changes made in a single operation, providing an audit trail with the reason and reference document URI.

  ***

  **Caution:** As of version \<code>2026-01\</code>, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of version \<code>2026-04\</code>, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * input

    [Inventory​Move​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryMoveQuantitiesInput)

    required

    ### Arguments

    The information required to move inventory quantities.

  ***

* [inventory​Set​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetQuantities)

  mutation

  Set quantities of specified name using absolute values. This mutation supports compare-and-set functionality to handle concurrent requests properly. If `ignoreCompareQuantity` is not set to true, the mutation will only update the quantity if the persisted quantity matches the `compareQuantity` value. If the `compareQuantity` value does not match the persisted value, the mutation will return an error. In order to opt out of the `compareQuantity` check, the `ignoreCompareQuantity` argument can be set to true.

  ***

  **Note:** Only use this mutation if calling on behalf of a system that acts as the source of truth for inventory quantities, otherwise please consider using the \<a href="https://shopify.dev/api/admin-graphql/latest/mutations/inventoryAdjustQuantities">inventoryAdjustQuantities\</a> mutation.\</p> \<p>Opting out of the \<code>\<span class="PreventFireFoxApplyingGapToWBR">compare\<wbr/>Quantity\</span>\</code> check can lead to inaccurate inventory quantities if multiple requests are made concurrently. It is recommended to always include the \<code>\<span class="PreventFireFoxApplyingGapToWBR">compare\<wbr/>Quantity\</span>\</code> value to ensure the accuracy of the inventory quantities and to opt out of the check using \<code>\<span class="PreventFireFoxApplyingGapToWBR">ignore\<wbr/>Compare\<wbr/>Quantity\</span>\</code> only when necessary.

  ***

  ***

  **Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * input

    [Inventory​Set​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetQuantitiesInput)

    required

    ### Arguments

    The information required to set inventory quantities.

  ***

* [inventory​Set​On​Hand​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetOnHandQuantities)

  mutation

  Deprecated

  * input

    [Inventory​Set​On​Hand​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetOnHandQuantitiesInput)

    required

    ### Arguments

    The information required to set inventory on hand quantities.

  ***

***

## InventoryAdjustmentGroup Mutations

### Mutated by

* [inventory​Adjust​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryAdjustQuantities)
* [inventory​Move​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryMoveQuantities)
* [inventory​Set​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetQuantities)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## InventoryAdjustmentGroup Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
