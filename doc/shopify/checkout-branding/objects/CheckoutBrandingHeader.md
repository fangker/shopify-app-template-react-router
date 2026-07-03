---
title: CheckoutBrandingHeader - GraphQL Admin
description: The header customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingHeader
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingHeader.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Header

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

The header customizations.

## Fields

* alignment

  [Checkout​Branding​Header​Alignment](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingHeaderAlignment)

  The header alignment.

* banner

  [Checkout​Branding​Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingImage)

  The background image of the header.

* cart​Link

  [Checkout​Branding​Header​Cart​Link](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingHeaderCartLink)

  The cart link customizations for 1-page checkout. This field allows to customize the cart icon that renders by default on 1-page checkout.

* color​Scheme

  [Checkout​Branding​Color​Scheme​Selection](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingColorSchemeSelection)

  The selected color scheme of the header container.

* divided

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  The divided setting.

* logo

  [Checkout​Branding​Logo](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingLogo)

  The store logo.

* padding

  [Checkout​Branding​Spacing​Keyword](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingSpacingKeyword)

  The padding of the header container.

* position

  [Checkout​Branding​Header​Position](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingHeaderPosition)

  The header position.

***

## Map

### Fields with this object

* [CheckoutBrandingCustomizations.header](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCustomizations#field-CheckoutBrandingCustomizations.fields.header)
