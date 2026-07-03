---
title: SubscriptionBillingAttemptGeneralError - GraphQL Admin
description: >-
  An error that occurred during a subscription billing attempt that doesn't fit
  other categories.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptGeneralError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptGeneralError.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Billing​Attempt​General​Error

object

Requires `read_own_subscription_contracts` access scope.

An error that occurred during a subscription billing attempt that doesn't fit other categories.

## Fields

* code

  [Subscription​Billing​Attempt​General​Error​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptGeneralErrorCode)

  non-null

  The error code for the failure.

***

## Map

### Possible type in

* [Subscription​Billing​Attempt​Error](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionBillingAttemptError)
