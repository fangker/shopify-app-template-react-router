---
title: AccessScope - GraphQL Admin
description: >-
  A permission that controls access to [GraphQL Admin
  API](https://shopify.dev/docs/api/usage/access-scopes#authenticated-access-scopes)
  or [Storefront
  API](https://shopify.dev/docs/api/usage/access-scopes#unauthenticated-access-scopes)

  types. Each scope defines what data an

  [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) can
  read

  or write, following the format `{action}_{resource}` where action is typically

  "read" or "write".


  Apps declare required and optional access scopes in their configuration.
  During

  installation, merchants review and grant these permissions, determining what

  shop data the app can access. The granted scopes remain active until the

  merchant uninstalls the app or revokes them. Apps can programmatically revoke

  their own dynamically granted optional scopes using
  [`appRevokeAccessScopes`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appRevokeAccessScopes).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Access​Scope

object

A permission that controls access to [GraphQL Admin API](https://shopify.dev/docs/api/usage/access-scopes#authenticated-access-scopes) or [Storefront API](https://shopify.dev/docs/api/usage/access-scopes#unauthenticated-access-scopes) types. Each scope defines what data an [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) can read or write, following the format `{action}_{resource}` where action is typically "read" or "write".

Apps declare required and optional access scopes in their configuration. During installation, merchants review and grant these permissions, determining what shop data the app can access. The granted scopes remain active until the merchant uninstalls the app or revokes them. Apps can programmatically revoke their own dynamically granted optional scopes using [`appRevokeAccessScopes`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appRevokeAccessScopes).

## Fields

* description

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A description of the actions that the access scope allows an app to perform.

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A readable string that represents the access scope. The string usually follows the format `{action}_{resource}`. `{action}` is `read` or `write`, and `{resource}` is the resource that the action can be performed on. `{action}` and `{resource}` are separated by an underscore. For example, `read_orders` or `write_products`.

***

## Map

### Fields with this object

* [App.availableAccessScopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.availableAccessScopes)
* [App.optionalAccessScopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.optionalAccessScopes)
* [App.requestedAccessScopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.requestedAccessScopes)
* [AppInstallation.accessScopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.accessScopes)
* [StorefrontAccessToken.accessScopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessToken#field-StorefrontAccessToken.fields.accessScopes)

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

## AccessScope Mutations

### Mutated by

* [app​Revoke​Access​Scopes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appRevokeAccessScopes)
