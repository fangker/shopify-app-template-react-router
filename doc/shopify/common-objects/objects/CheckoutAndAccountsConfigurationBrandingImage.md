---
title: CheckoutAndAccountsConfigurationBrandingImage - GraphQL Admin
description: The image.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingImage
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingImage.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Image

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The image.

## Fields

* image

  [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  The image details.

***

## Map

### Possible type in

* [Checkout​And​Accounts​Configuration​Branding​Image​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/CheckoutAndAccountsConfigurationBrandingImageValue)
