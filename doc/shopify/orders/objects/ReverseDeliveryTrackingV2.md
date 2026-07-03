---
title: ReverseDeliveryTrackingV2 - GraphQL Admin
description: Represents the information used to track a reverse delivery.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryTrackingV2
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryTrackingV2.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Reverse​Delivery​Tracking​V2

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

Represents the information used to track a reverse delivery.

## Fields

* carrier​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The provider of the tracking information, in a human-readable format for display purposes.

* number

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The identifier used by the courier to identify the shipment.

* url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL to track a shipment.

***

## Map

### Fields with this object

* [ReverseDeliveryShippingDeliverable.tracking](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryShippingDeliverable#field-ReverseDeliveryShippingDeliverable.fields.tracking)
