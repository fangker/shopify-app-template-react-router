---
title: SubscriptionBillingAttemptPaymentChallenge - GraphQL Admin
description: A payment challenge that the customer must complete.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptPaymentChallenge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptPaymentChallenge.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Billing​Attempt​Payment​Challenge

object

Requires `read_own_subscription_contracts` access scope.

A payment challenge that the customer must complete.

## Fields

* next​Action​Url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  URL to redirect the customer for authentication.

* status

  [Subscription​Billing​Attempt​Payment​Challenge​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptPaymentChallengeStatus)

  non-null

  The status of the payment challenge.

***

## Map

### Possible type in

* [Subscription​Billing​Attempt​Action](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionBillingAttemptAction)
