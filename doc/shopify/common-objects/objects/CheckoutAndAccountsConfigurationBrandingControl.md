---
title: CheckoutAndAccountsConfigurationBrandingControl - GraphQL Admin
description: The form controls customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingControl
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingControl.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Control

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The form controls customizations.

## Fields

* border

  [Checkout​And​Accounts​Configuration​Branding​Simple​Border](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingSimpleBorder)

  The border.

* corner​Radius

  [Checkout​And​Accounts​Configuration​Branding​Corner​Radius](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingCornerRadius)

  The corner radius.

* label​Position

  [Checkout​And​Accounts​Configuration​Branding​Label​Position](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingLabelPosition)

  The label position.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingComponents.control](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingComponents#field-CheckoutAndAccountsConfigurationBrandingComponents.fields.control)
