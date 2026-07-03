---
title: CheckoutAndAccountsConfigurationBrandingDesignTokens - GraphQL Admin
description: >-
  The design token customizations allow you to set values that represent
  specific

  attributes of your brand like color and font. These attributes are used

  throughout the user interface. This brings consistency and allows you to
  easily

  make broad design changes.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingDesignTokens
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingDesignTokens.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Design​Tokens

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The design token customizations allow you to set values that represent specific attributes of your brand like color and font. These attributes are used throughout the user interface. This brings consistency and allows you to easily make broad design changes.

## Fields

* colors

  [Checkout​And​Accounts​Configuration​Branding​Design​Token​Colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingDesignTokenColors)

  The colors for global colors.

* corner​Radius

  [Checkout​And​Accounts​Configuration​Branding​Corner​Radius​Variables](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCornerRadiusVariables)

  The corner radius variables.

* typography

  [Checkout​And​Accounts​Configuration​Branding​Typography](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingTypography)

  The typography.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBranding.designTokens](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBranding#field-CheckoutAndAccountsConfigurationBranding.fields.designTokens)
