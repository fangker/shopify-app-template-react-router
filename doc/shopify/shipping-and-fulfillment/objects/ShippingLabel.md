---
title: ShippingLabel - GraphQL Admin
description: The optional shipping label for this fulfillment.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLabel'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLabel.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shipping​Label

object

Requires `read_orders` access scope.

The optional shipping label for this fulfillment.

## Fields

* cancellable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Indicates whether the label is cancellable or not.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location of the shipping origin. This will be null when the shipping origin is unknown.

* printed

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Indicates whether the label was printed or not.

* shipping​Documents

  [\[Shipping​Objects​Shipping​Document!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingObjectsShippingDocument)

  non-null

  The documents for a shipping label.

* tracking​Info

  [Fulfillment​Tracking​Info](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentTrackingInfo)

  Tracking information for the shipping label.

***

## Map

### Fields with this object

* [ShippingLabelPurchaseResult.shippingLabels](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLabelPurchaseResult#field-ShippingLabelPurchaseResult.fields.shippingLabels)

***

## Queries

* [shipping​Label](https://shopify.dev/docs/api/admin-graphql/latest/queries/shippingLabel)

  query

  Returns a `ShippingLabel` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `ShippingLabel` to return.

  ***

***

## ShippingLabel Queries

### Queried by

* [shipping​Label](https://shopify.dev/docs/api/admin-graphql/latest/queries/shippingLabel)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ShippingLabel Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
