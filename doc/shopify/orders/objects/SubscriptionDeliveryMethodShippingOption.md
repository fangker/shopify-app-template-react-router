---
title: SubscriptionDeliveryMethodShippingOption - GraphQL Admin
description: Represents the selected shipping option on a subscription contract.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodShippingOption
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodShippingOption.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Delivery​Method​Shipping​Option

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Represents the selected shipping option on a subscription contract.

## Fields

* code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The code of the shipping option.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description of the shipping option.

* presentment​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The presentment title of the shipping option.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of the shipping option.

* carrier​Service

  [Delivery​Carrier​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

  Deprecated

***

## Map

### Fields with this object

* [SubscriptionDeliveryMethodShipping.shippingOption](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodShipping#field-SubscriptionDeliveryMethodShipping.fields.shippingOption)
