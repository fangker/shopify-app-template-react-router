---
title: CustomerJourney - GraphQL Admin
description: >-
  Tracks a customer's path to purchase through their online store visits. The

  journey captures key moments like shop sessions that led to the order, helping

  merchants understand customer behavior and marketing attribution within a
  30-day

  window. Includes the first and last sessions before an

  [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order),
  the

  time between initial visit and conversion, and the customer's order position
  in

  their purchase history.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourney'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourney.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Journey

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

Tracks a customer's path to purchase through their online store visits. The journey captures key moments like shop sessions that led to the order, helping merchants understand customer behavior and marketing attribution within a 30-day window. Includes the first and last sessions before an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), the time between initial visit and conversion, and the customer's order position in their purchase history.

## Fields

* customer​Order​Index

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The position of the current order within the customer's order history.

* days​To​Conversion

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The amount of days between first session and order creation date. First session represents first session since the last order, or first session within the 30 day attribution window, if more than 30 days has passed since the last order.

* first​Visit

  [Customer​Visit!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisit)

  non-null

  The customer's first session going into the shop.

* last​Visit

  [Customer​Visit](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisit)

  The last session before an order is made.

* moments

  [\[Customer​Moment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerMoment)

  non-null

  Events preceding a customer order, such as shop sessions.

***

## Map
