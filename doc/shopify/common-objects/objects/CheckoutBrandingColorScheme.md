---
title: CheckoutBrandingColorScheme - GraphQL Admin
description: >-
  A base set of color customizations that's applied to an area of Checkout, from
  which every component

  pulls its colors.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColorScheme
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColorScheme.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Color​Scheme

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

A base set of color customizations that's applied to an area of Checkout, from which every component pulls its colors.

## Fields

* base

  [Checkout​Branding​Color​Roles](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColorRoles)

  The main colors of a scheme. Used for the surface background, text, links, and more.

* control

  [Checkout​Branding​Control​Color​Roles](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingControlColorRoles)

  The colors of form controls, such as the [`TextField`](https://shopify.dev/docs/api/checkout-ui-extensions/latest/components/forms/textfield) and [`ChoiceList`](https://shopify.dev/docs/api/checkout-ui-extensions/latest/components/forms/choicelist) components.

* primary​Button

  [Checkout​Branding​Button​Color​Roles](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingButtonColorRoles)

  The colors of the primary button. For example, the main payment, or **Pay now** button.

* secondary​Button

  [Checkout​Branding​Button​Color​Roles](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingButtonColorRoles)

  The colors of the secondary button, which is used for secondary actions. For example, **Buy again**.

***

## Map

### Fields with this object

* [CheckoutBrandingColorSchemes.scheme1](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColorSchemes#field-CheckoutBrandingColorSchemes.fields.scheme1)
* [CheckoutBrandingColorSchemes.scheme2](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColorSchemes#field-CheckoutBrandingColorSchemes.fields.scheme2)
* [CheckoutBrandingColorSchemes.scheme3](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColorSchemes#field-CheckoutBrandingColorSchemes.fields.scheme3)
* [CheckoutBrandingColorSchemes.scheme4](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColorSchemes#field-CheckoutBrandingColorSchemes.fields.scheme4)
* [CheckoutBrandingColorSchemes.scheme5](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColorSchemes#field-CheckoutBrandingColorSchemes.fields.scheme5)
* [CheckoutBrandingColorSchemes.scheme6](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColorSchemes#field-CheckoutBrandingColorSchemes.fields.scheme6)
