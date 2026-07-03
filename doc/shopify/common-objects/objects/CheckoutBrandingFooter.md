---
title: CheckoutBrandingFooter - GraphQL Admin
description: A container for the footer section customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingFooter
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingFooter.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Footer

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

A container for the footer section customizations.

## Fields

* alignment

  [Checkout​Branding​Footer​Alignment](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingFooterAlignment)

  The footer alignment.

* color​Scheme

  [Checkout​Branding​Color​Scheme​Selection](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingColorSchemeSelection)

  The selected color scheme of the footer container.

* content

  [Checkout​Branding​Footer​Content](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingFooterContent)

  The footer content settings.

* divided

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  The divided setting.

* padding

  [Checkout​Branding​Spacing​Keyword](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingSpacingKeyword)

  The padding of the footer container.

* position

  [Checkout​Branding​Footer​Position](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingFooterPosition)

  The footer position.

***

## Map

### Fields with this object

* [CheckoutBrandingCustomizations.footer](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCustomizations#field-CheckoutBrandingCustomizations.fields.footer)
