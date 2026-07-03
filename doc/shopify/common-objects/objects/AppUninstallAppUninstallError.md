---
title: AppUninstallAppUninstallError - GraphQL Admin
description: Represents an error that happens while uninstalling an app.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUninstallAppUninstallError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUninstallAppUninstallError.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# App​Uninstall​App​Uninstall​Error

object

Represents an error that happens while uninstalling an app.

## Fields

* code

  [App​Uninstall​App​Uninstall​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppUninstallAppUninstallErrorCode)

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

* [app​Uninstall](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appUninstall)

  mutation

  Uninstalls an [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) from a shop. Apps use this mutation to uninstall themselves programmatically, removing their [`AppInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation) from the merchant's store.

  When an app uninstalls, Shopify automatically performs cleanup tasks, such as deleting [`WebhookSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription) objects and [admin links](https://shopify.dev/docs/apps/build/admin/admin-links) associated with the app.

  Learn more about [app lifecycle management](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/uninstall-app-api-request).

  ***

  **Caution:** This action is irreversible. You can\&#39;t restore an uninstalled app\&#39;s configuration or data. Before you uninstall an app, make sure that you no longer need to make API calls for the store in which the app has been installed.

  ***

***

## AppUninstallAppUninstallError Mutations

### Mutated by

* [app​Uninstall](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appUninstall)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## AppUninstallAppUninstallError Implements

### Implements

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
