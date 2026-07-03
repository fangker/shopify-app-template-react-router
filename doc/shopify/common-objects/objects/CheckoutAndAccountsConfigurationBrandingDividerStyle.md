---
title: CheckoutAndAccountsConfigurationBrandingDividerStyle - GraphQL Admin
description: 'The customizations for the page, content, main, and order summary dividers.'
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingDividerStyle
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingDividerStyle.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Divider​Style

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The customizations for the page, content, main, and order summary dividers.

## Fields

* border​Style

  [Checkout​And​Accounts​Configuration​Branding​Border​Style](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingBorderStyle)

  The border style for the divider.

* border​Width

  [Checkout​And​Accounts​Configuration​Branding​Border​Width](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingBorderWidth)

  The border width for the divider.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingComponents.divider](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingComponents#field-CheckoutAndAccountsConfigurationBrandingComponents.fields.divider)
