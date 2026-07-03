---
title: CheckoutBrandingOrderSummary - GraphQL Admin
description: The order summary customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingOrderSummary
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingOrderSummary.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Order​Summary

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

The order summary customizations.

## Fields

* background​Image

  [Checkout​Branding​Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingImage)

  The background image of the order summary container.

* color​Scheme

  [Checkout​Branding​Color​Scheme​Selection](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingColorSchemeSelection)

  The selected color scheme of the order summary container.

* divider

  [Checkout​Branding​Container​Divider](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingContainerDivider)

  The order summary container's divider style and visibility.

* section

  [Checkout​Branding​Order​Summary​Section](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingOrderSummarySection)

  The settings for the order summary sections.

***

## Map

### Fields with this object

* [CheckoutBrandingCustomizations.orderSummary](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCustomizations#field-CheckoutBrandingCustomizations.fields.orderSummary)
