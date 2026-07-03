---
title: FulfillmentOrderSupportedAction - GraphQL Admin
description: One of the actions that the fulfillment order supports in its current state.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSupportedAction
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSupportedAction.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Fulfillment​Order​Supported​Action

object

Requires `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope or `read_third_party_fulfillment_orders` access scope.

One of the actions that the fulfillment order supports in its current state.

## Fields

* action

  [Fulfillment​Order​Action!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderAction)

  non-null

  The action value.

* external​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The external URL to be used to initiate the fulfillment process outside Shopify. Applicable only when the `action` value is `EXTERNAL`.

***

## Map

### Fields with this object

* [FulfillmentOrder.supportedActions](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.supportedActions)
