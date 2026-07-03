---
title: CheckoutAndAccountsConfigurationBrandingSurfaces - GraphQL Admin
description: >-
  The surface-specific component customizations for checkout and customer
  accounts.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSurfaces
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSurfaces.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Surfaces

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The surface-specific component customizations for checkout and customer accounts.

## Fields

* checkout

  [Checkout​And​Accounts​Configuration​Branding​Checkout​Surface](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCheckoutSurface)

  The checkout-specific component overrides.

* customer​Accounts

  [Checkout​And​Accounts​Configuration​Branding​Customer​Accounts​Surface](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomerAccountsSurface)

  The customer accounts-specific component overrides.

* sign​In

  [Checkout​And​Accounts​Configuration​Branding​Sign​In​Surface](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSignInSurface)

  The sign-in-specific component overrides.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBranding.surfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBranding#field-CheckoutAndAccountsConfigurationBranding.fields.surfaces)
