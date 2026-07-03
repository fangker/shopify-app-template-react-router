---
title: checkoutAndAccountsConfiguration - GraphQL Admin
description: A checkout and accounts configuration for a shop.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutAndAccountsConfiguration
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutAndAccountsConfiguration.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# checkout​And​Accounts​Configuration

query

A checkout and accounts configuration for a shop.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the configuration.

***

## Possible returns

* Checkout​And​Accounts​Configuration

  [Checkout​And​Accounts​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfiguration)

  A checkout and account configuration packages branding settings, UI extensions, and overrides for a shop's checkout.

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

  * is​Published

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the configuration is published or not.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The configuration name.

  * overrides

    [\[Checkout​And​Accounts​Configuration​Override!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationOverride)

    non-null

    The list of overrides for the configuration.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the configuration was last updated.

***

## Examples

* ### checkoutAndAccountsConfiguration reference
