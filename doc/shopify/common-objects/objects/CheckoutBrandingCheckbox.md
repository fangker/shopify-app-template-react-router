---
title: CheckoutBrandingCheckbox - GraphQL Admin
description: |-
  Defines the visual styling for checkbox elements throughout the checkout
  interface, focusing on corner radius customization. This allows merchants to
  align checkbox appearance with their overall design aesthetic.

  For example, a modern minimalist brand might prefer sharp, square checkboxes
  while a friendly consumer brand could opt for rounded corners to create a
  softer, more approachable feel.

  The corner radius setting ensures checkboxes integrate seamlessly with the
  overall checkout design language and brand identity.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCheckbox
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCheckbox.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Checkbox

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

Defines the visual styling for checkbox elements throughout the checkout interface, focusing on corner radius customization. This allows merchants to align checkbox appearance with their overall design aesthetic.

For example, a modern minimalist brand might prefer sharp, square checkboxes while a friendly consumer brand could opt for rounded corners to create a softer, more approachable feel.

The corner radius setting ensures checkboxes integrate seamlessly with the overall checkout design language and brand identity.

## Fields

* corner​Radius

  [Checkout​Branding​Corner​Radius](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingCornerRadius)

  The corner radius used for checkboxes.

***

## Map

### Fields with this object

* [CheckoutBrandingCustomizations.checkbox](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCustomizations#field-CheckoutBrandingCustomizations.fields.checkbox)
