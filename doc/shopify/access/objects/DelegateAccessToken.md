---
title: DelegateAccessToken - GraphQL Admin
description: >-
  A token that delegates a set of scopes from the original permission.


  To learn more about creating delegate access tokens, refer to

  [Delegate OAuth access tokens to
  subsystems](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/use-delegate-tokens).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessToken
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessToken.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delegate​Access​Token

object

A token that delegates a set of scopes from the original permission.

To learn more about creating delegate access tokens, refer to [Delegate OAuth access tokens to subsystems](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/use-delegate-tokens).

## Fields

* access​Scopes

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The list of permissions associated with the token.

* access​Token

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The issued delegate access token.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the delegate access token was created.

* expires​In

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The number of seconds until the delegate access token expires.

***

## Map

No referencing types

***

## Mutations

* [delegate​Access​Token​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenCreate)

  mutation

  Creates a [`DelegateAccessToken`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessToken) with a subset of the parent token's permissions.

  Delegate access tokens enable secure permission delegation to subsystems or services that need limited access to shop resources. Each token inherits only the scopes you specify, ensuring subsystems operate with minimal required permissions rather than full app access.

  Learn more about [delegating access tokens to subsystems](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/use-delegate-tokens).

  * input

    [Delegate​Access​Token​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DelegateAccessTokenInput)

    required

    ### Arguments

    The input fields for creating a delegate access token.

  ***

***

## DelegateAccessToken Mutations

### Mutated by

* [delegate​Access​Token​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenCreate)
