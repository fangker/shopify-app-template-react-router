---
title: FulfillmentHold - GraphQL Admin
description: A fulfillment hold currently applied on a fulfillment order.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentHold'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentHold.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Fulfillment​Hold

object

Requires `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope, `read_third_party_fulfillment_orders` access scope or `read_marketplace_fulfillment_orders` access scope.

A fulfillment hold currently applied on a fulfillment order.

## Fields

* display​Reason

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The localized reason for the fulfillment hold for display purposes.

* handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  An identifier an app can use to reference one of many holds it applied to a fulfillment order. This field must be unique among the holds that a single app applies to a single fulfillment order.

* held​By​App

  [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  The app that created the fulfillment hold.

* held​By​Requesting​App

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  A boolean value that indicates whether the requesting app created the fulfillment hold.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* reason

  [Fulfillment​Hold​Reason!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentHoldReason)

  non-null

  The reason for the fulfillment hold.

* reason​Notes

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Additional information about the fulfillment hold reason.

***

## Map

### Fields with this object

* [FulfillmentOrder.fulfillmentHolds](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.fulfillmentHolds)

***

## Mutations

* [fulfillment​Order​Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderHold)

  mutation

  Applies a fulfillment hold on a fulfillment order.

  As of the [2025-01 API version](https://shopify.dev/changelog/apply-multiple-holds-to-a-single-fulfillment-order), the mutation can be successfully executed on fulfillment orders that are already on hold. To place multiple holds on a fulfillment order, apps need to supply the [handle](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentHold#field-handle) field. Each app can place up to 10 active holds per fulfillment order. If an app attempts to place more than this, the mutation will return [a user error indicating that the limit has been reached](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderHoldUserErrorCode#value-fulfillmentorderholdlimitreached). The app would need to release one of its existing holds before being able to apply a new one.

  * fulfillment​Hold

    [Fulfillment​Order​Hold​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderHoldInput)

    required

    ### Arguments

    The details of the fulfillment hold applied on the fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the fulfillment order on which a fulfillment hold is applied.

  ***

***

## FulfillmentHold Mutations

### Mutated by

* [fulfillment​Order​Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderHold)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## FulfillmentHold Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
