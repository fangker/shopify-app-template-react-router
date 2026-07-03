---
title: paymentCustomizationCreate - GraphQL Admin
description: |-
  Creates a new payment customization for the shop. Payment customizations let
  apps modify the payment methods shown at checkout — hiding, reordering, or
  renaming options based on cart contents, customer attributes, or other
  business logic.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationCreate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# payment​Customization​Create

mutation

Requires `write_payment_customizations` access scope.

Creates a new payment customization for the shop. Payment customizations let apps modify the payment methods shown at checkout — hiding, reordering, or renaming options based on cart contents, customer attributes, or other business logic.

## Arguments

* payment​Customization

  [Payment​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentCustomizationInput)

  required

  The input data used to create the payment customization.

***

## Payment​Customization​Create​Payload returns

* payment​Customization

  [Payment​Customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization)

  Returns the created payment customization.

* user​Errors

  [\[Payment​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### paymentCustomizationCreate reference
