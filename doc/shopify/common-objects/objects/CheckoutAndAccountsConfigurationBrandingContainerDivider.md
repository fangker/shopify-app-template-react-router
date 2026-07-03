---
title: CheckoutAndAccountsConfigurationBrandingContainerDivider - GraphQL Admin
description: The container's divider customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingContainerDivider
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingContainerDivider.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Container​Divider

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The container's divider customizations.

## Fields

* border​Style

  [Checkout​And​Accounts​Configuration​Branding​Border​Style](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingBorderStyle)

  The divider style.

* border​Width

  [Checkout​And​Accounts​Configuration​Branding​Border​Width](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingBorderWidth)

  The divider width.

* visibility

  [Checkout​And​Accounts​Configuration​Branding​Visibility](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingVisibility)

  The divider visibility.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingContent.divider](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingContent#field-CheckoutAndAccountsConfigurationBrandingContent.fields.divider)
* [CheckoutAndAccountsConfigurationBrandingMain.divider](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingMain#field-CheckoutAndAccountsConfigurationBrandingMain.fields.divider)
* [CheckoutAndAccountsConfigurationBrandingOrderSummary.divider](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingOrderSummary#field-CheckoutAndAccountsConfigurationBrandingOrderSummary.fields.divider)
