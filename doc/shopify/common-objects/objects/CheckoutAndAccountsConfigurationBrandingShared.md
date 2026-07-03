---
title: CheckoutAndAccountsConfigurationBrandingShared - GraphQL Admin
description: The shared customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingShared
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingShared.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Shared

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The shared customizations.

## Fields

* colors

  [Checkout​And​Accounts​Configuration​Branding​Shared​Colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSharedColors)

  The shared color customizations for semantic and functional colors.

* corner​Radius

  [Checkout​And​Accounts​Configuration​Branding​Shared​Corner​Radius](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingSharedCornerRadius)

  The shared corner radius setting that overrides all other [corner radius](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingCornerRadius) customizations.

* typography

  [Checkout​And​Accounts​Configuration​Branding​Shared​Typography​Style](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSharedTypographyStyle)

  The shared typography customizations.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingComponents.shared](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingComponents#field-CheckoutAndAccountsConfigurationBrandingComponents.fields.shared)
