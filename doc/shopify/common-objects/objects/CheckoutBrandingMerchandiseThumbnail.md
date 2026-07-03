---
title: CheckoutBrandingMerchandiseThumbnail - GraphQL Admin
description: The merchandise thumbnails customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingMerchandiseThumbnail
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingMerchandiseThumbnail.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Merchandise​Thumbnail

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

The merchandise thumbnails customizations.

## Fields

* badge

  [Checkout​Branding​Merchandise​Thumbnail​Badge](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingMerchandiseThumbnailBadge)

  The settings for the merchandise thumbnail badge.

* border

  [Checkout​Branding​Simple​Border](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingSimpleBorder)

  The border used for merchandise thumbnails.

* corner​Radius

  [Checkout​Branding​Corner​Radius](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingCornerRadius)

  The corner radius used for merchandise thumbnails.

* fit

  [Checkout​Branding​Object​Fit](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingObjectFit)

  The property used to customize how the product image fits within merchandise thumbnails.

***

## Map

### Fields with this object

* [CheckoutBrandingCustomizations.merchandiseThumbnail](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCustomizations#field-CheckoutBrandingCustomizations.fields.merchandiseThumbnail)
