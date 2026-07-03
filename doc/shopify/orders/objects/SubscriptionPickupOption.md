---
title: SubscriptionPickupOption - GraphQL Admin
description: A pickup option to deliver a subscription contract.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionPickupOption
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionPickupOption.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Pickup​Option

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

A pickup option to deliver a subscription contract.

## Fields

* code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The code of the pickup option.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description of the pickup option.

* location

  [Location!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  non-null

  The pickup location.

* phone​Required

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a phone number is required for the pickup option.

* pickup​Time

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The estimated amount of time it takes for the pickup to be ready. For example, "Usually ready in 24 hours".).

* presentment​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The presentment title of the pickup option.

* price

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The price of the pickup option.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the pickup option.

***

## Map

### Possible type in

* [Subscription​Delivery​Option](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryOption)
