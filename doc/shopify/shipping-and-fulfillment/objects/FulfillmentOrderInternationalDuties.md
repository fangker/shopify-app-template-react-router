---
title: FulfillmentOrderInternationalDuties - GraphQL Admin
description: The international duties relevant to a fulfillment order.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderInternationalDuties
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderInternationalDuties.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Fulfillment​Order​International​Duties

object

Requires `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope or `read_third_party_fulfillment_orders` access scope.

The international duties relevant to a fulfillment order.

## Fields

* incoterm

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The method of duties payment. Example values: `DDP`, `DAP`.

***

## Map

### Fields with this object

* [FulfillmentOrder.internationalDuties](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.internationalDuties)
