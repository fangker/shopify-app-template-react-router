---
title: SellingPlanFixedDeliveryPolicy - GraphQL Admin
description: Represents a fixed selling plan delivery policy.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedDeliveryPolicy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedDeliveryPolicy.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Selling​Plan​Fixed​Delivery​Policy

object

Requires `read_products` access scope.

Represents a fixed selling plan delivery policy.

## Fields

* anchors

  [\[Selling​Plan​Anchor!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanAnchor)

  non-null

  The specific anchor dates upon which the delivery interval calculations should be made.

* cutoff

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  A buffer period for orders to be included in next fulfillment anchor.

* fulfillment​Exact​Time

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the fulfillment should trigger.

* fulfillment​Trigger

  [Selling​Plan​Fulfillment​Trigger!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanFulfillmentTrigger)

  non-null

  What triggers the fulfillment. The value must be one of ANCHOR, ASAP, EXACT\_TIME, or UNKNOWN.

* intent

  [Selling​Plan​Fixed​Delivery​Policy​Intent!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanFixedDeliveryPolicyIntent)

  non-null

  Whether the delivery policy is merchant or buyer-centric. Buyer-centric delivery policies state the time when the buyer will receive the goods. Merchant-centric delivery policies state the time when the fulfillment should be started. Currently, only merchant-centric delivery policies are supported.

* pre​Anchor​Behavior

  [Selling​Plan​Fixed​Delivery​Policy​Pre​Anchor​Behavior!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanFixedDeliveryPolicyPreAnchorBehavior)

  non-null

  The fulfillment or delivery behavior of the first fulfillment when the order is placed before the anchor. The default value for this field is `ASAP`.

***

## Map

### Possible type in

* [Selling​Plan​Delivery​Policy](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanDeliveryPolicy)
