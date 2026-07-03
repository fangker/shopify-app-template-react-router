---
title: CheckoutAndAccountsConfigurationBrandingSignInLogo - GraphQL Admin
description: The sign-in store logo customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSignInLogo
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSignInLogo.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Sign​In​Logo

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The sign-in store logo customizations.

## Fields

* image

  [Checkout​And​Accounts​Configuration​Branding​Image​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/CheckoutAndAccountsConfigurationBrandingImageValue)

  The logo image.

* max​Width

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The maximum width of the logo.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingSignInHeader.logo](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSignInHeader#field-CheckoutAndAccountsConfigurationBrandingSignInHeader.fields.logo)
