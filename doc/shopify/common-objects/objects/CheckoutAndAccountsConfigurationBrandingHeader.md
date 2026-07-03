---
title: CheckoutAndAccountsConfigurationBrandingHeader - GraphQL Admin
description: The header customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingHeader
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingHeader.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Header

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The header customizations.

## Fields

* alignment

  [Checkout​And​Accounts​Configuration​Branding​Header​Alignment](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingHeaderAlignment)

  The header alignment.

* background

  [Checkout​And​Accounts​Configuration​Branding​Background](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingBackground)

  The background style of the header container.

* colors

  [Checkout​And​Accounts​Configuration​Branding​Colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingColors)

  The colors customizations.

* divided

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  The divided setting.

* logo

  [Checkout​And​Accounts​Configuration​Branding​Logo](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingLogo)

  The store logo.

* padding

  [Checkout​And​Accounts​Configuration​Branding​Spacing​Keyword](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingSpacingKeyword)

  The padding of the header container.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingComponents.header](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingComponents#field-CheckoutAndAccountsConfigurationBrandingComponents.fields.header)
