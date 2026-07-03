---
title: CheckoutBrandingFontGroup - GraphQL Admin
description: >-
  A font group. To learn more about updating fonts, refer to the

  [checkoutBrandingUpsert](https://shopify.dev/api/admin-graphql/unstable/mutations/checkoutBrandingUpsert)

  mutation and the checkout branding
  [tutorial](https://shopify.dev/docs/apps/checkout/styling).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingFontGroup
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingFontGroup.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Font​Group

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

A font group. To learn more about updating fonts, refer to the [checkoutBrandingUpsert](https://shopify.dev/api/admin-graphql/unstable/mutations/checkoutBrandingUpsert) mutation and the checkout branding [tutorial](https://shopify.dev/docs/apps/checkout/styling).

## Fields

* base

  [Checkout​Branding​Font](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CheckoutBrandingFont)

  The base font.

* bold

  [Checkout​Branding​Font](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CheckoutBrandingFont)

  The bold font.

* loading​Strategy

  [Checkout​Branding​Font​Loading​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingFontLoadingStrategy)

  The font loading strategy.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The font group name.

***

## Map

### Fields with this object

* [CheckoutBrandingTypography.primary](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingTypography#field-CheckoutBrandingTypography.fields.primary)
* [CheckoutBrandingTypography.secondary](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingTypography#field-CheckoutBrandingTypography.fields.secondary)
