---
title: paymentCustomizationActivation - GraphQL Admin
description: |-
  Activates or deactivates payment customizations for the shop. Payment
  customizations allow apps to hide, reorder, or rename payment methods at
  checkout based on cart contents, customer attributes, or other conditions. Use
  this to toggle customizations on or off without deleting them.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationActivation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationActivation.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# payment​Customization​Activation

mutation

Requires `write_payment_customizations` access scope.

Activates or deactivates payment customizations for the shop. Payment customizations allow apps to hide, reorder, or rename payment methods at checkout based on cart contents, customer attributes, or other conditions. Use this to toggle customizations on or off without deleting them.

## Arguments

* enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  required

  The enabled status of the payment customizations.

* ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The global IDs of the payment customizations.

***

## Payment​Customization​Activation​Payload returns

* ids

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The IDs of the updated payment customizations.

* user​Errors

  [\[Payment​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### paymentCustomizationActivation reference
