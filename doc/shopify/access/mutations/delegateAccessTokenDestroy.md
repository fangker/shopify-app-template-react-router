---
title: delegateAccessTokenDestroy - GraphQL Admin
description: Destroys a delegate access token.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenDestroy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenDestroy.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# delegate​Access​Token​Destroy

mutation

Destroys a delegate access token.

## Arguments

* access​Token

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  Provides the delegate access token to destroy.

***

## Delegate​Access​Token​Destroy​Payload returns

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* status

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  The status of the delegate access token destroy operation. Returns true if successful.

* user​Errors

  [\[Delegate​Access​Token​Destroy​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessTokenDestroyUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### delegateAccessTokenDestroy reference
