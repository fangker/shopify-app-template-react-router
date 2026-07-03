---
title: SubscriptionDeliveryOptionResultFailure - GraphQL Admin
description: A failure to find the available delivery options for a subscription contract.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryOptionResultFailure
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryOptionResultFailure.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Delivery​Option​Result​Failure

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

A failure to find the available delivery options for a subscription contract.

## Fields

* message

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The reason for the failure.

***

## Map

### Possible type in

* [Subscription​Delivery​Option​Result](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryOptionResult)
