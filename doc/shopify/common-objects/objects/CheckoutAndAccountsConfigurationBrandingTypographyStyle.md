---
title: CheckoutAndAccountsConfigurationBrandingTypographyStyle - GraphQL Admin
description: The typography customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingTypographyStyle
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingTypographyStyle.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Typography​Style

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The typography customizations.

## Fields

* font

  [Checkout​And​Accounts​Configuration​Branding​Typography​Font](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingTypographyFont)

  The font.

* kerning

  [Checkout​And​Accounts​Configuration​Branding​Typography​Kerning](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingTypographyKerning)

  The kerning.

* letter​Case

  [Checkout​And​Accounts​Configuration​Branding​Typography​Letter​Case](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingTypographyLetterCase)

  The letter case.

* size

  [Checkout​And​Accounts​Configuration​Branding​Typography​Size](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingTypographySize)

  The font size.

* weight

  [Checkout​And​Accounts​Configuration​Branding​Typography​Weight](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingTypographyWeight)

  The font weight.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingButton.typography](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingButton#field-CheckoutAndAccountsConfigurationBrandingButton.fields.typography)
* [CheckoutAndAccountsConfigurationBrandingHeadingLevel.typography](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingHeadingLevel#field-CheckoutAndAccountsConfigurationBrandingHeadingLevel.fields.typography)
* [CheckoutAndAccountsConfigurationBrandingSelect.typography](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSelect#field-CheckoutAndAccountsConfigurationBrandingSelect.fields.typography)
* [CheckoutAndAccountsConfigurationBrandingTextField.typography](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingTextField#field-CheckoutAndAccountsConfigurationBrandingTextField.fields.typography)
