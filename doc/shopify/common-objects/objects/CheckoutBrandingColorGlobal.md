---
title: CheckoutBrandingColorGlobal - GraphQL Admin
description: >-
  Defines the global color roles for checkout branding. These semantic colors

  maintain consistency across all checkout elements and provide the foundation
  for

  the checkout's visual design system.


  Use global colors to:

  - Set brand colors for primary actions and buttons

  - Define accent colors for links and interactive elements

  - Configure semantic colors for success, warning, and error states

  - Apply decorative colors for visual highlights


  For example, a merchant might set their brand blue for primary buttons, green

  for success messages, amber for warnings, and red for critical errors,
  creating

  a consistent color language throughout checkout.


  Learn more about [checkout
  customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBranding).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColorGlobal
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColorGlobal.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Color​Global

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

Defines the global color roles for checkout branding. These semantic colors maintain consistency across all checkout elements and provide the foundation for the checkout's visual design system.

Use global colors to:

* Set brand colors for primary actions and buttons
* Define accent colors for links and interactive elements
* Configure semantic colors for success, warning, and error states
* Apply decorative colors for visual highlights

For example, a merchant might set their brand blue for primary buttons, green for success messages, amber for warnings, and red for critical errors, creating a consistent color language throughout checkout.

Learn more about [checkout customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBranding).

## Fields

* accent

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A color used for interaction, like links and focus states.

* brand

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A color that's strongly associated with the merchant. Currently used for primary buttons, for example **Pay now**, and secondary buttons, for example **Buy again**.

* critical

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A semantic color used for components that communicate critical content. For example, a blocking error such as the requirement to enter a valid credit card number.

* decorative

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A color used to highlight certain areas of the user interface. For example, the [`Text`](https://shopify.dev/docs/api/checkout-ui-extensions/latest/components/titles-and-text/text#textprops-propertydetail-appearance) component.

* info

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A semantic color used for components that communicate general, informative content.

* success

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A semantic color used for components that communicate successful actions or a positive state.

* warning

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A semantic color used for components that display content that requires attention. For example, something that might be wrong, but not blocking.

***

## Map

### Fields with this object

* [CheckoutBrandingColors.global](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColors#field-CheckoutBrandingColors.fields.global)
