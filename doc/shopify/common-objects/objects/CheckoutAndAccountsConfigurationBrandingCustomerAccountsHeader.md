---
title: CheckoutAndAccountsConfigurationBrandingCustomerAccountsHeader - GraphQL Admin
description: The checkout header customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomerAccountsHeader
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomerAccountsHeader.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Customer​Accounts​Header

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The checkout header customizations.

## Fields

* alignment

  [Checkout​And​Accounts​Configuration​Branding​Header​Alignment](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingHeaderAlignment)

  The header alignment.

* colors

  [Checkout​And​Accounts​Configuration​Branding​Colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingColors)

  The colors customizations.

* logo

  [Checkout​And​Accounts​Configuration​Branding​Customer​Accounts​Logo](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomerAccountsLogo)

  The store logo.

* padding

  [Checkout​And​Accounts​Configuration​Branding​Spacing​Keyword](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingSpacingKeyword)

  The padding of the header container.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingCustomerAccountsComponents.header](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomerAccountsComponents#field-CheckoutAndAccountsConfigurationBrandingCustomerAccountsComponents.fields.header)
