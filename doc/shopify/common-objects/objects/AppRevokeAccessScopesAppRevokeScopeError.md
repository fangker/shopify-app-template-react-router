---
title: AppRevokeAccessScopesAppRevokeScopeError - GraphQL Admin
description: Represents an error that happens while revoking a granted scope.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevokeAccessScopesAppRevokeScopeError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevokeAccessScopesAppRevokeScopeError.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# App​Revoke​Access​Scopes​App​Revoke​Scope​Error

object

Represents an error that happens while revoking a granted scope.

## Fields

* code

  [App​Revoke​Access​Scopes​App​Revoke​Scope​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppRevokeAccessScopesAppRevokeScopeErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

* [app​Revoke​Access​Scopes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appRevokeAccessScopes)

  mutation

  Revokes previously granted access scopes from an app installation, allowing merchants to reduce an app's permissions without completely uninstalling it. This provides granular control over what data and functionality apps can access.

  For example, if a merchant no longer wants an app to access customer information but still wants to use its inventory features, they can revoke the customer-related scopes while keeping inventory permissions active.

  Use the `appRevokeAccessScopes` mutation to:

  * Remove specific permissions from installed apps
  * Maintain app functionality while minimizing data exposure

  The mutation returns details about which scopes were successfully revoked and any errors that prevented certain permissions from being removed.

  Learn more about [managing app permissions](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes#revoke-granted-scopes-dynamically).

  * scopes

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The list of scope handles to revoke.

  ***

***

## AppRevokeAccessScopesAppRevokeScopeError Mutations

### Mutated by

* [app​Revoke​Access​Scopes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appRevokeAccessScopes)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## AppRevokeAccessScopesAppRevokeScopeError Implements

### Implements

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
