---
title: CheckoutAndAccountsConfigurationBrandingCustomFontGroup - GraphQL Admin
description: The custom font group customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomFontGroup
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomFontGroup.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Custom​Font​Group

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The custom font group customizations.

## Fields

* base

  [Checkout​And​Accounts​Configuration​Branding​Custom​Font](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomFont)

  The base custom font.

* bold

  [Checkout​And​Accounts​Configuration​Branding​Custom​Font](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomFont)

  The bold custom font.

* loading​Strategy

  [Checkout​And​Accounts​Configuration​Branding​Font​Loading​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingFontLoadingStrategy)

  The font loading strategy.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The font group name.

***

## Map

### Possible type in

* [Checkout​And​Accounts​Configuration​Branding​Font​Group](https://shopify.dev/docs/api/admin-graphql/latest/unions/CheckoutAndAccountsConfigurationBrandingFontGroup)
