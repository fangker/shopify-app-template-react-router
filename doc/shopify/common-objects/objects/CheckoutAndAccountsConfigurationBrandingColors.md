---
title: CheckoutAndAccountsConfigurationBrandingColors - GraphQL Admin
description: The color settings used to customize the user interface.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingColors
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingColors.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Colors

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The color settings used to customize the user interface.

## Fields

* base

  [Checkout​And​Accounts​Configuration​Branding​Base​Color​Roles](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingBaseColorRoles)

  The main colors, used for the surface background, text, links, and more.

* control

  [Checkout​And​Accounts​Configuration​Branding​Control​Color​Roles](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingControlColorRoles)

  The colors of form controls, such as the [`TextField`](https://shopify.dev/docs/api/checkout-ui-extensions/latest/components/forms/textfield) and [`ChoiceList`](https://shopify.dev/docs/api/checkout-ui-extensions/latest/components/forms/choicelist) components.

* primary​Button

  [Checkout​And​Accounts​Configuration​Branding​Primary​Button​Color​Roles](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingPrimaryButtonColorRoles)

  The colors of the primary button. For example, the main payment, or **Pay now** button.

* secondary​Button

  [Checkout​And​Accounts​Configuration​Branding​Secondary​Button​Color​Roles](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSecondaryButtonColorRoles)

  The colors of the secondary button, which is used for secondary actions. For example, **Buy again**.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingCheckoutFooter.colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCheckoutFooter#field-CheckoutAndAccountsConfigurationBrandingCheckoutFooter.fields.colors)
* [CheckoutAndAccountsConfigurationBrandingCheckoutHeader.colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCheckoutHeader#field-CheckoutAndAccountsConfigurationBrandingCheckoutHeader.fields.colors)
* [CheckoutAndAccountsConfigurationBrandingCustomerAccountsFooter.colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomerAccountsFooter#field-CheckoutAndAccountsConfigurationBrandingCustomerAccountsFooter.fields.colors)
* [CheckoutAndAccountsConfigurationBrandingCustomerAccountsHeader.colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomerAccountsHeader#field-CheckoutAndAccountsConfigurationBrandingCustomerAccountsHeader.fields.colors)
* [CheckoutAndAccountsConfigurationBrandingCustomerAccountsMain.colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomerAccountsMain#field-CheckoutAndAccountsConfigurationBrandingCustomerAccountsMain.fields.colors)
* [CheckoutAndAccountsConfigurationBrandingCustomerAccountsMainSection.colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomerAccountsMainSection#field-CheckoutAndAccountsConfigurationBrandingCustomerAccountsMainSection.fields.colors)
* [CheckoutAndAccountsConfigurationBrandingFooter.colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingFooter#field-CheckoutAndAccountsConfigurationBrandingFooter.fields.colors)
* [CheckoutAndAccountsConfigurationBrandingHeader.colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingHeader#field-CheckoutAndAccountsConfigurationBrandingHeader.fields.colors)
* [CheckoutAndAccountsConfigurationBrandingMain.colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingMain#field-CheckoutAndAccountsConfigurationBrandingMain.fields.colors)
* [CheckoutAndAccountsConfigurationBrandingMainSection.colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingMainSection#field-CheckoutAndAccountsConfigurationBrandingMainSection.fields.colors)
* [CheckoutAndAccountsConfigurationBrandingOrderSummary.colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingOrderSummary#field-CheckoutAndAccountsConfigurationBrandingOrderSummary.fields.colors)
* [CheckoutAndAccountsConfigurationBrandingOrderSummarySection.colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingOrderSummarySection#field-CheckoutAndAccountsConfigurationBrandingOrderSummarySection.fields.colors)
* [CheckoutAndAccountsConfigurationBrandingSignInMain.colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSignInMain#field-CheckoutAndAccountsConfigurationBrandingSignInMain.fields.colors)
