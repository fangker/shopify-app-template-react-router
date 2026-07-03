---
title: InventoryQuantityName - GraphQL Admin
description: Details about an individual quantity name.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryQuantityName
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryQuantityName.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Inventory​Quantity​Name

object

Requires `read_inventory` access scope.

Details about an individual quantity name.

## Fields

* belongs​To

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  List of quantity names that this quantity name belongs to.

* comprises

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  List of quantity names that comprise this quantity name.

* display​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The display name for quantity names translated into applicable language.

* is​In​Use

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the quantity name has been used by the merchant.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states) of the inventory quantity. Used by [inventory queries and mutations](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#graphql-queries-and-mutations).

***

## Map

### Fields with this object

* [InventoryProperties.quantityNames](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryProperties#field-InventoryProperties.fields.quantityNames)
