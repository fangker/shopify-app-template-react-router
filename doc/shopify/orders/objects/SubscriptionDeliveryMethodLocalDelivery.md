---
title: SubscriptionDeliveryMethodLocalDelivery - GraphQL Admin
description: >-
  A subscription delivery method for local delivery.

  The other subscription delivery methods can be found in the
  `SubscriptionDeliveryMethod` union type.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodLocalDelivery
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodLocalDelivery.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Delivery​Method​Local​Delivery

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

A subscription delivery method for local delivery. The other subscription delivery methods can be found in the `SubscriptionDeliveryMethod` union type.

## Fields

* address

  [Mailing​Address!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

  non-null

  The address to deliver to.

* local​Delivery​Option

  [Subscription​Delivery​Method​Local​Delivery​Option!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodLocalDeliveryOption)

  non-null

  The details of the local delivery method to use.

***

## Map

### Possible type in

* [Subscription​Delivery​Method](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryMethod)
