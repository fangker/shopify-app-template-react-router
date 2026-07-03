---
title: FulfillmentOrderMerchantRequest - GraphQL Admin
description: >-
  A request made by the merchant or an order management app to a fulfillment
  service

  for a fulfillment order.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Fulfillment​Order​Merchant​Request

object

Requires `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope or `read_third_party_fulfillment_orders` access scope.

A request made by the merchant or an order management app to a fulfillment service for a fulfillment order.

## Fields

* fulfillment​Order

  [Fulfillment​Order!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  non-null

  The fulfillment order associated with the merchant request.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* kind

  [Fulfillment​Order​Merchant​Request​Kind!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderMerchantRequestKind)

  non-null

  The kind of request made.

* message

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The optional message that the merchant included in the request.

* request​Options

  [JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

  Additional options requested by the merchant. These depend on the `kind` of the request. For example, for a `FULFILLMENT_REQUEST`, one option is `notify_customer`, which indicates whether the merchant intends to notify the customer upon fulfillment. The fulfillment service can then set `notifyCustomer` when making calls to `FulfillmentCreate`.

* response​Data

  [JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

  The response from the fulfillment service.

* sent​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The timestamp when the request was made.

***

## Map

### Fields and connections with this object

* [FulfillmentOrder.merchantRequests](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.merchantRequests)
* [FulfillmentOrderMerchantRequestConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderMerchantRequestConnection#returns-nodes)
* [FulfillmentOrderMerchantRequestEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequestEdge#field-FulfillmentOrderMerchantRequestEdge.fields.node)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## FulfillmentOrderMerchantRequest Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
