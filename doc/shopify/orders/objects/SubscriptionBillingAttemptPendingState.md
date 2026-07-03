---
title: SubscriptionBillingAttemptPendingState - GraphQL Admin
description: The billing attempt is currently being processed.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptPendingState
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptPendingState.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Billing​Attempt​Pending​State

object

Requires `read_own_subscription_contracts` access scope.

The billing attempt is currently being processed.

## Fields

* processing

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Always true when the billing attempt is pending.

***

## Map

### Possible type in

* [Subscription​Billing​Attempt​State](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionBillingAttemptState)
