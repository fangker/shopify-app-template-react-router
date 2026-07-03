---
title: CheckoutAndAccountsConfigurationBrandingSharedColors - GraphQL Admin
description: Shared color customizations for semantic and functional colors.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSharedColors
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSharedColors.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Shared​Colors

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

Shared color customizations for semantic and functional colors.

## Fields

* accent

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The accent color for interactive elements.

* button

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The button color.

* control

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The form control color.

* critical

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The critical/error color.

* decorative

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The decorative color.

* info

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The informational color.

* success

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The success color.

* warning

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The warning color.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingShared.colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingShared#field-CheckoutAndAccountsConfigurationBrandingShared.fields.colors)
