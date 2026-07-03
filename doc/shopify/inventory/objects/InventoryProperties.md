---
title: InventoryProperties - GraphQL Admin
description: General inventory properties for the shop.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryProperties
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryProperties.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Inventory​Properties

object

Requires `read_inventory` access scope.

General inventory properties for the shop.

## Fields

* quantity​Names

  [\[Inventory​Quantity​Name!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryQuantityName)

  non-null

  All the quantity names.

***

## Map

No referencing types

***

## Queries

* [inventory​Properties](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryProperties)

  query

  Returns the shop's inventory configuration, including all inventory quantity names. Quantity names represent different [inventory states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps#inventory-states) that merchants use to track inventory.

***

## InventoryProperties Queries

### Queried by

* [inventory​Properties](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryProperties)
