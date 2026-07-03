---
title: CheckoutBrandingButtonColorRoles - GraphQL Admin
description: >-
  Defines the color palette specifically for button elements within checkout

  branding, including hover states. These color roles ensure buttons maintain

  proper contrast and visual hierarchy throughout the checkout experience.


  For example, a sports brand might configure bright accent colors for primary

  action buttons, with darker hover states and contrasting text colors that

  maintain accessibility standards.


  Use the `ButtonColorRoles` object to:

  - Define button color schemes for different states

  - Ensure proper contrast for accessibility compliance

  - Coordinate button colors with overall brand palette


  Button color roles include background, border, text, icon, accent (for focused

  states), and decorative elements, plus specific hover state colors that
  provide

  clear interactive feedback to customers.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingButtonColorRoles
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingButtonColorRoles.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Button​Color​Roles

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

Defines the color palette specifically for button elements within checkout branding, including hover states. These color roles ensure buttons maintain proper contrast and visual hierarchy throughout the checkout experience.

For example, a sports brand might configure bright accent colors for primary action buttons, with darker hover states and contrasting text colors that maintain accessibility standards.

Use the `ButtonColorRoles` object to:

* Define button color schemes for different states
* Ensure proper contrast for accessibility compliance
* Coordinate button colors with overall brand palette

Button color roles include background, border, text, icon, accent (for focused states), and decorative elements, plus specific hover state colors that provide clear interactive feedback to customers.

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

* hover

  [Checkout​Branding​Color​Roles](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColorRoles)

  The colors of the button on hover.

* icon

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The color of icons.

* text

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The color of text.

***

## Map

### Fields with this object

* [CheckoutBrandingColorScheme.primaryButton](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColorScheme#field-CheckoutBrandingColorScheme.fields.primaryButton)
* [CheckoutBrandingColorScheme.secondaryButton](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingColorScheme#field-CheckoutBrandingColorScheme.fields.secondaryButton)
