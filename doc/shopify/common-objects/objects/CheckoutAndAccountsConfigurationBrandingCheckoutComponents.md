---
title: CheckoutAndAccountsConfigurationBrandingCheckoutComponents - GraphQL Admin
description: The checkout-specific component customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCheckoutComponents
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCheckoutComponents.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Checkout​Components

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The checkout-specific component customizations.

## Fields

* buyer​Journey

  [Checkout​And​Accounts​Configuration​Branding​Buyer​Journey](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingBuyerJourney)

  The customizations for the breadcrumbs that represent a buyer's journey to the checkout.

* cart​Link

  [Checkout​And​Accounts​Configuration​Branding​Cart​Link](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCartLink)

  The checkout cart link customizations. For example, by setting the visibility field to `HIDDEN`, you can hide the cart icon in the header for one-page checkout, and the cart link in breadcrumbs in three-page checkout.

* content

  [Checkout​And​Accounts​Configuration​Branding​Content](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingContent)

  The content container customizations.

* express​Checkout

  [Checkout​And​Accounts​Configuration​Branding​Express​Checkout](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingExpressCheckout)

  The express checkout customizations.

* footer

  [Checkout​And​Accounts​Configuration​Branding​Checkout​Footer](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCheckoutFooter)

  The checkout footer customizations.

* header

  [Checkout​And​Accounts​Configuration​Branding​Checkout​Header](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCheckoutHeader)

  The checkout header customizations.

* main

  [Checkout​And​Accounts​Configuration​Branding​Main](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingMain)

  The main checkout customizations.

* order​Summary

  [Checkout​And​Accounts​Configuration​Branding​Order​Summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingOrderSummary)

  The order summary customizations.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingCheckoutSurface.components](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCheckoutSurface#field-CheckoutAndAccountsConfigurationBrandingCheckoutSurface.fields.components)
