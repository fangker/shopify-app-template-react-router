---
title: CheckoutBrandingLogo - GraphQL Admin
description: The store logo customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingLogo
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingLogo.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Logo

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

The store logo customizations.

## Fields

* image

  [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  The logo image.

* max​Width

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The maximum width of the logo.

* visibility

  [Checkout​Branding​Visibility](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingVisibility)

  The visibility of the logo.

***

## Map

### Fields with this object

* [CheckoutBrandingHeader.logo](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingHeader#field-CheckoutBrandingHeader.fields.logo)
