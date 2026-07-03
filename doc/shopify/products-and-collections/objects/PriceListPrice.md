---
title: PriceListPrice - GraphQL Admin
description: >-
  Pricing for a
  [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)
  on a
  [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList).
  Represents the variant's price, compare-at price, and whether the price is
  fixed

  or calculated using percentage-based adjustments. The
  [`PriceListPriceOriginType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListPriceOriginType)

  distinguishes between prices set directly on the price list (fixed) and prices

  calculated using the price list's adjustment configuration (relative).


  Learn more about [building catalogs with different pricing

  models](https://shopify.dev/docs/apps/build/markets/build-catalog).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Price​List​Price

object

Requires `read_products` access scope. Also: The user must have permission to view catalogs.

Pricing for a [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Represents the variant's price, compare-at price, and whether the price is fixed or calculated using percentage-based adjustments. The [`PriceListPriceOriginType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListPriceOriginType) distinguishes between prices set directly on the price list (fixed) and prices calculated using the price list's adjustment configuration (relative).

Learn more about [building catalogs with different pricing models](https://shopify.dev/docs/apps/build/markets/build-catalog).

## Fields

* compare​At​Price

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The compare-at price of the product variant on this price list.

* origin​Type

  [Price​List​Price​Origin​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListPriceOriginType)

  non-null

  The origin of a price, either fixed (defined on the price list) or relative (calculated using a price list adjustment configuration).

* price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The price of the product variant on this price list.

* quantity​Price​Breaks

  [Quantity​Price​Break​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/QuantityPriceBreakConnection)

  non-null

  A list of quantity breaks for the product variant.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

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

  * sort​Key

    [Quantity​Price​Break​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/QuantityPriceBreakSortKeys)

    Default:MINIMUM\_QUANTITY

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* variant

  [Product​Variant!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  non-null

  The product variant associated with this price.

***

## Map

### Fields and connections with this object

* [PriceList.prices](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList#field-PriceList.fields.prices)
* [PriceListPriceConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListPriceConnection#returns-nodes)
* [PriceListPriceEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPriceEdge#field-PriceListPriceEdge.fields.node)

***

## Mutations

* [price​List​Fixed​Prices​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesAdd)

  mutation

  Creates or updates fixed prices on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Use this mutation to set specific prices for [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects that override the price list's default percentage-based adjustments.

  When you add fixed prices, the mutation replaces any existing fixed prices for those variants on the price list.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list to which the fixed prices will be added or updated.

  * prices

    [\[Price​List​Price​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListPriceInput)

    required

    The list of fixed prices to add or update in the price list.

  ***

* [price​List​Fixed​Prices​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesUpdate)

  mutation

  Updates fixed prices on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). This mutation lets you add new fixed prices for specific [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects and remove existing prices in a single operation.

  Use this mutation to modify variant pricing on a price list by providing prices to add and variant IDs to delete.

  Learn more about [setting fixed prices for product variants](https://shopify.dev/docs/apps/build/markets/build-catalog#step-3-set-fixed-prices-for-specific-product-variants).

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The price list that the prices will be updated against.

  * prices​To​Add

    [\[Price​List​Price​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListPriceInput)

    required

    The fixed prices to add.

  * variant​Ids​To​Delete

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    A list of product variant IDs to remove from the price list.

  ***

***

## PriceListPrice Mutations

### Mutated by

* [price​List​Fixed​Prices​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesAdd)
* [price​List​Fixed​Prices​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesUpdate)
