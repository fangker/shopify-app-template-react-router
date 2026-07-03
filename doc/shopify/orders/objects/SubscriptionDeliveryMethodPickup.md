---
title: SubscriptionDeliveryMethodPickup - GraphQL Admin
description: A delivery method with a pickup option.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodPickup
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodPickup.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Delivery​Method​Pickup

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

A delivery method with a pickup option.

## Fields

* pickup​Option

  [Subscription​Delivery​Method​Pickup​Option!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodPickupOption)

  non-null

  The details of the pickup delivery method to use.

***

## Map

### Possible type in

* [Subscription​Delivery​Method](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryMethod)
