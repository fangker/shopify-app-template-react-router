---
title: CashTrackingAdjustment - GraphQL Admin
description: >-
  Tracks an adjustment to the cash in a cash tracking session for a point of
  sale device over the course of a shift.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingAdjustment
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingAdjustment.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Cash​Tracking​Adjustment

object

Requires `read_cash_tracking` access scope.

Tracks an adjustment to the cash in a cash tracking session for a point of sale device over the course of a shift.

## Fields

* cash

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount of cash being added or removed.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The note entered when the adjustment was made.

* staff​Member

  [Staff​Member!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  non-null

  The staff member who made the adjustment.

* time

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The time when the adjustment was made.

***

## Map

### Fields and connections with this object

* [CashTrackingAdjustmentConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingAdjustmentConnection#returns-nodes)
* [CashTrackingAdjustmentEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingAdjustmentEdge#field-CashTrackingAdjustmentEdge.fields.node)
* [CashTrackingSession.adjustments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.adjustments)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## CashTrackingAdjustment Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
