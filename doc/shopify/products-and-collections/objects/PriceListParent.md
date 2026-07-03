---
title: PriceListParent - GraphQL Admin
description: |-
  Represents relative adjustments from one price list to other prices.
    You can use a `PriceListParent` to specify an adjusted relative price using a percentage-based
    adjustment. Adjusted prices work in conjunction with exchange rules and rounding.

    [Adjustment types](https://shopify.dev/api/admin-graphql/latest/enums/pricelistadjustmenttype)
    support both percentage increases and decreases.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListParent'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListParent.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Price​List​Parent

object

Requires `read_products` access scope.

Represents relative adjustments from one price list to other prices. You can use a `PriceListParent` to specify an adjusted relative price using a percentage-based adjustment. Adjusted prices work in conjunction with exchange rules and rounding.

[Adjustment types](https://shopify.dev/api/admin-graphql/latest/enums/pricelistadjustmenttype) support both percentage increases and decreases.

## Fields

* adjustment

  [Price​List​Adjustment!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListAdjustment)

  non-null

  A price list adjustment.

* settings

  [Price​List​Adjustment​Settings!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListAdjustmentSettings)

  non-null

  A price list's settings for adjustment.

***

## Map

### Fields with this object

* [PriceList.parent](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList#field-PriceList.fields.parent)
