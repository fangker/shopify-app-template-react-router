---
title: CheckoutBrandingHeaderCartLink - GraphQL Admin
description: The header cart link customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingHeaderCartLink
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingHeaderCartLink.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Header​Cart​Link

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

The header cart link customizations.

## Fields

* content​Type

  [Checkout​Branding​Cart​Link​Content​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingCartLinkContentType)

  The content type for the header back to cart link in 1-page checkout. Setting this to image will render the custom image provided using the image field on the header cart\_link object. If no image is provided, the default cart icon will be used.

* image

  [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  The image that's used for the header back to cart link in 1-page checkout when the content type is set to image.

***

## Map

### Fields with this object

* [CheckoutBrandingHeader.cartLink](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingHeader#field-CheckoutBrandingHeader.fields.cartLink)
