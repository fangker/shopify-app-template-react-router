---
title: PaymentMandateResource - GraphQL Admin
description: |-
  A payment mandate with resource information, representing the permission
  the owner of the payment instrument gives to the merchant to debit it
  for specific resources (e.g., Order, Subscriptions).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandateResource
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandateResource.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Payment​Mandate​Resource

object

Requires `read_payment_mandate` access scope or `read_customer_payment_methods` access scope.

A payment mandate with resource information, representing the permission the owner of the payment instrument gives to the merchant to debit it for specific resources (e.g., Order, Subscriptions).

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID of the payment mandate. Matches the corresponding `CustomerPaymentMethod.id` token, so partners can identify which payment method to use for a given mandate scope (e.g., SUBSCRIPTIONS).

* resource​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the resource that this payment method was created for.

* resource​Type

  [Mandate​Resource​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MandateResourceType)

  The resource type that this payment method was created for (e.g., Order, Subscriptions).

***

## Map

### Fields and connections with this object

* [CustomerPaymentMethod.mandates](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod#field-CustomerPaymentMethod.fields.mandates)
* [PaymentMandateResourceConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentMandateResourceConnection#returns-nodes)
* [PaymentMandateResourceEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandateResourceEdge#field-PaymentMandateResourceEdge.fields.node)
