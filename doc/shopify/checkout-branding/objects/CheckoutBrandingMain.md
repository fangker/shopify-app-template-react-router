---
title: CheckoutBrandingMain - GraphQL Admin
description: The main container customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingMain
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingMain.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Main

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

The main container customizations.

## Fields

* background​Image

  [Checkout​Branding​Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingImage)

  The background image of the main container.

* color​Scheme

  [Checkout​Branding​Color​Scheme​Selection](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingColorSchemeSelection)

  The selected color scheme of the main container.

* divider

  [Checkout​Branding​Container​Divider](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingContainerDivider)

  The main container's divider style and visibility.

* section

  [Checkout​Branding​Main​Section](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingMainSection)

  The settings for the main sections.

***

## Map

### Fields with this object

* [CheckoutBrandingCustomizations.main](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCustomizations#field-CheckoutBrandingCustomizations.fields.main)
