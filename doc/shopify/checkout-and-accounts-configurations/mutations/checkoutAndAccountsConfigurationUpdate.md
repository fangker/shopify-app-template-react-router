---
title: checkoutAndAccountsConfigurationUpdate - GraphQL Admin
description: Updates a checkout and accounts configuration.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutAndAccountsConfigurationUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutAndAccountsConfigurationUpdate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# checkout​And​Accounts​Configuration​Update

mutation

Requires `write_checkout_and_accounts_configurations` access scope or `write_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

Updates a checkout and accounts configuration.

## Arguments

* configuration

  [Checkout​And​Accounts​Configuration​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationInput)

  required

  The intended changes to the configuration.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the configuration to update.

***

## Checkout​And​Accounts​Configuration​Update​Payload returns

* configuration

  [Checkout​And​Accounts​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfiguration)

  The updated configuration.

* user​Errors

  [\[Checkout​And​Accounts​Configuration​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### checkoutAndAccountsConfigurationUpdate reference
