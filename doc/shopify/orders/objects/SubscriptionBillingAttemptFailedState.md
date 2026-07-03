---
title: SubscriptionBillingAttemptFailedState - GraphQL Admin
description: The billing attempt failed due to an error.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptFailedState
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptFailedState.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Billing​Attempt​Failed​State

object

Requires `read_own_subscription_contracts` access scope.

The billing attempt failed due to an error.

## Fields

* error

  [Subscription​Billing​Attempt​Error!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionBillingAttemptError)

  non-null

  The error that caused the billing attempt to fail.

***

## Map

### Possible type in

* [Subscription​Billing​Attempt​State](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionBillingAttemptState)
