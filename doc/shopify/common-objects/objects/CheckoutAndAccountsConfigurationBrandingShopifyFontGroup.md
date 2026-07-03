---
title: CheckoutAndAccountsConfigurationBrandingShopifyFontGroup - GraphQL Admin
description: The Shopify font group customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingShopifyFontGroup
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingShopifyFontGroup.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Shopify​Font​Group

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The Shopify font group customizations.

## Fields

* base

  [Checkout​And​Accounts​Configuration​Branding​Shopify​Font](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingShopifyFont)

  The base Shopify font.

* bold

  [Checkout​And​Accounts​Configuration​Branding​Shopify​Font](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingShopifyFont)

  The bold Shopify font.

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
