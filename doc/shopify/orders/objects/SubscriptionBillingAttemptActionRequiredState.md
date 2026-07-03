---
title: SubscriptionBillingAttemptActionRequiredState - GraphQL Admin
description: >-
  The billing attempt state that requires an action to resolve.

  Must complete the action required for the billing attempt to continue being
  processed.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptActionRequiredState
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptActionRequiredState.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Billing​Attempt​Action​Required​State

object

Requires `read_own_subscription_contracts` access scope.

The billing attempt state that requires an action to resolve. Must complete the action required for the billing attempt to continue being processed.

## Fields

* action

  [Subscription​Billing​Attempt​Action!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionBillingAttemptAction)

  non-null

  The action required to resolve the billing attempt.

***

## Map

### Possible type in

* [Subscription​Billing​Attempt​State](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionBillingAttemptState)
