---
title: inventoryShipments - GraphQL Admin
description: >-
  Returns a paginated list of
  [`InventoryShipment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)
  objects.


  Supports filtering by barcode (e.g. `barcode:"12345"`), status (e.g.

  `status:"draft"` or `status:"in_transit"`), and destination (e.g.

  `destination_id:12345`).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryShipments'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryShipments.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# inventory​Shipments

query

Requires `read_inventory_shipments` access scope.

Returns a paginated list of [`InventoryShipment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment) objects.

Supports filtering by barcode (e.g. `barcode:"12345"`), status (e.g. `status:"draft"` or `status:"in_transit"`), and destination (e.g. `destination_id:12345`).

## InventoryShipmentConnection arguments

[InventoryShipmentConnection](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentConnection)

* after

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

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

  * barcode

    string

  * destination\_id

    id

  * * id

      id

    * status

      string

    - Filter by `id` range.

    - Example:
      * `id:1234`
      * `id:>=1234`
      * `id:<=1234`

  * tracking\_number

    string

* sort​Key

  [Inventory​Shipment​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentSortKeys)

  Default:ID

  Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

***

## Possible returns

* edges

  [\[Inventory​Shipment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Inventory​Shipment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  non-null

  A list of nodes that are contained in InventoryShipmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Examples

* ### inventoryShipments reference
