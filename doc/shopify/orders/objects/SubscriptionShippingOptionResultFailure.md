---
title: SubscriptionShippingOptionResultFailure - GraphQL Admin
description: >-
  Failure determining available shipping options for delivery of a subscription
  contract.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionShippingOptionResultFailure
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionShippingOptionResultFailure.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Shipping​Option​Result​Failure

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Failure determining available shipping options for delivery of a subscription contract.

## Fields

* message

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Failure reason.

***

## Map

### Possible type in

* [Subscription​Shipping​Option​Result](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionShippingOptionResult)
