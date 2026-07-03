---
title: FulfillmentOrderLineItemWarning - GraphQL Admin
description: >-
  A fulfillment order line item warning. For example, a warning about why a
  fulfillment request was rejected.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemWarning
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemWarning.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Fulfillment​Order​Line​Item​Warning

object

Requires `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope or `read_third_party_fulfillment_orders` access scope.

A fulfillment order line item warning. For example, a warning about why a fulfillment request was rejected.

## Fields

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description of warning.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of warning.

***

## Map

### Fields with this object

* [FulfillmentOrderLineItem.warnings](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem#field-FulfillmentOrderLineItem.fields.warnings)
