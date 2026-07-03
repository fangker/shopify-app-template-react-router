---
title: ReverseDeliveryShippingDeliverable - GraphQL Admin
description: >-
  A reverse shipping deliverable that may include a label and tracking
  information.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryShippingDeliverable
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryShippingDeliverable.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Reverse​Delivery​Shipping​Deliverable

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

A reverse shipping deliverable that may include a label and tracking information.

## Fields

* label

  [Reverse​Delivery​Label​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryLabelV2)

  The return label attached to the reverse delivery.

* tracking

  [Reverse​Delivery​Tracking​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryTrackingV2)

  The information to track the reverse delivery.

***

## Map

### Possible type in

* [Reverse​Delivery​Deliverable](https://shopify.dev/docs/api/admin-graphql/latest/unions/ReverseDeliveryDeliverable)
