---
title: paymentCustomizationDelete - GraphQL Admin
description: |-
  Permanently deletes a payment customization. Once deleted, the customization
  will no longer affect which payment methods appear at checkout.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationDelete.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# payment​Customization​Delete

mutation

Requires `write_payment_customizations` access scope.

Permanently deletes a payment customization. Once deleted, the customization will no longer affect which payment methods appear at checkout.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The global ID of the payment customization.

***

## Payment​Customization​Delete​Payload returns

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Returns the deleted payment customization ID.

* user​Errors

  [\[Payment​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### paymentCustomizationDelete reference
