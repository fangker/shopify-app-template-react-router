---
title: CheckoutBrandingChoiceList - GraphQL Admin
description: >-
  Controls spacing customization for the grouped variant of choice list
  components in checkout forms.


  The `ChoiceList` object contains settings specifically for the 'group' variant

  styling through the
  [`ChoiceListGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingChoiceListGroup)

  field, which determines the spacing between choice options.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingChoiceList
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingChoiceList.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​Branding​Choice​List

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

Controls spacing customization for the grouped variant of choice list components in checkout forms.

The `ChoiceList` object contains settings specifically for the 'group' variant styling through the [`ChoiceListGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingChoiceListGroup) field, which determines the spacing between choice options.

## Fields

* group

  [Checkout​Branding​Choice​List​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingChoiceListGroup)

  The settings that apply to the 'group' variant of ChoiceList.

***

## Map

### Fields with this object

* [CheckoutBrandingCustomizations.choiceList](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCustomizations#field-CheckoutBrandingCustomizations.fields.choiceList)
