---
title: CheckoutAndAccountsConfigurationBrandingBaseColorRoles - GraphQL Admin
description: The base color role customizations for a surface.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingBaseColorRoles
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingBaseColorRoles.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Base​Color​Roles

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The base color role customizations for a surface.

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

* text

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The color of text.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingColors.base](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingColors#field-CheckoutAndAccountsConfigurationBrandingColors.fields.base)
