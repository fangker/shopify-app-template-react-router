---
title: SubscriptionDeliveryMethodPickupOption - GraphQL Admin
description: Represents the selected pickup option on a subscription contract.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodPickupOption
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodPickupOption.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Delivery​Method​Pickup​Option

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Represents the selected pickup option on a subscription contract.

## Fields

* code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A custom reference to the delivery method for use with automations.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The details displayed to the customer to describe the pickup option.

* location

  [Location!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  non-null

  The location where the customer will pick up the merchandise.

* presentment​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The presentment title of the pickup option.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of the pickup option.

***

## Map

### Fields with this object

* [SubscriptionDeliveryMethodPickup.pickupOption](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodPickup#field-SubscriptionDeliveryMethodPickup.fields.pickupOption)
