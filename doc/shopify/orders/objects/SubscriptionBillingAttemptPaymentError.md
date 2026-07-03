---
title: SubscriptionBillingAttemptPaymentError - GraphQL Admin
description: A payment-related error that occurred during a subscription billing attempt.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptPaymentError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptPaymentError.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Billing​Attempt​Payment​Error

object

Requires `read_own_subscription_contracts` access scope.

A payment-related error that occurred during a subscription billing attempt.

## Fields

* code

  [Subscription​Billing​Attempt​Payment​Error​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptPaymentErrorCode)

  non-null

  The error code for the payment failure.

***

## Map

### Possible type in

* [Subscription​Billing​Attempt​Error](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionBillingAttemptError)
