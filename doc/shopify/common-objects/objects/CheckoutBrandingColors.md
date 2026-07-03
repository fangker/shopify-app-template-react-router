---
title: CheckoutBrandingColors - GraphQL Admin
description: The color settings for global colors and color schemes.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColors
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColors.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Colors

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

The color settings for global colors and color schemes.

## Fields

* global

  [Checkout​Branding​Color​Global](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColorGlobal)

  A group of global colors for customizing the overall look and feel of the user interface.

* schemes

  [Checkout​Branding​Color​Schemes](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColorSchemes)

  A set of color schemes which apply to different areas of the user interface.

***

## Map

### Fields with this object

* [CheckoutBrandingDesignSystem.colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingDesignSystem#field-CheckoutBrandingDesignSystem.fields.colors)
