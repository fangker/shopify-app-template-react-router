---
title: validationUpdate - GraphQL Admin
description: |-
  Updates a cart and checkout validation. Use `validationUpdate` to rename it,
  toggle whether it's enabled at checkout, change its `blockOnFailure` behavior,
  or update its metafields.

  Validation errors always block checkout progress. The `blockOnFailure` field
  controls whether runtime exceptions, such as timeouts, also block checkout.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationUpdate'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationUpdate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# validation​Update

mutation

Requires `write_validations` access scope.

Updates a cart and checkout validation. Use `validationUpdate` to rename it, toggle whether it's enabled at checkout, change its `blockOnFailure` behavior, or update its metafields.

Validation errors always block checkout progress. The `blockOnFailure` field controls whether runtime exceptions, such as timeouts, also block checkout.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID representing the validation to update.

* validation

  [Validation​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ValidationUpdateInput)

  required

  The input fields to update a validation.

***

## Validation​Update​Payload returns

* user​Errors

  [\[Validation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ValidationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* validation

  [Validation](https://shopify.dev/docs/api/admin-graphql/latest/objects/Validation)

  The updated validation.

***

## Examples

* ### validationUpdate reference
