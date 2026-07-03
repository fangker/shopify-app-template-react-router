---
title: SellingPlanRecurringDeliveryPolicy - GraphQL Admin
description: Represents a recurring selling plan delivery policy.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanRecurringDeliveryPolicy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanRecurringDeliveryPolicy.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Selling​Plan​Recurring​Delivery​Policy

object

Requires `read_products` access scope.

Represents a recurring selling plan delivery policy.

## Fields

* anchors

  [\[Selling​Plan​Anchor!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanAnchor)

  non-null

  The specific anchor dates upon which the delivery interval calculations should be made.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the selling plan delivery policy was created.

* cutoff

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Number of days which represent a buffer period for orders to be included in a cycle.

* intent

  [Selling​Plan​Recurring​Delivery​Policy​Intent!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanRecurringDeliveryPolicyIntent)

  non-null

  Whether the delivery policy is merchant or buyer-centric. Buyer-centric delivery policies state the time when the buyer will receive the goods. Merchant-centric delivery policies state the time when the fulfillment should be started. Currently, only merchant-centric delivery policies are supported.

* interval

  [Selling​Plan​Interval!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanInterval)

  non-null

  The delivery frequency, it can be either: day, week, month or year.

* interval​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of intervals between deliveries.

* pre​Anchor​Behavior

  [Selling​Plan​Recurring​Delivery​Policy​Pre​Anchor​Behavior!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanRecurringDeliveryPolicyPreAnchorBehavior)

  non-null

  The fulfillment or delivery behavior of the first fulfillment when the order is placed before the anchor. The default value for this field is `ASAP`.

***

## Map

### Possible type in

* [Selling​Plan​Delivery​Policy](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanDeliveryPolicy)
