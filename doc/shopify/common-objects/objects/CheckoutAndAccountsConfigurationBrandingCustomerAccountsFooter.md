---
title: CheckoutAndAccountsConfigurationBrandingCustomerAccountsFooter - GraphQL Admin
description: A container for the customer accounts footer section customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomerAccountsFooter
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomerAccountsFooter.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Customer​Accounts​Footer

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

A container for the customer accounts footer section customizations.

## Fields

* alignment

  [Checkout​And​Accounts​Configuration​Branding​Footer​Alignment](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingFooterAlignment)

  The footer alignment.

* colors

  [Checkout​And​Accounts​Configuration​Branding​Colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingColors)

  The colors customizations.

* padding

  [Checkout​And​Accounts​Configuration​Branding​Spacing​Keyword](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingSpacingKeyword)

  The padding of the footer container.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingCustomerAccountsComponents.footer](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomerAccountsComponents#field-CheckoutAndAccountsConfigurationBrandingCustomerAccountsComponents.fields.footer)
