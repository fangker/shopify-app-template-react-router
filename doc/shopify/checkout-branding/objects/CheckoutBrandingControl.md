---
title: CheckoutBrandingControl - GraphQL Admin
description: The form controls customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingControl
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingControl.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Control

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

The form controls customizations.

## Fields

* border

  [Checkout​Branding​Simple​Border](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingSimpleBorder)

  The border used for form controls.

* color

  [Checkout​Branding​Color​Selection](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingColorSelection)

  Set to TRANSPARENT to define transparent form controls. If null, form controls inherit colors from their scheme settings (for example, the main section inherits from `design_system.colors.schemes.scheme1.control` by default). Note that usage of the `customizations.control.color` setting to customize the form control color is deprecated.

* corner​Radius

  [Checkout​Branding​Corner​Radius](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingCornerRadius)

  The corner radius used for form controls.

* label​Position

  [Checkout​Branding​Label​Position](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingLabelPosition)

  The label position used for form controls.

***

## Map

### Fields with this object

* [CheckoutBrandingCustomizations.control](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCustomizations#field-CheckoutBrandingCustomizations.fields.control)
