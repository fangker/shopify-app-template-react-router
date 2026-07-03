---
title: validationCreate - GraphQL Admin
description: |-
  Creates a cart and checkout validation: a server-side rule enforced before a
  customer can complete checkout. Each validation is powered by a cart and
  checkout validation function that you provide using `functionId` or
  `functionHandle`.

  Use `validationCreate` to apply custom rules at checkout, such as limiting
  item quantities, enforcing order minimums or maximums, or blocking checkout
  for restricted shipping addresses. Validations run on Shopify's servers and
  are enforced throughout checkout, so they can't be bypassed by the client.

  Validation errors always block checkout progress. The `blockOnFailure` field
  controls whether runtime exceptions, such as timeouts, also block checkout.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationCreate'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationCreate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# validation​Create

mutation

Requires `write_validations` access scope.

Creates a cart and checkout validation: a server-side rule enforced before a customer can complete checkout. Each validation is powered by a cart and checkout validation function that you provide using `functionId` or `functionHandle`.

Use `validationCreate` to apply custom rules at checkout, such as limiting item quantities, enforcing order minimums or maximums, or blocking checkout for restricted shipping addresses. Validations run on Shopify's servers and are enforced throughout checkout, so they can't be bypassed by the client.

Validation errors always block checkout progress. The `blockOnFailure` field controls whether runtime exceptions, such as timeouts, also block checkout.

## Arguments

* validation

  [Validation​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ValidationCreateInput)

  required

  The input fields for a new validation.

***

## Validation​Create​Payload returns

* user​Errors

  [\[Validation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ValidationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* validation

  [Validation](https://shopify.dev/docs/api/admin-graphql/latest/objects/Validation)

  The created validation.

***

## Examples

* ### validationCreate reference
