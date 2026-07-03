---
title: SubscriptionDeliveryPolicy - GraphQL Admin
description: Represents a Subscription Delivery Policy.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Delivery​Policy

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Represents a Subscription Delivery Policy.

## Fields

* anchors

  [\[Selling​Plan​Anchor!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanAnchor)

  non-null

  The specific anchor dates upon which the delivery interval calculations should be made.

* interval

  [Selling​Plan​Interval!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanInterval)

  non-null

  The kind of interval that's associated with this schedule (e.g. Monthly, Weekly, etc).

* interval​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of delivery intervals between deliveries.

***

## Map

### Fields with this object

* [SubscriptionContract.deliveryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.deliveryPolicy)
* [SubscriptionDraft.deliveryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.deliveryPolicy)
