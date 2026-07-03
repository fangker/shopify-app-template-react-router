---
title: shippingLabel - GraphQL Admin
description: Returns a `ShippingLabel` resource by ID.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/shippingLabel'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/shippingLabel.md'
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# shipping​Label

query

Returns a `ShippingLabel` resource by ID.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the `ShippingLabel` to return.

***

## Possible returns

* Shipping​Label

  [Shipping​Label](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLabel)

  The optional shipping label for this fulfillment.

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

## Examples

* ### shippingLabel reference
