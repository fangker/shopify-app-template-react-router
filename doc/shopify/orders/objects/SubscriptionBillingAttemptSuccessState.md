---
title: SubscriptionBillingAttemptSuccessState - GraphQL Admin
description: The billing attempt completed successfully and created an order.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptSuccessState
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptSuccessState.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Billing​Attempt​Success​State

object

Requires `read_own_subscription_contracts` access scope.

The billing attempt completed successfully and created an order.

## Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order created by the successful billing attempt. May be null if the order was deleted.

***

## Map

### Possible type in

* [Subscription​Billing​Attempt​State](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionBillingAttemptState)
