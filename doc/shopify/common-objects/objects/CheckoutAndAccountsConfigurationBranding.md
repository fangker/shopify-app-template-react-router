---
title: CheckoutAndAccountsConfigurationBranding - GraphQL Admin
description: The branding configuration for checkout and customer accounts.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBranding
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBranding.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The branding configuration for checkout and customer accounts.

## Fields

* components

  [Checkout​And​Accounts​Configuration​Branding​Components](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingComponents)

  The components that apply to all surfaces.

* design​Tokens

  [Checkout​And​Accounts​Configuration​Branding​Design​Tokens](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingDesignTokens)

  The design tokens allow you to set values that represent specific attributes of your brand like color and font. These attributes are used throughout the user interface. This brings consistency and allows you to easily make broad design changes.

* surfaces

  [Checkout​And​Accounts​Configuration​Branding​Surfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSurfaces)

  The surface-specific customizations.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfiguration.branding](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfiguration#field-CheckoutAndAccountsConfiguration.fields.branding)
* [CheckoutAndAccountsConfigurationInterface.branding](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CheckoutAndAccountsConfigurationInterface#fields-branding)
* [CheckoutAndAccountsConfigurationOverride.branding](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationOverride#field-CheckoutAndAccountsConfigurationOverride.fields.branding)
