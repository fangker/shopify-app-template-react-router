---
title: customerPaymentMethodRevoke - GraphQL Admin
description: |-
  Revokes a customer's vaulted payment method, preventing it from being used for
  future charges such as subscriptions, draft orders, or other payments.
  Revocation will fail if the payment method has active subscription contracts.
  Use this when a customer requests removal of their stored payment information
  or when a payment method is no longer valid.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodRevoke
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodRevoke.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# customer​Payment​Method​Revoke

mutation

Requires `write_customers` access scope. Also: Requires `write_customer_payment_methods` scope.

Revokes a customer's vaulted payment method, preventing it from being used for future charges such as subscriptions, draft orders, or other payments. Revocation will fail if the payment method has active subscription contracts. Use this when a customer requests removal of their stored payment information or when a payment method is no longer valid.

## Arguments

* customer​Payment​Method​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the customer payment method to be revoked.

***

## Customer​Payment​Method​Revoke​Payload returns

* revoked​Customer​Payment​Method​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the revoked customer payment method.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### customerPaymentMethodRevoke reference
