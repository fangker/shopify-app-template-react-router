---
title: PriceListAdjustment - GraphQL Admin
description: >-
  The type and value of a price list adjustment.


  For more information on price lists, refer to

  [Support different pricing
  models](https://shopify.dev/apps/internationalization/product-price-lists).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListAdjustment
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListAdjustment.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Price​List​Adjustment

object

Requires `read_products` access scope.

The type and value of a price list adjustment.

For more information on price lists, refer to [Support different pricing models](https://shopify.dev/apps/internationalization/product-price-lists).

## Fields

* type

  [Price​List​Adjustment​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListAdjustmentType)

  non-null

  The type of price adjustment, such as percentage increase or decrease.

* value

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The value of price adjustment, where positive numbers reduce the prices and negative numbers increase them.

***

## Map

### Fields with this object

* [PriceListParent.adjustment](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListParent#field-PriceListParent.fields.adjustment)
