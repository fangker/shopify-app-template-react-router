---
title: CustomerJourneySummary - GraphQL Admin
description: >-
  A
  [`CustomerJourney`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourney)
  through the online store leading up to an

  [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).

  Tracks session data, attribution sources, and the timeline from first visit to

  purchase conversion.


  The summary includes the customer's position in their order history, days

  between first visit and order creation, and details about their first and last

  sessions. Use the
  [`moments`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourneySummary#field-moments)

  connection to access the complete timeline of customer interactions before the
  purchase.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourneySummary
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourneySummary.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Journey​Summary

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

A [`CustomerJourney`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourney) through the online store leading up to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Tracks session data, attribution sources, and the timeline from first visit to purchase conversion.

The summary includes the customer's position in their order history, days between first visit and order creation, and details about their first and last sessions. Use the [`moments`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourneySummary#field-moments) connection to access the complete timeline of customer interactions before the purchase.

## Fields

* customer​Order​Index

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The position of the current order within the customer's order history. Test orders aren't included.

* days​To​Conversion

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The number of days between the first session and the order creation date. The first session represents the first session since the last order, or the first session within the 30 day attribution window, if more than 30 days have passed since the last order.

* first​Visit

  [Customer​Visit](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisit)

  The customer's first session going into the shop.

* last​Visit

  [Customer​Visit](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisit)

  The last session before an order is made.

* moments

  [Customer​Moment​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerMomentConnection)

  The events preceding a customer's order, such as shop sessions.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* moments​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The total number of customer moments associated with this order. Returns null if the order is still in the process of being attributed.

* ready

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the attributed sessions for the order have been created yet.

***

## Map

### Fields with this object

* [Order.customerJourneySummary](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.customerJourneySummary)
