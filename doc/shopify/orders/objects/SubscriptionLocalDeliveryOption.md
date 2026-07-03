---
title: SubscriptionLocalDeliveryOption - GraphQL Admin
description: A local delivery option for a subscription contract.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLocalDeliveryOption
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLocalDeliveryOption.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Local​Delivery​Option

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

A local delivery option for a subscription contract.

## Fields

* code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The code of the local delivery option.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description of the local delivery option.

* phone​Required

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a phone number is required for the local delivery option.

* presentment​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The presentment title of the local delivery option.

* price

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The price of the local delivery option.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the local delivery option.

***

## Map

### Possible type in

* [Subscription​Delivery​Option](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryOption)
