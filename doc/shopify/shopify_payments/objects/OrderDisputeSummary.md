---
title: OrderDisputeSummary - GraphQL Admin
description: A summary of the important details for a dispute on an order.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderDisputeSummary
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderDisputeSummary.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Order​Dispute​Summary

object

Requires `read_orders` access scope.

A summary of the important details for a dispute on an order.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* initiated​As

  [Dispute​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DisputeType)

  non-null

  The type that the dispute was initiated as.

* status

  [Dispute​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DisputeStatus)

  non-null

  The current status of the dispute.

***

## Map

### Fields with this object

* [Order.disputes](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.disputes)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## OrderDisputeSummary Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
