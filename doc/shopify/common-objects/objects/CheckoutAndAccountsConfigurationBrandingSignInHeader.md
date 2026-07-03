---
title: CheckoutAndAccountsConfigurationBrandingSignInHeader - GraphQL Admin
description: The sign-in header customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSignInHeader
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSignInHeader.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Sign​In​Header

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The sign-in header customizations.

## Fields

* logo

  [Checkout​And​Accounts​Configuration​Branding​Sign​In​Logo](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSignInLogo)

  The store logo.

* padding

  [Checkout​And​Accounts​Configuration​Branding​Spacing​Keyword](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingSpacingKeyword)

  The padding of the header container.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingSignInComponents.header](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSignInComponents#field-CheckoutAndAccountsConfigurationBrandingSignInComponents.fields.header)
