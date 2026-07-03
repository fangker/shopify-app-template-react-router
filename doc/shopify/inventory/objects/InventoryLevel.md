---
title: InventoryLevel - GraphQL Admin
description: >-
  The quantities of an inventory item at a specific location. Each inventory
  level connects one
  [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)
  to one
  [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location),

  tracking multiple quantity states like available, on-hand, incoming, and
  committed.


  The
  [`quantities`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel#field-InventoryLevel.fields.quantities)
  field provides access to different inventory states. Learn [more about
  inventory states and
  relationships](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Inventory​Level

object

Requires `read_inventory` access scope.

The quantities of an inventory item at a specific location. Each inventory level connects one [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) to one [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location), tracking multiple quantity states like available, on-hand, incoming, and committed.

The [`quantities`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel#field-InventoryLevel.fields.quantities) field provides access to different inventory states. Learn [more about inventory states and relationships](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

## Fields

* can​Deactivate

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the inventory items associated with the inventory level can be deactivated.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the inventory level was created.

* deactivation​Alert

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Describes either the impact of deactivating the inventory level, or why the inventory level can't be deactivated.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* is​Active

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the inventory level is active.

* item

  [Inventory​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

  non-null

  Inventory item associated with the inventory level.

* location

  [Location!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  non-null

  The location associated with the inventory level.

* quantities

  [\[Inventory​Quantity!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryQuantity)

  non-null

  The quantity of an inventory item at a specific location, for a quantity [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states).

  * names

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The [names](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states) of the requested inventory quantities.

  ***

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the inventory level was updated.

* scheduled​Changes

  [Inventory​Scheduled​Change​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryScheduledChangeConnection)

  non-nullDeprecated

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * expected\_at

      time

    * * id

        id

      * quantity\_names

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Scheduled​Change​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ScheduledChangeSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## Map

### Fields and connections with this object

* [InventoryItem.inventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.inventoryLevel)
* [InventoryItem.inventoryLevels](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.inventoryLevels)
* [InventoryLevelConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryLevelConnection#returns-nodes)
* [InventoryLevelEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevelEdge#field-InventoryLevelEdge.fields.node)
* [InventoryScheduledChange.inventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryScheduledChange#field-InventoryScheduledChange.fields.inventoryLevel)
* [Location.inventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.inventoryLevel)
* [Location.inventoryLevels](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.inventoryLevels)

***

## Queries

* [inventory​Level](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryLevel)

  query

  Returns an [InventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) object by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `InventoryLevel` to return.

  ***

***

## InventoryLevel Queries

### Queried by

* [inventory​Level](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryLevel)

***

## Mutations

* [inventory​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryActivate)

  mutation

  Activates an inventory item at a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) by creating an [`InventoryLevel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) that tracks stock quantities. This enables you to manage inventory for a [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) at the specified location.

  When you activate an inventory item, you can set its initial quantities. The [`available`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryActivate#arguments-available) argument sets the quantity that's available for sale. [`onHand`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryActivate#arguments-onHand) argument sets the total physical quantity at the location. If you don't specify quantities, then `available` and `onHand` default to zero.

  ***

  **Caution:** As of version \<code>2026-01\</code>, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of version \<code>2026-04\</code>, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * available

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    The initial available quantity of the inventory item being activated at the location.

  * inventory​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the inventory item to activate.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the location of the inventory item being activated.

  * on​Hand

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The initial on\_hand quantity of the inventory item being activated at the location.

  * stock​At​Legacy​Location

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Allow activation at or away from fulfillment service location with sku sharing off. This will deactivate inventory at all other locations.

  ***

* [inventory​Bulk​Toggle​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryBulkToggleActivation)

  mutation

  Activates or deactivates an inventory item at multiple locations. When you activate an [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) at a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location), that location can stock and track quantities for that item. When you deactivate an inventory item at a location, the inventory item is no longer stocked at that location.

  The mutation accepts an inventory item ID and a list of location-specific activation settings. It returns the updated inventory item and any activated [`InventoryLevel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) objects.

  Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

  * inventory​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory item to modify the activation status locations for.

  * inventory​Item​Updates

    [\[Inventory​Bulk​Toggle​Activation​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryBulkToggleActivationInput)

    required

    A list of pairs of locations and activate status to update for the specified inventory item.

  ***

***

## InventoryLevel Mutations

### Mutated by

* [inventory​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryActivate)
* [inventory​Bulk​Toggle​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryBulkToggleActivation)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## InventoryLevel Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
