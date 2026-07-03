---
title: SubscriptionBillingPolicy - GraphQL Admin
description: Represents a Subscription Billing Policy.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Billing​Policy

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Represents a Subscription Billing Policy.

## Fields

* anchors

  [\[Selling​Plan​Anchor!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanAnchor)

  non-null

  Specific anchor dates upon which the billing interval calculations should be made.

* interval

  [Selling​Plan​Interval!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanInterval)

  non-null

  The kind of interval that's associated with this schedule (e.g. Monthly, Weekly, etc).

* interval​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of billing intervals between invoices.

* max​Cycles

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Maximum amount of cycles after which the subscription ends.

* min​Cycles

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Minimum amount of cycles required in the subscription.

***

## Map

### Fields with this object

* [SubscriptionContract.billingPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.billingPolicy)
* [SubscriptionDraft.billingPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.billingPolicy)
