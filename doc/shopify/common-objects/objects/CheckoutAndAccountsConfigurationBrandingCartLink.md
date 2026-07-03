---
title: CheckoutAndAccountsConfigurationBrandingCartLink - GraphQL Admin
description: The customizations that you can make to cart links at checkout.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCartLink
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCartLink.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Cart​Link

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The customizations that you can make to cart links at checkout.

## Fields

* visibility

  [Checkout​And​Accounts​Configuration​Branding​Visibility](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingVisibility)

  Whether the cart link is visible at checkout.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingCheckoutComponents.cartLink](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCheckoutComponents#field-CheckoutAndAccountsConfigurationBrandingCheckoutComponents.fields.cartLink)
