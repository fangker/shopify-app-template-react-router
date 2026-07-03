---
title: SubscriptionDeliveryMethodShipping - GraphQL Admin
description: >-
  Represents a shipping delivery method: a mailing address and a shipping
  option.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodShipping
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodShipping.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Delivery​Method​Shipping

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Represents a shipping delivery method: a mailing address and a shipping option.

## Fields

* address

  [Mailing​Address!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

  non-null

  The address to ship to.

* shipping​Option

  [Subscription​Delivery​Method​Shipping​Option!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodShippingOption)

  non-null

  The details of the shipping method to use.

***

## Map

### Possible type in

* [Subscription​Delivery​Method](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryMethod)
