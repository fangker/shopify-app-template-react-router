---
title: Channel - GraphQL Admin
description: >-
  A connection between a Shopify shop and an external selling platform that

  supports product syndication and optionally order ingestion. Each channel
  binds

  a merchant's account on a specific platform — such as Amazon, eBay, Google, or
  a

  point-of-sale system — to the shop, establishing the publishing destination
  for product feeds.


  Sales Channel applications use
  [`channelCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate)

  to establish channels after merchant authentication, and can manage multiple

  channel connections per app. Each channel is bound to a channel specification

  that declares the platform's regional coverage, capabilities, and
  requirements.


  Use channels to manage where catalog items are syndicated, track publication

  status across platforms, and control

  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  visibility for different selling destinations.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Channel

object

A connection between a Shopify shop and an external selling platform that supports product syndication and optionally order ingestion. Each channel binds a merchant's account on a specific platform — such as Amazon, eBay, Google, or a point-of-sale system — to the shop, establishing the publishing destination for product feeds.

Sales Channel applications use [`channelCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate) to establish channels after merchant authentication, and can manage multiple channel connections per app. Each channel is bound to a channel specification that declares the platform's regional coverage, capabilities, and requirements.

Use channels to manage where catalog items are syndicated, track publication status across platforms, and control [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) visibility for different selling destinations.

## Fields

* account​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The unique account ID for the merchant on the external platform. This value is opaque to Shopify — its format is determined by the channel, such as an Amazon Seller ID or Google Merchant Center ID.

* account​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The merchant-facing name for the external account. Displayed in Shopify Admin wherever the channel connection is referenced, such as in Markets and order attribution.

* active​Regions

  [\[Country​Code!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  non-null

  The regions where the channel is currently active, derived from the channel's active product feeds. Empty when the channel has no active product feeds.

* app

  [App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  non-null

  The underlying app used by the channel.

* collection​Publications​V3

  [Resource​Publication​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationConnection)

  non-null

  The list of collection publications. Each record represents information about the publication of a collection.

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

* collections

  [Collection​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection)

  non-null

  The list of collections published to the channel.

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

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A unique, human-readable identifier for the channel within the shop. Set during [`channelCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate) or auto-generated from the specification handle and account ID. Use with [`channelByHandle`](https://shopify.dev/docs/api/admin-graphql/latest/queries/channelByHandle) for lookups.

* has​Collection

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the collection is available to the channel.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The collection ID to check.

  ***

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* markets

  [Market​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection)

  The markets associated with this channel.

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

* markets​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of markets associated with this channel.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the channel.

* product​Publications​V3

  [Resource​Publication​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationConnection)

  non-null

  The list of product publication records for products published to this channel.

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

* products

  [Product​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection)

  non-null

  The list of products published to the channel.

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

* products​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  Retrieves the total count of [`products`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) published to a specific sales channel. Limited to a maximum of 10000 by default.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    ### Arguments

    The upper bound on count value before returning a result. Use `null` to have no limit.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * barcode

        string

      * bundles

        boolean

      * category\_id

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the product variant [`barcode`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-barcode) field.

      - Example:

        * `barcode:ABC-abc-1234`

        Filter by a [product bundle](https://shopify.dev/docs/apps/build/product-merchandising/bundles). A product bundle is a set of two or more related products, which are commonly offered at a discount.

      - Example:

        * `bundles:true`

        Filter by the product [category ID](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-category) (`product.category.id`). A product category is the category of a product from [Shopify's Standard Product Taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17).

    * * `category_id:sg-4-17-2-17`

    * * collection\_id

        id

      * combined\_listing\_role

        string

      - Filter by the collection [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Collection#field-id) field.

      - Example:

        * `collection_id:108179161409`

        Filter by the role of the product in a [combined listing](https://shopify.dev/apps/build/product-merchandising/combined-listings).

    * \- \`parent\`\<br/> - \`child\`\<br/> - \`no\_role\`

      * `combined_listing_role:parent`

    * * created\_at

        time

      * delivery\_profile\_id

        id

      * error\_feedback

        string

      - Filter by the date and time when the product was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<='2024'`

        Filter by the delivery profile [`id`](https://shopify.dev/api/admin-graphql/latest/objects/DeliveryProfile#field-id) field.

      - Example:

        * `delivery_profile_id:108179161409`

        Filter by products with publishing errors.

    * * gift\_card

        boolean

      * handle

        string

      - Filter by the product [`isGiftCard`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-isgiftcard) field.

      - Example:

        * `gift_card:true`

        Filter by a comma-separated list of product [handles](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-handle).

    * * `handle:the-minimal-snowboard`

    * * has\_only\_composites

        boolean

      * has\_only\_default\_variant

        boolean

      * has\_variant\_with\_components

        boolean

      * id

        id

      * inventory\_total

        integer

      * is\_price\_reduced

        boolean

      * metafields.{namespace}.{key}

        mixed

      - Filter by products that have only composite variants.

      - Example:

        * `has_only_composites:true`

        Filter by products that have only a default variant. A default variant is the only variant if no other variants are specified.

      - Example:

        * `has_only_default_variant:true`

        Filter by products that have variants with associated components.

      - Example:

        * `has_variant_with_components:true`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by inventory count.

      - Example:

        * `inventory_total:0`
        * `inventory_total:>150`
        * `inventory_total:>=200`

        Filter by products that have a reduced price. For more information, refer to the [`CollectionRule`](https://shopify.dev/api/admin-graphql/latest/objects/CollectionRule) object.

      - Example:

        * `is_price_reduced:true`

        Filters resources by metafield value. Format: `metafields.{namespace}.{key}:{value}`. Learn more about [querying by metafield value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

    * * `metafields.custom.on_sale:true`\
        \- `metafields.product.material:"gid://shopify/Metaobject/43458085"`

    * * out\_of\_stock\_somewhere

        boolean

      * price

        bigdecimal

      * product\_configuration\_owner

        string

      * product\_publication\_status

        string

      * product\_type

        string

      * publication\_ids

        string

      * publishable\_status

        string

      * published\_at

        time

      * published\_status

        string

      * sku

        string

      * status

        string

      * tag

        string

      * tag\_not

        string

      * title

        string

      * tracks\_inventory

        boolean

      * updated\_at

        time

      * variant\_id

        id

      * variant\_title

        string

      * vendor

        string

      - Filter by products that are out of stock in at least one location.

      - Example:

        * `out_of_stock_somewhere:true`

        Filter by the product variant [`price`](https://shopify.dev/api/admin-graphql/latest/objects/Productvariant#field-price) field.

      - Example:

        * `price:100.57`

        Filter by the app [`id`](https://shopify.dev/api/admin-graphql/latest/objects/App#field-id) field.

      - Example:

        * `product_configuration_owner:10001`

        Filter by channel approval process status of the resource on a channel, such as the online store. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#field-Channel.fields.app) (`Channel.app.id`) and one of the valid values. For simple visibility checks, use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) instead.

      - Valid values:

        * `* {channel_app_id}-approved`
        * `* {channel_app_id}-rejected`
        * `* {channel_app_id}-needs_action`
        * `* {channel_app_id}-awaiting_review`
        * `* {channel_app_id}-published`
        * `* {channel_app_id}-demoted`
        * `* {channel_app_id}-scheduled`
        * `* {channel_app_id}-provisionally_published`

        Example:

        * `product_publication_status:189769876-approved`

        Filter by a comma-separated list of [product types](https://help.shopify.com/manual/products/details/product-type).

      - Example:

        * `product_type:snowboard`

        Filter by a comma-separated list of publication IDs that are associated with the product.

      - Example:

        * `publication_ids:184111530305,184111694145`

        **Deprecated:** This parameter is deprecated as of 2025-12 and will be removed in a future API version. Use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) for visibility checks. Filter by the publishable status of the resource on a channel. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) and one of the valid status values.

      - Valid values:

        * `* {channel_app_id}-unset`
        * `* {channel_app_id}-pending`
        * `* {channel_app_id}-approved`
        * `* {channel_app_id}-not_approved`

        Example:

        * `publishable_status:580111-unset`
        * `publishable_status:580111-pending`

        Filter by the date and time when the product was published to the online store and other sales channels.

      - Example:

        * `published_at:>2020-10-21T23:39:20Z`
        * `published_at:<now`
        * `published_at:<=2024`

        Filter resources by their visibility and publication state on a channel. Online store channel filtering: - `online_store_channel`: Returns all resources in the online store channel, regardless of publication status. - `published`/`visible`: Returns resources that are published to the online store. - `unpublished`: Returns resources that are not published to the online store. Channel-specific filtering using a channel ID, channel handle, [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`), or app handle with suffixes: - `{id_or_handle}-published`: Returns resources published to the specified channel. - `{id_or_handle}-visible`: Same as `{id_or_handle}-published` (kept for backwards compatibility). - `{id_or_handle}-intended`: Returns resources added to the channel but not yet published. - `{id_or_handle}-hidden`: Returns resources not added to the channel or not published. Other: - `unavailable`: Returns resources not published to any channel.

      - Valid values:

        * `online_store_channel`
        * `published`
        * `visible`
        * `unpublished`
        * `* {channel_id_or_handle}-published`
        * `* {channel_id_or_handle}-visible`
        * `* {channel_id_or_handle}-intended`
        * `* {channel_id_or_handle}-hidden`
        * `* {channel_app_id_or_handle}-published`
        * `* {channel_app_id_or_handle}-visible`
        * `* {channel_app_id_or_handle}-intended`
        * `* {channel_app_id_or_handle}-hidden`
        * `unavailable`

        Example:

        * `published_status:online_store_channel`
        * `published_status:published`
        * `published_status:580111-published`
        * `published_status:580111-hidden`
        * `published_status:my-channel-handle-published`
        * `published_status:unavailable`

        Filter by the product variant [`sku`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

      - Example:

        * `sku:XYZ-12345`

        Filter by a comma-separated list of statuses. You can use statuses to manage inventory. Shopify only displays products with an `ACTIVE` status in online stores, sales channels, and apps.

      - Valid values:

        * `active` Default
        * `archived`
        * `draft`
        * `unlisted`

        Example:

        * `status:active,draft`

        Filter objects by the `tag` field.

      - Example:

        * `tag:my_tag`

        Filter by objects that don’t have the specified tag.

      - Example:

        * `tag_not:my_tag`

        Filter by the product [`title`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-title) field.

      - Example:

        * `title:The Minimal Snowboard`

        Filter by products that have [inventory tracking](https://help.shopify.com/manual/products/inventory/getting-started-with-inventory/set-up-inventory-tracking) enabled.

      - Example:

        * `tracks_inventory:true`

        Filter by the date and time when the product was last updated.

      - Example:

        * `updated_at:>'2020-10-21T23:39:20Z'`
        * `updated_at:<now`
        * `updated_at:<='2024'`

        Filter by the product variant [`id`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-id) field.

      - Example:

        * `variant_id:45779434701121`

        Filter by the product variant [`title`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-title) field.

      - Example:

        * `variant_title:'Special ski wax'`

        Filter by the origin or source of the product. Learn more about [vendors and managing vendor information](https://help.shopify.com/manual/products/managing-vendor-info).

    * * `vendor:Snowdevil`\
        \- `vendor:Snowdevil OR vendor:Icedevil`

  ***

* resource​Feedback

  [App​Feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback)

  The resource feedback for the channel. Returns `null` when no active feedback exists—for example, after `shopResourceFeedbackCreate` is called with `state: ACCEPTED`, which clears the feedback signal. A `null` result is expected and means the channel has no outstanding feedback.

* specification​Handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The handle of the [channel specification](https://shopify.dev/docs/apps/build/sales-channels/channel-config-extension) bound to this channel. The specification declares the channel's regional coverage, capabilities, and requirements, and is deployed by the Sales Channel application via `shopify app deploy`.

* supports​Future​Publishing

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the channel supports future publishing.

### Deprecated fields

* navigation​Items

  [\[Navigation​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/NavigationItem)

  non-nullDeprecated

* overview​Path

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  Deprecated

* product​Publications

  [Product​Publication​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductPublicationConnection)

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

***

## Map

### Fields and connections with this object

* [App.channels](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.channels)
* [AppCatalog.channels](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.channels)
* [AppFeedback.channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback#field-AppFeedback.fields.channel)
* [ChannelConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection#returns-nodes)
* [ChannelEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelEdge#field-ChannelEdge.fields.node)
* [ChannelsCondition.channels](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelsCondition#field-ChannelsCondition.fields.channels)
* [ProductPublication.channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPublication#field-ProductPublication.fields.channel)
* [ProductResourceFeedback.channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductResourceFeedback#field-ProductResourceFeedback.fields.channel)
* [Publication.channels](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.channels)

***

## Queries

* [channel](https://shopify.dev/docs/api/admin-graphql/latest/queries/channel)

  query

  Returns a [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) by ID. The channel must belong to the calling application.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) to return.

  ***

* [channel​By​Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/channelByHandle)

  query

  Returns a [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) by its unique string handle. The handle is either set explicitly during [`channelCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate) or auto-generated from the specification handle and account ID. The channel must belong to the calling application.

  * handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The unique handle of the [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) to return.

  ***

* [channels](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels)

  query

  The list of [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) objects on the shop. When the calling application supports multi-channel, only channels established by the calling application are returned. Each channel represents an authenticated connection to an external selling platform such as a marketplace, social media platform, online store, or point-of-sale system.

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

***

## Channel Queries

### Queried by

* [channel](https://shopify.dev/docs/api/admin-graphql/latest/queries/channel)
* [channel​By​Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/channelByHandle)
* [channels](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels)

***

## Mutations

* [channel​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate)

  mutation

  Creates a [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) representing a connection between the shop and an external selling platform account. Use this mutation after a merchant authenticates with an external platform to establish the publishing destination for product syndication and, for order-generating channels, order import.

  The platform resolves the [channel specification](https://shopify.dev/docs/apps/build/sales-channels/channel-config-extension) identified by `specificationHandle`, determines its country coverage, intersects with the shop's available region markets, and establishes product feeds for all matching regions. Product feeds immediately begin emitting events to the application's webhook or event subscription.

  If the specification sets `expects_online_store_parity` and no matching region markets exist, the mutation returns an error. If the specification doesn't require online store parity and no matching region markets exist, a channel subordinate to shop defaults is created automatically.

  * input

    [Channel​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChannelCreateInput)

    required

    ### Arguments

    The input fields for creating the channel.

  ***

* [channel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelUpdate)

  mutation

  Updates the properties of an existing [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Use this mutation to update account information — such as the display name shown in Shopify Admin — or to bind the channel to a different channel specification.

  Updating the `specificationHandle` triggers re-evaluation of the specification's country coverage against the shop's region markets, reconciling product feeds accordingly. This is also the mechanism for migrating legacy channel records to the multi-channel model by assigning a specification handle.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) to update.

  * input

    [Channel​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChannelUpdateInput)

    required

    The input fields for updating the channel.

  ***

***

## Channel Mutations

### Mutated by

* [channel​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate)
* [channel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelUpdate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## Channel Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
