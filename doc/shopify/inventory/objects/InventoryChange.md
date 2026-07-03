---
title: InventoryChange - GraphQL Admin
description: >-
  A change in an inventory quantity of an inventory item at a location. Each

  change tracks how inventory moves between different states like available,

  committed, reserved, or damaged.


  The change captures the [amount
  changed](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange#field-InventoryChange.fields.delta),
  the resulting
  [quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange#field-InventoryChange.fields.quantityAfterChange),

  and links to the associated
  [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)
  and
  [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location).


  The
  [`name`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange#field-InventoryChange.fields.name)
  field indicates which inventory state changed, such as `available`,
  `reserved`,

  or `damaged`. The
  [`ledgerDocumentUri`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange#field-InventoryChange.fields.ledgerDocumentUri)

  field provides an audit trail by referencing the source document or system
  that

  triggered the change.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Inventory​Change

object

Requires `read_inventory` access scope.

A change in an inventory quantity of an inventory item at a location. Each change tracks how inventory moves between different states like available, committed, reserved, or damaged.

The change captures the [amount changed](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange#field-InventoryChange.fields.delta), the resulting [quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange#field-InventoryChange.fields.quantityAfterChange), and links to the associated [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) and [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location).

The [`name`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange#field-InventoryChange.fields.name) field indicates which inventory state changed, such as `available`, `reserved`, or `damaged`. The [`ledgerDocumentUri`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange#field-InventoryChange.fields.ledgerDocumentUri) field provides an audit trail by referencing the source document or system that triggered the change.

## Fields

* delta

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The amount by which the inventory quantity was changed.

* item

  [Inventory​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

  The inventory item associated with this inventory change.

* ledger​Document​Uri

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A URI that represents what the inventory quantity change was applied to.

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location associated with this inventory change.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states) of the inventory quantity that was changed.

* quantity​After​Change

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The quantity of named inventory after the change.

***

## Map

### Fields with this object

* [InventoryAdjustmentGroup.changes](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup#field-InventoryAdjustmentGroup.fields.changes)
