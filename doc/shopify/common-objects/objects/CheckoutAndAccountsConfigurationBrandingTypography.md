---
title: CheckoutAndAccountsConfigurationBrandingTypography - GraphQL Admin
description: The typography customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingTypography
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingTypography.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Typography

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The typography customizations.

## Fields

* primary

  [Checkout​And​Accounts​Configuration​Branding​Font​Group](https://shopify.dev/docs/api/admin-graphql/latest/unions/CheckoutAndAccountsConfigurationBrandingFontGroup)

  The font group used for most components such as text, buttons and form controls.

* secondary

  [Checkout​And​Accounts​Configuration​Branding​Font​Group](https://shopify.dev/docs/api/admin-graphql/latest/unions/CheckoutAndAccountsConfigurationBrandingFontGroup)

  The font group used for heading components by default.

* size

  [Checkout​And​Accounts​Configuration​Branding​Font​Size](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingFontSize)

  The font size (base size in pixels and scaling between different sizes).

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingDesignTokens.typography](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingDesignTokens#field-CheckoutAndAccountsConfigurationBrandingDesignTokens.fields.typography)
