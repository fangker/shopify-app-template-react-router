---
title: InventoryItem - GraphQL Admin
description: >-
  A [product
  variant's](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)
  inventory information across all locations. The inventory item connects the

  product variant to its [inventory
  levels](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

  at different locations, tracking stock keeping unit (SKU), whether quantities

  are tracked, shipping requirements, and customs information for the product.


  Learn more about [inventory object
  relationships](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Inventory​Item

object

Requires `read_inventory` access scope or `read_products` access scope.

A [product variant's](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) inventory information across all locations. The inventory item connects the product variant to its [inventory levels](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) at different locations, tracking stock keeping unit (SKU), whether quantities are tracked, shipping requirements, and customs information for the product.

Learn more about [inventory object relationships](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

## Fields

* country​Code​Of​Origin

  [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The ISO 3166-1 alpha-2 country code of where the item originated from.

* country​Harmonized​System​Codes

  [Country​Harmonized​System​Code​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CountryHarmonizedSystemCodeConnection)

  non-null

  A list of country specific harmonized system codes.

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

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the inventory item was created.

* duplicate​Sku​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of inventory items that share the same SKU with this item.

* harmonized​System​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The harmonized system code of the item. This must be a number between 6 and 13 digits.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* inventory​History​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL that points to the inventory history for the item.

* inventory​Level

  [Inventory​Level](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

  The inventory item's quantities at the specified location.

  * include​Inactive

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Whether to return the inventory level if it is inactive.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ID of the location for which the inventory level is requested.

  ***

* inventory​Levels

  [Inventory​Level​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryLevelConnection)

  non-null

  A list of the inventory item's quantities for each location that the inventory item can be stocked at.

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

  * include​Inactive

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to include inactive inventory levels.

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * * id

        id

      * inventory\_group\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * inventory\_item\_id

      id

    * updated\_at

      time

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* legacy​Resource​Id

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The ID of the corresponding resource in the REST Admin API.

* locations​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of locations where this inventory item is stocked.

* measurement

  [Inventory​Item​Measurement!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItemMeasurement)

  non-null

  The packaging dimensions of the inventory item.

* province​Code​Of​Origin

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The ISO 3166-2 alpha-2 province code of where the item originated from.

* requires​Shipping

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the inventory item requires shipping.

* sku

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Inventory item SKU. Case-sensitive string.

* tracked

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether inventory levels are tracked for the item.

* tracked​Editable

  [Editable​Property!](https://shopify.dev/docs/api/admin-graphql/latest/objects/EditableProperty)

  non-null

  Whether the value of the `tracked` field for the inventory item can be changed.

* unit​Cost

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  Unit cost associated with the inventory item. Note: the user must have "View product costs" permission granted in order to access this field once product granular permissions are enabled.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the inventory item was updated.

* variants

  [Product​Variant​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection)

  A paginated list of the variants that reference this inventory item.

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

  ***

* variant

  [Product​Variant!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [InventoryChange.item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange#field-InventoryChange.fields.item)
* [InventoryItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryItemConnection#returns-nodes)
* [InventoryItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItemEdge#field-InventoryItemEdge.fields.node)
* [InventoryLevel.item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel#field-InventoryLevel.fields.item)
* [InventoryShipmentLineItem.inventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItem#field-InventoryShipmentLineItem.fields.inventoryItem)
* [InventoryTransferLineItem.inventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem#field-InventoryTransferLineItem.fields.inventoryItem)
* [ProductVariant.inventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.inventoryItem)

***

## Queries

* [inventory​Item](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryItem)

  query

  Returns an [InventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) object by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `InventoryItem` to return.

  ***

* [inventory​Items](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryItems)

  query

  Returns a list of inventory items.

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

    * created\_at

      time

    * * id

        id

      * sku

        string

      * updated\_at

        time

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the inventory item [`sku`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

      - Example:
        * `sku:XYZ-12345`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

## InventoryItem Queries

### Queried by

* [inventory​Item](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryItem)
* [inventory​Items](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryItems)

***

## Mutations

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

* [inventory​Item​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryItemUpdate)

  mutation

  Updates an [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)'s properties including whether inventory is tracked, cost, SKU, and whether shipping is required. Inventory items represent the goods available to be shipped to customers.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory item to update.

  * input

    [Inventory​Item​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryItemInput)

    required

    The input fields that update an [`inventoryItem`](https://shopify.dev/api/admin-graphql/latest/queries/inventoryitem).

  ***

***

## InventoryItem Mutations

### Mutated by

* [inventory​Bulk​Toggle​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryBulkToggleActivation)
* [inventory​Item​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryItemUpdate)

***

## Interfaces

* * [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## InventoryItem Implements

### Implements

* [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
