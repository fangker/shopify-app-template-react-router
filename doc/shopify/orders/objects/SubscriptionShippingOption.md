---
title: SubscriptionShippingOption - GraphQL Admin
description: A shipping option to deliver a subscription contract.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionShippingOption
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionShippingOption.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Shipping​Option

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

A shipping option to deliver a subscription contract.

## Fields

* code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The code of the shipping option.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description of the shipping option.

* phone​Required

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  If a phone number is required for the shipping option.

* presentment​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The presentment title of the shipping option.

* price

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The price of the shipping option.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the shipping option.

* carrier​Service

  [Delivery​Carrier​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

  Deprecated

***

## Map

### Fields with this object

* [SubscriptionShippingOptionResultSuccess.shippingOptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionShippingOptionResultSuccess#field-SubscriptionShippingOptionResultSuccess.fields.shippingOptions)

### Possible type in

* [Subscription​Delivery​Option](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryOption)
