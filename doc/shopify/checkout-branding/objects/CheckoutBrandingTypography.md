---
title: CheckoutBrandingTypography - GraphQL Admin
description: >-
  The typography settings used for checkout-related text. Use these settings to
  customize the

  font family and size for primary and secondary text elements.


  Refer to the [typography
  tutorial](https://shopify.dev/docs/apps/checkout/styling/customize-typography)

  for further information on typography customization.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingTypography
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingTypography.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Typography

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

The typography settings used for checkout-related text. Use these settings to customize the font family and size for primary and secondary text elements.

Refer to the [typography tutorial](https://shopify.dev/docs/apps/checkout/styling/customize-typography) for further information on typography customization.

## Fields

* primary

  [Checkout​Branding​Font​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingFontGroup)

  A font group used for most components such as text, buttons and form controls.

* secondary

  [Checkout​Branding​Font​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingFontGroup)

  A font group used for heading components by default.

* size

  [Checkout​Branding​Font​Size](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingFontSize)

  The font size design system (base size in pixels and scaling between different sizes).

***

## Map

### Fields with this object

* [CheckoutBrandingDesignSystem.typography](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingDesignSystem#field-CheckoutBrandingDesignSystem.fields.typography)
