---
title: CheckoutAndAccountsConfigurationBrandingCheckoutFooter - GraphQL Admin
description: A container for the checkout footer section customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCheckoutFooter
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCheckoutFooter.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Checkout​Footer

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

A container for the checkout footer section customizations.

## Fields

* alignment

  [Checkout​And​Accounts​Configuration​Branding​Footer​Alignment](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingFooterAlignment)

  The footer alignment.

* background

  [Checkout​And​Accounts​Configuration​Branding​Background](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingBackground)

  The background style of the footer container.

* colors

  [Checkout​And​Accounts​Configuration​Branding​Colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingColors)

  The colors customizations.

* content

  [Checkout​And​Accounts​Configuration​Branding​Footer​Content](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingFooterContent)

  The footer content settings.

* divided

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  The divided setting.

* padding

  [Checkout​And​Accounts​Configuration​Branding​Spacing​Keyword](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingSpacingKeyword)

  The padding of the footer container.

* position

  [Checkout​And​Accounts​Configuration​Branding​Footer​Position](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingFooterPosition)

  The footer position.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingCheckoutComponents.footer](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCheckoutComponents#field-CheckoutAndAccountsConfigurationBrandingCheckoutComponents.fields.footer)
