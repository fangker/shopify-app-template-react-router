---
title: SubscriptionBillingAttemptUnexpectedError - GraphQL Admin
description: An unexpected error that occurred during a subscription billing attempt.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptUnexpectedError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptUnexpectedError.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Billing​Attempt​Unexpected​Error

object

Requires `read_own_subscription_contracts` access scope.

An unexpected error that occurred during a subscription billing attempt.

## Fields

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A message describing the unexpected error.

***

## Map

### Possible type in

* [Subscription​Billing​Attempt​Error](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionBillingAttemptError)
