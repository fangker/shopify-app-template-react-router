---
title: DeliveryMethod - GraphQL Admin
description: >-
  Information about the delivery method selected for a
  [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder).

  Includes the method type, expected delivery timeframe, and any additional

  information needed for delivery.


  The delivery method stores details from checkout such as the carrier, branded

  promises like Shop Promise, and the delivery option name shown to the buyer.

  Additional information like delivery instructions or contact phone numbers
  helps fulfill

  the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)
  correctly.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethod'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethod.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Method

object

Requires `read_orders` access scope, `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope, `read_third_party_fulfillment_orders` access scope or `read_marketplace_fulfillment_orders` access scope.

Information about the delivery method selected for a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder). Includes the method type, expected delivery timeframe, and any additional information needed for delivery.

The delivery method stores details from checkout such as the carrier, branded promises like Shop Promise, and the delivery option name shown to the buyer. Additional information like delivery instructions or contact phone numbers helps fulfill the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) correctly.

## Fields

* additional​Information

  [Delivery​Method​Additional​Information](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodAdditionalInformation)

  The Additional information to consider when performing the delivery.

* branded​Promise

  [Delivery​Branded​Promise](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryBrandedPromise)

  The branded promise that was presented to the buyer during checkout. For example: Shop Promise.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* max​Delivery​Date​Time

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The latest delivery date and time when the fulfillment is expected to arrive at the buyer's location.

* method​Type

  [Delivery​Method​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryMethodType)

  non-null

  The type of the delivery method.

* min​Delivery​Date​Time

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The earliest delivery date and time when the fulfillment is expected to arrive at the buyer's location.

* presented​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the delivery option that was presented to the buyer during checkout.

* service​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A reference to the shipping method.

* source​Reference

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Source reference is promise provider specific data associated with delivery promise.

***

## Map

### Fields with this object

* [FulfillmentOrder.deliveryMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.deliveryMethod)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## DeliveryMethod Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
