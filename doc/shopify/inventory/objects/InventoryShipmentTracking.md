---
title: InventoryShipmentTracking - GraphQL Admin
description: Represents the tracking information for an inventory shipment.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentTracking
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentTracking.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Inventory​Shipment​Tracking

object

Requires `read_inventory_shipments` access scope.

Represents the tracking information for an inventory shipment.

## Fields

* arrives​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The estimated date and time that the shipment will arrive.

* company

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the shipping carrier company.

* tracking​Number

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The tracking number used by the carrier to identify the shipment.

* tracking​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL to track the shipment.

  Given a tracking number and a shipping carrier company name from [the list](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#field-company), Shopify will return a generated tracking URL if no tracking URL was set manually.

***

## Map

### Fields with this object

* [InventoryShipment.tracking](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment#field-InventoryShipment.fields.tracking)
