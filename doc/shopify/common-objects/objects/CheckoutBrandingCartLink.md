---
title: CheckoutBrandingCartLink - GraphQL Admin
description: >-
  Controls the visibility of cart links displayed during checkout. These links

  allow customers to return to their cart or continue shopping.


  For example, an electronics store might hide cart links during final checkout

  steps to reduce distractions, or show them prominently to encourage customers
  to

  add accessories before completing their purchase.


  The `CartLink` object provides visibility settings to control when and how
  these

  navigation elements appear based on the merchant's checkout flow strategy.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCartLink
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCartLink.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Cart​Link

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

Controls the visibility of cart links displayed during checkout. These links allow customers to return to their cart or continue shopping.

For example, an electronics store might hide cart links during final checkout steps to reduce distractions, or show them prominently to encourage customers to add accessories before completing their purchase.

The `CartLink` object provides visibility settings to control when and how these navigation elements appear based on the merchant's checkout flow strategy.

## Fields

* visibility

  [Checkout​Branding​Visibility](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingVisibility)

  Whether the cart link is visible at checkout.

***

## Map

### Fields with this object

* [CheckoutBrandingCustomizations.cartLink](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCustomizations#field-CheckoutBrandingCustomizations.fields.cartLink)
