---
title: shopPolicyUpdate - GraphQL Admin
description: Updates a shop policy.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopPolicyUpdate'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopPolicyUpdate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# shop​Policy​Update

mutation

Requires `write_legal_policies` access scope.

Updates a shop policy.

## Arguments

* shop​Policy

  [Shop​Policy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopPolicyInput)

  required

  The properties to use when updating the shop policy.

***

## Shop​Policy​Update​Payload returns

* shop​Policy

  [Shop​Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicy)

  The shop policy that has been updated.

* user​Errors

  [\[Shop​Policy​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicyUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### shopPolicyUpdate reference
