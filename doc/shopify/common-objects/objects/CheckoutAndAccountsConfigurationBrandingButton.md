---
title: CheckoutAndAccountsConfigurationBrandingButton - GraphQL Admin
description: The buttons customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingButton
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingButton.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Button

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The buttons customizations.

## Fields

* block​Padding

  [Checkout​And​Accounts​Configuration​Branding​Spacing](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingSpacing)

  The block padding.

* border

  [Checkout​And​Accounts​Configuration​Branding​Simple​Border](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingSimpleBorder)

  The border.

* corner​Radius

  [Checkout​And​Accounts​Configuration​Branding​Corner​Radius](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingCornerRadius)

  The corner radius.

* inline​Padding

  [Checkout​And​Accounts​Configuration​Branding​Spacing](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingSpacing)

  The inline padding.

* typography

  [Checkout​And​Accounts​Configuration​Branding​Typography​Style](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingTypographyStyle)

  The typography.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingComponents.primaryButton](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingComponents#field-CheckoutAndAccountsConfigurationBrandingComponents.fields.primaryButton)
* [CheckoutAndAccountsConfigurationBrandingComponents.secondaryButton](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingComponents#field-CheckoutAndAccountsConfigurationBrandingComponents.fields.secondaryButton)
