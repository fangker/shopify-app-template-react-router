---
title: SubscriptionDeliveryMethodLocalDeliveryOption - GraphQL Admin
description: The selected delivery option on a subscription contract.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodLocalDeliveryOption
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodLocalDeliveryOption.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Delivery​Method​Local​Delivery​Option

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

The selected delivery option on a subscription contract.

## Fields

* code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A custom reference to the delivery method for use with automations.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The details displayed to the customer to describe the local delivery option.

* instructions

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The delivery instructions that the customer can provide to the merchant.

* phone

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The phone number that the customer provided to the merchant. Formatted using E.164 standard. For example, `+16135551111`.

* presentment​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The presentment title of the local delivery option.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of the local delivery option.

***

## Map

### Fields with this object

* [SubscriptionDeliveryMethodLocalDelivery.localDeliveryOption](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodLocalDelivery#field-SubscriptionDeliveryMethodLocalDelivery.fields.localDeliveryOption)
