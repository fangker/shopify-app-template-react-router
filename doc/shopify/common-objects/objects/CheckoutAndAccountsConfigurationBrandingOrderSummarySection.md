---
title: CheckoutAndAccountsConfigurationBrandingOrderSummarySection - GraphQL Admin
description: The order summary sections customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingOrderSummarySection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingOrderSummarySection.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Order​Summary​Section

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The order summary sections customizations.

## Fields

* background

  [Checkout​And​Accounts​Configuration​Branding​Background](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingBackground)

  The background style of the order summary sections.

* border

  [Checkout​And​Accounts​Configuration​Branding​Simple​Border](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingSimpleBorder)

  The border for the order summary sections.

* border​Style

  [Checkout​And​Accounts​Configuration​Branding​Border​Style](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingBorderStyle)

  The border style of the order summary sections.

* border​Width

  [Checkout​And​Accounts​Configuration​Branding​Border​Width](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingBorderWidth)

  The border width of the order summary sections.

* colors

  [Checkout​And​Accounts​Configuration​Branding​Colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingColors)

  The colors customizations.

* corner​Radius

  [Checkout​And​Accounts​Configuration​Branding​Corner​Radius](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingCornerRadius)

  The corner radius of the order summary sections.

* padding

  [Checkout​And​Accounts​Configuration​Branding​Spacing​Keyword](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingSpacingKeyword)

  The padding of the order summary sections.

* shadow

  [Checkout​And​Accounts​Configuration​Branding​Shadow](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingShadow)

  The shadow of the order summary sections.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingOrderSummary.section](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingOrderSummary#field-CheckoutAndAccountsConfigurationBrandingOrderSummary.fields.section)
