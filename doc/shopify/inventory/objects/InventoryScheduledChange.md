---
title: InventoryScheduledChange - GraphQL Admin
description: >-
  Returns the scheduled changes to inventory states related to the ledger
  document.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryScheduledChange
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryScheduledChange.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Inventory​Scheduled​Change

object

Requires `read_inventory` access scope.

Returns the scheduled changes to inventory states related to the ledger document.

## Fields

* expected​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time that the scheduled change is expected to happen.

* from​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The quantity [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps/quantities-states#move-inventory-quantities-between-states) to transition from.

* inventory​Level

  [Inventory​Level!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

  non-null

  The quantities of an inventory item that are related to a specific location.

* ledger​Document​Uri

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  A freeform URI that represents what changed the inventory quantities.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the scheduled change associated with the ledger document in the `fromName` state.

* to​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The quantity [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps/quantities-states#move-inventory-quantities-between-states) to transition to.

***

## Map

### Fields and connections with this object

* [InventoryScheduledChangeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryScheduledChangeConnection#returns-nodes)
* [InventoryScheduledChangeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryScheduledChangeEdge#field-InventoryScheduledChangeEdge.fields.node)
