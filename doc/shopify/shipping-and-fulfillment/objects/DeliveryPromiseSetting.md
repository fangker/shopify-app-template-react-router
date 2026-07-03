---
title: DeliveryPromiseSetting - GraphQL Admin
description: The delivery promise settings.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseSetting
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseSetting.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Promise​Setting

object

Requires `read_shipping` access scope or `read_shop_promise_program` access scope.

The delivery promise settings.

## Fields

* delivery​Dates​Enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether delivery dates is enabled.

* processing​Time

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The number of business days required for processing the order before the package is handed off to the carrier. Expressed as an ISO8601 duration.

***

## Map

No referencing types

***

## Queries

* [delivery​Promise​Settings](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryPromiseSettings)

  query

  Represents the delivery promise settings for a shop.

***

## DeliveryPromiseSetting Queries

### Queried by

* [delivery​Promise​Settings](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryPromiseSettings)
