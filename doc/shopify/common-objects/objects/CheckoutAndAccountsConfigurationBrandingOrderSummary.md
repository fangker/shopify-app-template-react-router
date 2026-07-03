---
title: CheckoutAndAccountsConfigurationBrandingOrderSummary - GraphQL Admin
description: The order summary customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingOrderSummary
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingOrderSummary.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Order​Summary

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The order summary customizations.

## Fields

* background​Image

  [Checkout​And​Accounts​Configuration​Branding​Image​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/CheckoutAndAccountsConfigurationBrandingImageValue)

  The background image of the order summary container.

* colors

  [Checkout​And​Accounts​Configuration​Branding​Colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingColors)

  The colors customizations.

* divider

  [Checkout​And​Accounts​Configuration​Branding​Container​Divider](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingContainerDivider)

  The order summary container's divider style and visibility.

* section

  [Checkout​And​Accounts​Configuration​Branding​Order​Summary​Section](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingOrderSummarySection)

  The order summary sections.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingCheckoutComponents.orderSummary](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCheckoutComponents#field-CheckoutAndAccountsConfigurationBrandingCheckoutComponents.fields.orderSummary)
