---
title: CheckoutBrandingBuyerJourney - GraphQL Admin
description: >-
  Controls the visibility settings for checkout breadcrumb navigation that shows

  customers their progress through the purchase journey. This simple
  customization

  allows merchants to show or hide the breadcrumb trail based on their checkout

  flow preferences.


  For example, a single-page checkout experience might hide breadcrumbs to
  create

  a more streamlined appearance, while multi-step checkouts can display them to

  help customers understand their progress.


  The visibility setting provides merchants flexibility in how they present

  checkout navigation to match their specific user experience strategy.


  Learn more about [checkout
  customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBranding).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingBuyerJourney
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingBuyerJourney.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Buyer​Journey

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

Controls the visibility settings for checkout breadcrumb navigation that shows customers their progress through the purchase journey. This simple customization allows merchants to show or hide the breadcrumb trail based on their checkout flow preferences.

For example, a single-page checkout experience might hide breadcrumbs to create a more streamlined appearance, while multi-step checkouts can display them to help customers understand their progress.

The visibility setting provides merchants flexibility in how they present checkout navigation to match their specific user experience strategy.

Learn more about [checkout customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBranding).

## Fields

* visibility

  [Checkout​Branding​Visibility](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingVisibility)

  An option to display or hide the breadcrumbs that represent the buyer's journey on 3-page checkout.

***

## Map

### Fields with this object

* [CheckoutBrandingCustomizations.buyerJourney](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCustomizations#field-CheckoutBrandingCustomizations.fields.buyerJourney)
