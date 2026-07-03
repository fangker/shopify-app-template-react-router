---
title: CheckoutAndAccountsConfigurationBrandingCustomFont - GraphQL Admin
description: The custom font customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomFont
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomFont.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Custom​Font

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The custom font customizations.

## Fields

* generic​File​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Globally unique ID reference to the custom font file.

* sources

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The font sources.

* weight

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The font weight.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingCustomFontGroup.base](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomFontGroup#field-CheckoutAndAccountsConfigurationBrandingCustomFontGroup.fields.base)
* [CheckoutAndAccountsConfigurationBrandingCustomFontGroup.bold](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomFontGroup#field-CheckoutAndAccountsConfigurationBrandingCustomFontGroup.fields.bold)
