---
title: LocationSnapshot - GraphQL Admin
description: >-
  A snapshot of location details including name and address captured at a
  specific

  point in time. Refer to the parent model to know the lifecycle.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Location​Snapshot

object

A snapshot of location details including name and address captured at a specific point in time. Refer to the parent model to know the lifecycle.

## Fields

* address

  [Location​Address!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationAddress)

  non-null

  The address details of the location as they were when the snapshot was recorded.

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  A reference to the live Location object, if it still exists and is accessible. This provides current details of the location, which may differ from the snapshotted name and address.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the location as it was when the snapshot was recorded.

* snapshotted​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when these snapshot details (name and address) were recorded.

***

## Map

### Fields with this object

* [InventoryTransfer.destination](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.destination)
* [InventoryTransfer.origin](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.origin)
