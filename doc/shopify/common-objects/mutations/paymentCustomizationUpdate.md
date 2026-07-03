---
title: paymentCustomizationUpdate - GraphQL Admin
description: >-
  Updates an existing payment customization, modifying its configuration for how

  payment methods are displayed at checkout. Use this to change the

  customization's title or enabled state. The customization's function can't be

  changed once set; create a new payment customization to use a different
  function.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationUpdate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# payment​Customization​Update

mutation

Requires `write_payment_customizations` access scope.

Updates an existing payment customization, modifying its configuration for how payment methods are displayed at checkout. Use this to change the customization's title or enabled state. The customization's function can't be changed once set; create a new payment customization to use a different function.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The global ID of the payment customization.

* payment​Customization

  [Payment​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentCustomizationInput)

  required

  The input data used to update the payment customization.

***

## Payment​Customization​Update​Payload returns

* payment​Customization

  [Payment​Customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization)

  Returns the updated payment customization.

* user​Errors

  [\[Payment​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### paymentCustomizationUpdate reference
