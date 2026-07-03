---
title: CheckoutAndAccountsConfigurationOverride - GraphQL Admin
description: >-
  A checkout and account configuration override modifies a parent configuration
  for specific markets.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationOverride
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationOverride.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Override

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

A checkout and account configuration override modifies a parent configuration for specific markets.

## Fields

* branding

  [Checkout​And​Accounts​Configuration​Branding](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBranding)

  The branding configuration.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the configuration was created.

* edited​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the configuration was last edited.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The configuration name.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the configuration was last updated.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfiguration.overrides](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfiguration#field-CheckoutAndAccountsConfiguration.fields.overrides)

***

## Interfaces

* * [Checkout​And​Accounts​Configuration​Interface](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CheckoutAndAccountsConfigurationInterface)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## CheckoutAndAccountsConfigurationOverride Implements

### Implements

* [Checkout​And​Accounts​Configuration​Interface](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CheckoutAndAccountsConfigurationInterface)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
