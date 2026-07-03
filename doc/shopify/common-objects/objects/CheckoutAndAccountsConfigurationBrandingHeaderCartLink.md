---
title: CheckoutAndAccountsConfigurationBrandingHeaderCartLink - GraphQL Admin
description: The header cart link customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingHeaderCartLink
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingHeaderCartLink.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration​Branding​Header​Cart​Link

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The header cart link customizations.

## Fields

* content​Type

  [Checkout​And​Accounts​Configuration​Branding​Cart​Link​Content​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationBrandingCartLinkContentType)

  The content type for the header back to cart link in 1-page checkout. Setting this to image will render the custom image provided using the image field on the header cart\_link object. If no image is provided, the default cart icon will be used.

* image

  [Checkout​And​Accounts​Configuration​Branding​Image​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/CheckoutAndAccountsConfigurationBrandingImageValue)

  The image that's used for the header back to cart link in 1-page checkout when the content type is set to image.

***

## Map

### Fields with this object

* [CheckoutAndAccountsConfigurationBrandingCheckoutHeader.cartLink](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCheckoutHeader#field-CheckoutAndAccountsConfigurationBrandingCheckoutHeader.fields.cartLink)
