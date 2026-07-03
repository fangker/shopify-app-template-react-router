---
title: CheckoutAndAccountsConfigurationBrandingMerchandiseThumbnail - GraphQL Admin
description: The merchandise thumbnails customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingMerchandiseThumbnail
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingMerchandiseThumbnail.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Merchandise​Thumbnail

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The merchandise thumbnails customizations.

## Fields

* badge

  [Checkout​And​Accounts​Configuration​Branding​Merchandise​Thumbnail​Badge](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingMerchandiseThumbnailBadge)

  The merchandise thumbnail badge.

* border

  [Checkout​And​Accounts​Configuration​Branding​Simple​Border](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingSimpleBorder)

  The border.

* corner​Radius

  [Checkout​And​Accounts​Configuration​Branding​Corner​Radius](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingCornerRadius)

  The corner radius.

* fit

  [Checkout​And​Accounts​Configuration​Branding​Object​Fit](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingObjectFit)

  The property used to customize how the product image fits within merchandise thumbnails.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingComponents.merchandiseThumbnail](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingComponents#field-CheckoutAndAccountsConfigurationBrandingComponents.fields.merchandiseThumbnail)
