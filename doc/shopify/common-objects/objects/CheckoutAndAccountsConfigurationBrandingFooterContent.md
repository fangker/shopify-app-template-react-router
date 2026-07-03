---
title: CheckoutAndAccountsConfigurationBrandingFooterContent - GraphQL Admin
description: The footer content customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingFooterContent
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingFooterContent.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Footer​Content

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The footer content customizations.

## Fields

* visibility

  [Checkout​And​Accounts​Configuration​Branding​Visibility](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingVisibility)

  The visibility for footer content.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingCheckoutFooter.content](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCheckoutFooter#field-CheckoutAndAccountsConfigurationBrandingCheckoutFooter.fields.content)
* [CheckoutAndAccountsConfigurationBrandingFooter.content](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingFooter#field-CheckoutAndAccountsConfigurationBrandingFooter.fields.content)
