---
title: CheckoutAndAccountsConfigurationBrandingMainSection - GraphQL Admin
description: The main sections customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingMainSection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingMainSection.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Main​Section

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The main sections customizations.

## Fields

* background

  [Checkout​And​Accounts​Configuration​Branding​Background](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingBackground)

  The background style of the main sections.

* border

  [Checkout​And​Accounts​Configuration​Branding​Simple​Border](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingSimpleBorder)

  The border for the main sections.

* border​Style

  [Checkout​And​Accounts​Configuration​Branding​Border​Style](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingBorderStyle)

  The border style of the main sections.

* border​Width

  [Checkout​And​Accounts​Configuration​Branding​Border​Width](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingBorderWidth)

  The border width of the main sections.

* colors

  [Checkout​And​Accounts​Configuration​Branding​Colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingColors)

  The colors customizations.

* corner​Radius

  [Checkout​And​Accounts​Configuration​Branding​Corner​Radius](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingCornerRadius)

  The corner radius of the main sections.

* padding

  [Checkout​And​Accounts​Configuration​Branding​Spacing​Keyword](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingSpacingKeyword)

  The padding of the main sections.

* shadow

  [Checkout​And​Accounts​Configuration​Branding​Shadow](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingShadow)

  The shadow of the main sections.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingMain.section](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingMain#field-CheckoutAndAccountsConfigurationBrandingMain.fields.section)
* [CheckoutAndAccountsConfigurationBrandingSignInMain.section](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSignInMain#field-CheckoutAndAccountsConfigurationBrandingSignInMain.fields.section)
