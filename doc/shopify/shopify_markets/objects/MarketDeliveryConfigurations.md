---
title: MarketDeliveryConfigurations - GraphQL Admin
description: >-
  Delivery configurations for a market. Container type for shipping
  configuration.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketDeliveryConfigurations
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketDeliveryConfigurations.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Market​Delivery​Configurations

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

Delivery configurations for a market. Container type for shipping configuration.

## Fields

* shipping

  [Shipping​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingConfiguration)

  The shipping configuration for this market. Null means the market inherits shipping from its parent.

***

## Map

### Fields with this object

* [Market.delivery](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.delivery)
