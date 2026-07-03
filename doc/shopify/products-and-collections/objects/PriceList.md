---
title: PriceList - GraphQL Admin
description: >-
  A list that defines pricing for [product
  variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

  Price lists override default product prices with either fixed prices or

  percentage-based adjustments.


  Each price list associates with a
  [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)

  to determine which customers see the pricing. The catalog's context rules

  control when the price list applies, such as for specific markets, company

  locations, or apps.


  Learn how to [support different pricing
  models](https://shopify.dev/docs/apps/build/markets/build-catalog).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Price​List

object

Requires `read_products` access scope. Also: The user must have a permission to view catalogs.

A list that defines pricing for [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). Price lists override default product prices with either fixed prices or percentage-based adjustments.

Each price list associates with a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) to determine which customers see the pricing. The catalog's context rules control when the price list applies, such as for specific markets, company locations, or apps.

Learn how to [support different pricing models](https://shopify.dev/docs/apps/build/markets/build-catalog).

## Fields

* catalog

  [Catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)

  The catalog that the price list is associated with.

* currency

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  The currency for fixed prices associated with this price list.

* fixed​Prices​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of fixed prices on the price list.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The unique name of the price list, used as a human-readable identifier.

* parent

  [Price​List​Parent](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListParent)

  Relative adjustments to other prices.

* prices

  [Price​List​Price​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListPriceConnection)

  non-null

  A list of prices associated with the price list.

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

  * origin​Type

    [Price​List​Price​Origin​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListPriceOriginType)

    The origin of this price, either fixed (defined on the price list) or relative (calculated using an adjustment via a price list parent configuration).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * id

        id

      * product\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * variant\_id

      id

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* quantity​Rules

  [Quantity​Rule​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/QuantityRuleConnection)

  non-null

  A list of quantity rules associated with the price list, ordered by product variants.

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

  * origin​Type

    [Quantity​Rule​Origin​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/QuantityRuleOriginType)

    Whether the quantity rule is fixed (defined on the price list) or relative (the default quantity rule for the shop).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

## Map

### Fields and connections with this object

* [AppCatalog.priceList](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.priceList)
* [Catalog.priceList](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog#fields-priceList)
* [CompanyLocationCatalog.priceList](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationCatalog#field-CompanyLocationCatalog.fields.priceList)
* [MarketCatalog.priceList](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog#field-MarketCatalog.fields.priceList)
* [PriceListConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListConnection#returns-nodes)
* [PriceListEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListEdge#field-PriceListEdge.fields.node)
* [QuantityPriceBreak.priceList](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPriceBreak#field-QuantityPriceBreak.fields.priceList)

***

## Queries

* [price​List](https://shopify.dev/docs/api/admin-graphql/latest/queries/priceList)

  query

  Returns a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) by ID. You can use price lists to specify either fixed prices or adjusted relative prices that override initial [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) prices.

  Price lists enable contextual pricing for the [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) they are associated to. Each price list can define fixed prices for specific [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects or percentage-based adjustments relative to other prices.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `PriceList` to return.

  ***

* [price​Lists](https://shopify.dev/docs/api/admin-graphql/latest/queries/priceLists)

  query

  All price lists for a shop.

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

    [Price​List​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## PriceList Queries

### Queried by

* [price​List](https://shopify.dev/docs/api/admin-graphql/latest/queries/priceList)
* [price​Lists](https://shopify.dev/docs/api/admin-graphql/latest/queries/priceLists)

***

## Mutations

* [price​List​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListCreate)

  mutation

  Creates a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Price lists enable contextual pricing by defining fixed prices or percentage-based adjustments.

  The price list requires a unique name, currency for fixed prices, and parent adjustment settings that determine how the system calculates prices relative to base prices. To apply contextual pricing, link the price list to a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog). When that catalog's context is matched, customers receive the price list's prices.

  Learn more about [building catalogs with price lists](https://shopify.dev/docs/apps/build/markets/build-catalog#step-2-associate-a-price-list-with-the-catalog).

  * input

    [Price​List​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListCreateInput)

    required

    ### Arguments

    The properties of the new price list.

  ***

* [price​List​Fixed​Prices​By​Product​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesByProductUpdate)

  mutation

  Sets or removes fixed prices for all variants of a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Simplifies pricing management when all variants of a product should have the same price on a price list, rather than setting individual variant prices.

  When you add a fixed price for a product, all its [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects receive the same price on the price list. When you remove a product's fixed prices, all variant prices revert to the price list's adjustment rules.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The price list to update the prices for.

  * prices​To​Add

    [\[Price​List​Product​Price​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListProductPriceInput)

    A list of `PriceListProductPriceInput` that identifies which products to update the fixed prices for.

  * prices​To​Delete​By​Product​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    A list of product IDs that identifies which products to remove the fixed prices for.

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

* [price​List​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListUpdate)

  mutation

  Updates a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)'s configuration, including its name, currency, [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) association, and pricing adjustments.

  Changing the currency removes all fixed prices from the price list. The affected [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects revert to prices calculated from the price list's adjustment settings.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list to update.

  * input

    [Price​List​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListUpdateInput)

    required

    The input data used to update the price list.

  ***

***

## PriceList Mutations

### Mutated by

* [price​List​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListCreate)
* [price​List​Fixed​Prices​By​Product​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesByProductUpdate)
* [price​List​Fixed​Prices​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesUpdate)
* [price​List​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListUpdate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## PriceList Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
