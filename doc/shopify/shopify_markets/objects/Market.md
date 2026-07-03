---
title: Market - GraphQL Admin
description: >-
  A merchant-defined group of buyers identified by conditions such as their

  region, retail location, or company location. Each market allows configuration

  of a distinct, localized buyer experience. Customizations include, but are

  not limited to,

  [currency](/docs/api/admin-graphql/2026-07/mutations/marketCurrencySettingsUpdate),

  [pricing and product
  availability](https://shopify.dev/apps/internationalization/product-price-lists),

  [web presence](/docs/api/admin-graphql/2026-07/objects/MarketWebPresence),

  and content translations.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Market'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Market.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Market

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A merchant-defined group of buyers identified by conditions such as their region, retail location, or company location. Each market allows configuration of a distinct, localized buyer experience. Customizations include, but are not limited to, [currency](https://shopify.dev/docs/api/admin-graphql/2026-07/mutations/marketCurrencySettingsUpdate), [pricing and product availability](https://shopify.dev/apps/internationalization/product-price-lists), [web presence](https://shopify.dev/docs/api/admin-graphql/2026-07/objects/MarketWebPresence), and content translations.

## Fields

* assigned​Customization

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the market has a customization with the given ID.

  * customization​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customization that the market has been assigned to.

  ***

* catalogs

  [Market​Catalog​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketCatalogConnection)

  non-null

  The catalogs that belong to the market.

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

  ***

* catalogs​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of catalogs that belong to the market.

* conditions

  [Market​Conditions](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketConditions)

  The conditions under which a visitor is in the market.

* currency​Settings

  [Market​Currency​Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettings)

  The market’s currency settings.

* delivery

  [Market​Delivery​Configurations!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketDeliveryConfigurations)

  non-null

  The delivery settings for this market.

* discounts

  [Discount​Node​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountNodeConnection)

  The discounts that are available in this market.

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

  ***

* discounts​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of discounts that are assigned to this market.

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A short, human-readable unique identifier for the market. This is changeable by the merchant.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* metafield

  [Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

  A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

  * key

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The key for the metafield.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

  ***

* metafields

  [Metafield​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

  non-null

  A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

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

  * keys

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    List of keys of metafields in the format `namespace.key`, will be returned in the same format.

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The metafield namespace to filter by. If omitted, all metafields are returned.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the market. Not shown to customers.

* price​Inclusions

  [Market​Price​Inclusions](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketPriceInclusions)

  The inclusive pricing strategy for a market. This determines if prices include duties and / or taxes.

* status

  [Market​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketStatus)

  non-null

  Status of the market. Replaces the enabled field.

* type

  [Market​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketType)

  non-null

  The type of the market.

* web​Presences

  [Market​Web​Presence​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketWebPresenceConnection)

  non-null

  The market’s web presences, which defines its SEO strategy. This can be a different domain, subdomain, or subfolders of the primary domain. Each web presence comprises one or more language variants. If a market doesn't have any web presences, then the market is accessible on the primary market's domains using [country selectors](https://shopify.dev/themes/internationalization/multiple-currencies-languages#the-country-selector).

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

  ***

### Deprecated fields

* enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

* metafield​Definitions

  [Metafield​Definition​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

  non-nullDeprecated

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

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Filter metafield definitions by namespace.

  * pinned​Status

    [Metafield​Definition​Pinned​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionPinnedStatus)

    Default:ANY

    Filter by the definition's pinned status.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      * id

        id

      * key

        string

      * namespace

        string

      * owner\_type

        string

      * type

        string

      * updated\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the date and time when the metafield definition was created.

      - Example:

        * `created_at:>2020-10-21T23:39:20Z`
        * `created_at:<now`
        * `created_at:<=2024`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the metafield definition [`key`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-key) field.

      - Example:

        * `key:some-key`

        Filter by the metafield definition [`namespace`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-namespace) field.

      - Example:

        * `namespace:some-namespace`

        Filter by the metafield definition [`ownerType`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-ownertype) field.

      - Example:

        * `owner_type:PRODUCT`

        Filter by the metafield definition [`type`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-type) field.

      - Example:

        * `type:single_line_text_field`

        Filter by the date and time when the metafield definition was last updated.

        Example:

        * `updated_at:>2020-10-21T23:39:20Z`
        * `updated_at:<now`
        * `updated_at:<=2024`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Metafield​Definition​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* price​List

  [Price​List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

  Deprecated

* primary

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

* regions

  [Market​Region​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketRegionConnection)

  non-nullDeprecated

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

  ***

* web​Presence

  [Market​Web​Presence](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence)

  Deprecated

***

## Map

### Fields and connections with this object

* [Channel.markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.markets)
* [DiscountMarkets.markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountMarkets#field-DiscountMarkets.fields.markets)
* [MarketCatalog.markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog#field-MarketCatalog.fields.markets)
* [MarketConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection#returns-nodes)
* [MarketEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketEdge#field-MarketEdge.fields.node)
* [MarketLocalization.market](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalization#field-MarketLocalization.fields.market)
* [MarketWebPresence.markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence#field-MarketWebPresence.fields.markets)
* [Translation.market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation#field-Translation.fields.market)

### Possible type in

* [Metafield​Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

***

## Queries

* [market](https://shopify.dev/docs/api/admin-graphql/latest/queries/market)

  query

  Returns a `Market` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Market` to return.

  ***

* [markets](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets)

  query

  Returns a paginated list of [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) objects configured for the shop. Markets match buyers based on defined conditions to deliver customized shopping experiences.

  Filter markets by [`MarketType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketType) and [`MarketStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketStatus), search by name, and control sort order. Retrieve market configurations including [`MarketCurrencySettings`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettings), [`MarketWebPresence`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence) objects, and [`MarketConditions`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketConditions).

  Learn more about [Shopify Markets](https://shopify.dev/docs/apps/build/markets).

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

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      * market\_condition\_types

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        A comma-separated list of condition types.

    * market\_type

      string

    * name

      string

    * * status

        string

      * wildcard\_company\_location\_with\_country\_code

        string

      -
      - Valid values:
        * `ACTIVE`
        * `DRAFT`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Markets​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketsSortKeys)

    Default:NAME

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * type

    [Market​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketType)

    Default:null

    Filters markets by type.

  ***

### Deprecated queries

* [market​By​Geography](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketByGeography)

  query

  Deprecated

  * country​Code

    [Country​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

    required

    ### Arguments

    The code for the country where the customer is.

  ***

* [primary​Market](https://shopify.dev/docs/api/admin-graphql/latest/queries/primaryMarket)

  query

  Deprecated

***

## Market Queries

### Queried by

* [market](https://shopify.dev/docs/api/admin-graphql/latest/queries/market)
* [markets](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets)

***

## Mutations

* [market​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketCreate)

  mutation

  Creates a [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) to deliver customized shopping experiences. Markets define various aspects of the buyer experience including pricing, product availability, custom content, inventory and fulfillment priorities, and payment methods.

  Define conditions to match buyers by region, company location, retail location, or other criteria. Configure [`MarketCurrencySettings`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettings) to control currency behavior. Set [`MarketPriceInclusions`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketPriceInclusions) to determine tax and duty display. Assign [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects and [`MarketWebPresence`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence) configurations to control product availability and SEO strategy.

  Learn more about [Shopify Markets](https://shopify.dev/docs/apps/build/markets).

  * input

    [Market​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCreateInput)

    required

    ### Arguments

    The properties of the new market.

  ***

* [market​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketUpdate)

  mutation

  Updates the properties of a market.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market to update.

  * input

    [Market​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketUpdateInput)

    required

    The properties to update.

  ***

### Deprecated mutations

* [market​Currency​Settings​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketCurrencySettingsUpdate)

  mutation

  Deprecated

  * input

    [Market​Currency​Settings​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCurrencySettingsUpdateInput)

    required

    ### Arguments

    Properties to update for the market currency settings.

  * market​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the market definition to target.

  ***

* [market​Region​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketRegionDelete)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market region to delete.

  ***

* [market​Regions​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketRegionsCreate)

  mutation

  Deprecated

  * market​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market to add the regions to.

  * regions

    [\[Market​Region​Create​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketRegionCreateInput)

    required

    The regions to be created.

  ***

* [market​Web​Presence​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceCreate)

  mutation

  Deprecated

  * market​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market for which to create a web presence.

  * web​Presence

    [Market​Web​Presence​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketWebPresenceCreateInput)

    required

    The details of the web presence to be created.

  ***

* [market​Web​Presence​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceDelete)

  mutation

  Deprecated

  * web​Presence​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web presence to delete.

  ***

* [market​Web​Presence​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceUpdate)

  mutation

  Deprecated

  * web​Presence

    [Market​Web​Presence​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketWebPresenceUpdateInput)

    required

    ### Arguments

    The web\_presence fields used to update the market's web presence.

  * web​Presence​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the web presence to update.

  ***

***

## Market Mutations

### Mutated by

* [market​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketCreate)
* [market​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketUpdate)

***

## Interfaces

* * [Has​Metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

    interface

  * [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## Market Implements

### Implements

* [Has​Metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
* [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
