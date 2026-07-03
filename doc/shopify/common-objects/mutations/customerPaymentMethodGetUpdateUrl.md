---
title: customerPaymentMethodGetUpdateUrl - GraphQL Admin
description: |-
  Returns a URL that allows the customer to update a specific payment method.

  Currently, `customerPaymentMethodGetUpdateUrl` only supports Shop Pay.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodGetUpdateUrl
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodGetUpdateUrl.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# customer​Payment​Method​Get​Update​Url

mutation

Requires `write_customers` access scope.

Returns a URL that allows the customer to update a specific payment method.

Currently, `customerPaymentMethodGetUpdateUrl` only supports Shop Pay.

## Arguments

* customer​Payment​Method​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The payment method to be updated.

***

## Customer​Payment​Method​Get​Update​Url​Payload returns

* update​Payment​Method​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL to redirect the customer to update the payment method.

* user​Errors

  [\[Customer​Payment​Method​Get​Update​Url​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodGetUpdateUrlUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### customerPaymentMethodGetUpdateUrl reference
