---
title: CheckoutBrandingButton - GraphQL Admin
description: The buttons customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingButton
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingButton.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Button

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

The buttons customizations.

## Fields

* background

  [Checkout​Branding​Background​Style](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingBackgroundStyle)

  The background style used for buttons.

* block​Padding

  [Checkout​Branding​Spacing](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingSpacing)

  The block padding used for buttons.

* border

  [Checkout​Branding​Simple​Border](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingSimpleBorder)

  The border used for buttons.

* corner​Radius

  [Checkout​Branding​Corner​Radius](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingCornerRadius)

  The corner radius used for buttons.

* inline​Padding

  [Checkout​Branding​Spacing](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingSpacing)

  The inline padding used for buttons.

* typography

  [Checkout​Branding​Typography​Style](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingTypographyStyle)

  The typography used for buttons.

***

## Map

### Fields with this object

* [CheckoutBrandingCustomizations.primaryButton](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCustomizations#field-CheckoutBrandingCustomizations.fields.primaryButton)
* [CheckoutBrandingCustomizations.secondaryButton](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCustomizations#field-CheckoutBrandingCustomizations.fields.secondaryButton)
