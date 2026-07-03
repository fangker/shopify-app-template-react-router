---
title: ShippingConfiguration - GraphQL Admin
description: |-
  The shipping configuration attached to a market. Defines the shipping
  options available when a buyer is resolved to that market.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingConfiguration
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingConfiguration.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shipping​Configuration

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

The shipping configuration attached to a market. Defines the shipping options available when a buyer is resolved to that market.

## Fields

* is​Enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether shipping is enabled for this market. When false, customers in this market won't see any shipping options.

* option​Definitions

  [Delivery​Option​Definition​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryOptionDefinitionConnection)

  non-null

  The shipping options configured for this market.

  * active

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    ### Arguments

    Filter shipping options by active state. When true, returns only active shipping options; when false, returns only inactive shipping options; when omitted or null, returns all shipping options.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* option​Definitions​Count

  [Count!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  non-null

  The number of shipping options in this configuration.

  * active

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    ### Arguments

    Filter shipping option count by active state. When true, counts only active shipping options; when false, counts only inactive shipping options; when omitted or null, counts all shipping options.

  ***

***

## Map

### Fields with this object

* [MarketDeliveryConfigurations.shipping](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketDeliveryConfigurations#field-MarketDeliveryConfigurations.fields.shipping)
