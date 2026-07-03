---
title: CheckoutAndAccountsConfigurationBrandingSignInMain - GraphQL Admin
description: The sign-in-specific main customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSignInMain
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSignInMain.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Sign​In​Main

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The sign-in-specific main customizations.

## Fields

* background​Image

  [Checkout​And​Accounts​Configuration​Branding​Image​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/CheckoutAndAccountsConfigurationBrandingImageValue)

  The background image of the main container.

* colors

  [Checkout​And​Accounts​Configuration​Branding​Colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingColors)

  The colors customizations.

* section

  [Checkout​And​Accounts​Configuration​Branding​Main​Section](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingMainSection)

  The main sections.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingSignInComponents.main](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSignInComponents#field-CheckoutAndAccountsConfigurationBrandingSignInComponents.fields.main)
