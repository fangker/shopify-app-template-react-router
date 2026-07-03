---
title: ShopifyPaymentsDisputeFulfillment - GraphQL Admin
description: The fulfillment associated with dispute evidence.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeFulfillment
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeFulfillment.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Dispute​Fulfillment

object

Requires `read_shopify_payments_dispute_evidences` access scope.

The fulfillment associated with dispute evidence.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* shipping​Carrier

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The shipping carrier for this fulfillment.

* shipping​Date

  [Date](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Date)

  The shipping date for this fulfillment.

* shipping​Tracking​Number

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The shipping tracking number for this fulfillment.

***

## Map

### Fields with this object

* [ShopifyPaymentsDisputeEvidence.fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence#field-ShopifyPaymentsDisputeEvidence.fields.fulfillments)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ShopifyPaymentsDisputeFulfillment Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
