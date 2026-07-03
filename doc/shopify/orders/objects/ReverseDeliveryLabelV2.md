---
title: ReverseDeliveryLabelV2 - GraphQL Admin
description: The return label file information for a reverse delivery.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryLabelV2
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryLabelV2.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Reverse​Delivery​Label​V2

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

The return label file information for a reverse delivery.

## Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the reverse delivery label was created.

* public​File​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  A public link that can be used to download the label image.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the reverse delivery label was updated.

***

## Map

### Fields with this object

* [ReverseDeliveryShippingDeliverable.label](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryShippingDeliverable#field-ReverseDeliveryShippingDeliverable.fields.label)
