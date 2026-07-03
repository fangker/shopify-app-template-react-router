---
title: CheckoutAndAccountsConfigurationBrandingFontSize - GraphQL Admin
description: The font size customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingFontSize
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingFontSize.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Font​Size

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The font size customizations.

## Fields

* base

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The base font size.

* ratio

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The scale ratio used to derive all font sizes such as small and large.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingTypography.size](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingTypography#field-CheckoutAndAccountsConfigurationBrandingTypography.fields.size)
