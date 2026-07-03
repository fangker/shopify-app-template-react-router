---
title: CheckoutAndAccountsConfigurationBrandingControlColorRoles - GraphQL Admin
description: The form control color customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingControlColorRoles
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingControlColorRoles.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Control​Color​Roles

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The form control color customizations.

## Fields

* accent

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The color of accented objects (links and focused state).

* background

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The color of the background.

* border

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The color of borders.

* decorative

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The decorative color for highlighting specific parts of the user interface.

* icon

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The color of icons.

* selected

  [Checkout​And​Accounts​Configuration​Branding​Color​Roles](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingColorRoles)

  The colors of selected controls.

* text

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The color of text.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingColors.control](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingColors#field-CheckoutAndAccountsConfigurationBrandingColors.fields.control)
