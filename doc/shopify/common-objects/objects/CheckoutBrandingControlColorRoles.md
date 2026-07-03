---
title: CheckoutBrandingControlColorRoles - GraphQL Admin
description: Colors for form controls.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingControlColorRoles
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingControlColorRoles.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Control​Color​Roles

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

Colors for form controls.

## Fields

* accent

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The color of accented objects (links and focused state).

* background

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The color of the background.

* border

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The color of borders.

* decorative

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The decorative color for highlighting specific parts of the user interface.

* icon

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The color of icons.

* selected

  [Checkout​Branding​Color​Roles](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColorRoles)

  The colors of selected controls.

* text

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The color of text.

***

## Map

### Fields with this object

* [CheckoutBrandingColorScheme.control](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColorScheme#field-CheckoutBrandingColorScheme.fields.control)
