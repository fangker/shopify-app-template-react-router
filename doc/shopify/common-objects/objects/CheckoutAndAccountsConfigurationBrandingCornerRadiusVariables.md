---
title: CheckoutAndAccountsConfigurationBrandingCornerRadiusVariables - GraphQL Admin
description: >-
  The corner radius variable customizations that define the pixel size of corner
  radius options.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCornerRadiusVariables
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCornerRadiusVariables.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Corner​Radius​Variables

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The corner radius variable customizations that define the pixel size of corner radius options.

## Fields

* base

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The value in pixels for base corner radii. Example: 5.

* large

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The value in pixels for large corner radii. Example: 10.

* small

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The value in pixels for small corner radii. Example: 3.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingDesignTokens.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingDesignTokens#field-CheckoutAndAccountsConfigurationBrandingDesignTokens.fields.cornerRadius)
