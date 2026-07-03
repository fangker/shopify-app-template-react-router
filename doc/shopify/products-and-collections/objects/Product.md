---
title: Product - GraphQL Admin
description: >-
  The `Product` object lets you manage products in a merchant’s store.


  Products are the goods and services that merchants offer to customers. They
  can

  include various details such as title, description, price, images, and options

  such as size or color.

  You can use [product
  variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant)

  to create or update different versions of the same product.

  You can also add or update product
  [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media).

  Products can be organized by grouping them into a
  [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).


  Learn more about working with [Shopify's product
  model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components),

  including limitations and considerations.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Product'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Product.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product

object

Requires `read_products` access scope.

The `Product` object lets you manage products in a merchant’s store.

Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

## Fields

* available​Publications​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that a resource is published to, without [feedback errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback).

* bundle​Components

  [Product​Bundle​Component​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductBundleComponentConnection)

  non-null

  A list of [components](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-product-fixed-bundle) that are associated with a product in a bundle.

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

* bundle​Consolidated​Options

  [\[Componentized​Products​Bundle​Consolidated​Option!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ComponentizedProductsBundleConsolidatedOption)

  A list of consolidated options for a product in a bundle.

* category

  [Taxonomy​Category](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategory)

  The category of a product from [Shopify's Standard Product Taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17).

* collections

  [Collection​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection)

  non-null

  A list of [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) that include the product.

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

      * collection\_type

        string

      * handle

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

      - Valid values:
        * `custom`
        * `smart`

    * * id

        id

      * product\_id

        id

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by collections containing a product by its ID.

    * * product\_publication\_status

        string

      * publishable\_status

        string

      * published\_at

        time

      - Filter by channel approval process status of the resource on a channel, such as the online store. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#field-Channel.fields.app) (`Channel.app.id`) and one of the valid values. For simple visibility checks, use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) instead.

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

        **Deprecated:** This parameter is deprecated as of 2025-12 and will be removed in a future API version. Use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) for visibility checks. Filter by the publishable status of the resource on a channel. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) and one of the valid status values.

      - Valid values:

        * `* {channel_app_id}-unset`
        * `* {channel_app_id}-pending`
        * `* {channel_app_id}-approved`
        * `* {channel_app_id}-not_approved`

        Example:

        * `publishable_status:580111-unset`
        * `publishable_status:580111-pending`

        Filter by the date and time when the collection was published to the Online Store.

    * * published\_status

        string

      * title

        string

      - Filter resources by their visibility and publication state on a channel. Online store channel filtering: - `online_store_channel`: Returns all resources in the online store channel, regardless of publication status. - `published`/`visible`: Returns resources that are published to the online store. - `unpublished`: Returns resources that are not published to the online store. Channel-specific filtering using a channel ID, channel handle, [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`), or app handle with suffixes: - `{id_or_handle}-published`: Returns resources published to the specified channel. - `{id_or_handle}-visible`: Same as `{id_or_handle}-published` (kept for backwards compatibility). - `{id_or_handle}-intended`: Returns resources added to the channel but not yet published. - `{id_or_handle}-hidden`: Returns resources not added to the channel or not published. Other: - `unavailable`: Returns resources not published to any channel.

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

    * updated\_at

      time

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Collection​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* combined​Listing

  [Combined​Listing](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListing)

  A special product type that combines separate products from a store into a single product listing. [Combined listings](https://shopify.dev/apps/build/product-merchandising/combined-listings) are connected by a shared option, such as color, model, or dimension.

* combined​Listing​Role

  [Combined​Listings​Role](https://shopify.dev/docs/api/admin-graphql/latest/enums/CombinedListingsRole)

  The [role of the product](https://shopify.dev/docs/apps/build/product-merchandising/combined-listings/build-for-combined-listings) in a combined listing.

  If `null`, then the product isn't part of any combined listing.

* compare​At​Price​Range

  [Product​Compare​At​Price​Range](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductCompareAtPriceRange)

  The [compare-at price range](https://help.shopify.com/manual/products/details/product-pricing/sale-pricing) of the product in the shop's default currency.

* contextual​Pricing

  [Product​Contextual​Pricing!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductContextualPricing)

  non-null

  The pricing that applies to a customer in a specific context. For example, a price might vary depending on the customer's location. Only active markets are considered in the price resolution.

  * context

    [Contextual​Pricing​Context!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ContextualPricingContext)

    required

    ### Arguments

    The context used to generate contextual pricing for the variant.

  ***

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the product was created.

* default​Cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

* description

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A single-line description of the product, with [HTML tags](https://developer.mozilla.org/en-US/docs/Web/HTML) removed.

  * truncate​At

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    Truncates a string after the given length.

  ***

* description​Html

  [HTML!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

  non-null

  The description of the product, with HTML tags. For example, the description might include bold `<strong></strong>` and italic `<i></i>` text.

* events

  [Event​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

  non-null

  The paginated list of events associated with the host subject.

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

    * * action

        string

      * comments

        boolean

      * created\_at

        time

      * id

        id

      * subject\_type

        string

      - The action that occured.

      - Example:

        * `action:create`

        Whether or not to include [comment-events](https://shopify.dev/api/admin-graphql/latest/objects/CommentEvent) in your search, passing `false` will exclude comment-events, any other value will include comment-events.

      - Example:

        * `false`
        * `true`

        Filter by the date and time when the event occurred. Event data is retained for 1 year.

      - Example:

        * `created_at:>2025-10-21`
        * `created_at:<now`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        The resource type affected by this event. See [EventSubjectType](https://shopify.dev/api/admin-graphql/latest/enums/EventSubjectType) for possible values.

        Example:

        * `PRODUCT_VARIANT`
        * `PRODUCT`
        * `COLLECTION`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* featured​Media

  [Media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media)

  The featured [media](https://shopify.dev/docs/apps/build/online-store/product-media) associated with the product.

* feedback

  [Resource​Feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback)

  The information that lets merchants know what steps they need to take to make sure that the app is set up correctly.

  For example, if a merchant hasn't set up a product correctly in the app, then the feedback might include a message that says "You need to add a price to this product".

* gift​Card​Settings

  [Gift​Card​Product​Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardProductSettings)

  The gift card settings for this product. Only available on gift card products.

* gift​Card​Template​Suffix

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The [theme template](https://shopify.dev/docs/storefronts/themes/architecture/templates) that's used when customers view the gift card in a store.

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A unique, human-readable string of the product's title. A handle can contain letters, hyphens (`-`), and numbers, but no spaces. The handle is used in the online store URL for the product.

* has​Only​Default​Variant

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the product has only a single variant with the default option and value.

* has​Out​Of​Stock​Variants

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the product has variants that are out of stock.

* has​Variants​That​Requires​Components

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether at least one of the product variants requires [bundle components](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-product-fixed-bundle).

  Learn more about [store eligibility for bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles#store-eligibility).

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* in​Collection

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the product is in a specified [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the collection to check. For example, `id: "gid://shopify/Collection/123"`.

  ***

* is​Gift​Card

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the product is a gift card.

* legacy​Resource​Id

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The ID of the corresponding resource in the REST Admin API.

* media

  [Media​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MediaConnection)

  non-null

  The [media](https://shopify.dev/docs/apps/build/online-store/product-media) associated with the product. Valid media are images, 3D models, videos.

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

    * * id

        id

      * media\_type

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`
        Valid values:
        * `IMAGE`
        * `VIDEO`
        * `MODEL_3D`
        * `EXTERNAL_VIDEO`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Product​Media​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductMediaSortKeys)

    Default:POSITION

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* media​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The total count of [media](https://shopify.dev/docs/apps/build/online-store/product-media) that's associated with a product.

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

* online​Store​Preview​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The [preview URL](https://help.shopify.com/manual/online-store/setting-up#preview-your-store) for the online store.

* online​Store​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The product's URL on the online store. If `null`, then the product isn't published to the online store sales channel.

* options

  [\[Product​Option!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption)

  non-null

  A list of product options. The limit is defined by the [shop's resource limits for product options](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-resourcelimits) (`Shop.resourceLimits.maxProductOptions`).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    Truncate the array result to this size.

  ***

* price​Range​V2

  [Product​Price​Range​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPriceRangeV2)

  non-null

  The minimum and maximum prices of a product, expressed in decimal numbers. For example, if the product is priced between $10.00 and $50.00, then the price range is $10.00 - $50.00.

* product​Components

  [Product​Component​Type​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductComponentTypeConnection)

  non-null

  A list of products that contain at least one variant associated with at least one of the current products' variants via group relationship.

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

* product​Components​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  A count of unique products that contain at least one variant associated with at least one of the current products' variants via group relationship.

* product​Parents

  [Product​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection)

  non-null

  A list of products that has a variant that contains any of this product's variants as a component.

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

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* product​Type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The [product type](https://help.shopify.com/manual/products/details/product-type) that merchants define.

* published​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the product was published to the online store.

* published​In​Context

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the product is published for a customer only in a specified context. For example, a product might be published for a customer only in a specific location.

  * context

    [Contextual​Publication​Context!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ContextualPublicationContext)

    required

    ### Arguments

    The context used to determine publication status.

  ***

* published​On​Publication

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the resource is published to a specified [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

  * publication​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the publication to check. For example, `id: "gid://shopify/Publication/123"`.

  ***

* requires​Selling​Plan

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the product can only be purchased with a [selling plan](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans). Products that are sold on subscription (`requiresSellingPlan: true`) can be updated only for online stores. If you update a product to be subscription-only (`requiresSellingPlan:false`), then the product is unpublished from all channels, except the online store.

* resource​Publications

  [Resource​Publication​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationConnection)

  non-null

  The list of resources that are published to a [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

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

  * only​Published

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether to return only the resources that are currently published. If false, then also returns the resources that are scheduled to be published.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* resource​Publications​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The total number of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that a resource is published to, including publications with [feedback errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback). To get a count that excludes publications with feedback errors, use `availablePublicationsCount`.

  * only​Published

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    ### Arguments

    Include only the resource's publications that are published. If false, then return all the resource's publications including future publications.

  ***

* resource​Publications​V2

  [Resource​Publication​V2Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationV2Connection)

  non-null

  The list of resources that are either published or staged to be published to a [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication). By default, only publications to `APP` catalog types are returned. For `Product` and `ProductVariant`, use the `catalogType` argument to retrieve publications for other catalog types, such as `COMPANY_LOCATION` (B2B) or `MARKET`. `Collection` only supports publications to `APP` catalog types.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * catalog​Type

    [Catalog​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogType)

    Filter publications by catalog type. When not specified, defaults to APP. Has no effect on Collection, which only supports APP.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * only​Published

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether to return only the resources that are currently published. If false, then also returns the resources that are scheduled or staged to be published.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* restricted​For​Resource

  [Restricted​For​Resource](https://shopify.dev/docs/api/admin-graphql/latest/objects/RestrictedForResource)

  Whether the merchant can make changes to the product when they [edit the order](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders) associated with the product. For example, a merchant might be restricted from changing product details when they edit an order.

  * calculated​Order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The resource Id of the order with edits applied but not saved.

  ***

* selling​Plan​Groups

  [Selling​Plan​Group​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanGroupConnection)

  non-null

  A list of all [selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan) that are associated with the product either directly, or through the product's variants.

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

* selling​Plan​Groups​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  A count of [selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan) that are associated with the product.

* seo

  [SEO!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SEO)

  non-null

  The [SEO title and description](https://help.shopify.com/manual/promoting-marketing/seo/adding-keywords) that are associated with a product.

* status

  [Product​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus)

  non-null

  The [product status](https://help.shopify.com/manual/products/details/product-details-page#product-status), which controls visibility across all sales channels.

* tags

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A comma-separated list of searchable keywords that are associated with the product. For example, a merchant might apply the `sports` and `summer` tags to products that are associated with sportwear for summer.

  Updating `tags` overwrites any existing tags that were previously added to the product. To add new tags without overwriting existing tags, use the [`tagsAdd`](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd) mutation.

* template​Suffix

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The [theme template](https://shopify.dev/docs/storefronts/themes/architecture/templates) that's used when customers view the product in a store.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name for the product that displays to customers. The title is used to construct the product's handle. For example, if a product is titled "Black Sunglasses", then the handle is `black-sunglasses`.

* total​Inventory

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of inventory that's in stock.

* tracks​Inventory

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether [inventory tracking](https://help.shopify.com/manual/products/inventory/getting-started-with-inventory/set-up-inventory-tracking) has been enabled for the product.

* translations

  [\[Translation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

  non-null

  The published translations associated with the resource.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Filters translations locale.

  * market​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Filters translations by market ID. Use this argument to retrieve content specific to a market.

  ***

* unpublished​Publications

  [Publication​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/PublicationConnection)

  non-null

  The list of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that the resource isn't published to.

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

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the product was last modified. A product's `updatedAt` value can change for different reasons. For example, if an order is placed for a product that has inventory tracking set up, then the inventory adjustment is counted as an update.

* variants

  [Product​Variant​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection)

  non-null

  A list of [variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) associated with the product. If querying a single product at the root, you can fetch up to 2048 variants.

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

    [Product​Variant​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantSortKeys)

    Default:POSITION

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* variants​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of [variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) that are associated with the product.

* vendor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the product's vendor.

### Deprecated fields

* body​Html

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

* custom​Product​Type

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

* description​Plain​Summary

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-nullDeprecated

* featured​Image

  [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  Deprecated

* images

  [Image​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ImageConnection)

  non-nullDeprecated

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * crop

    [Crop​Region](https://shopify.dev/docs/api/admin-graphql/latest/enums/CropRegion)

    Deprecated

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * max​Height

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Deprecated

  * max​Width

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Deprecated

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * scale

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    DeprecatedDefault:1

  * sort​Key

    [Product​Image​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductImageSortKeys)

    Default:POSITION

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

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

* price​Range

  [Product​Price​Range!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPriceRange)

  non-nullDeprecated

* product​Category

  [Product​Category](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductCategory)

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

* publication​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-nullDeprecated

  * only​Published

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    ### Arguments

    Include only the resource's publications that are published. If false, then return all the resource's publications including future publications.

  ***

* publications

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

  * only​Published

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Return only the publications that are published. If false, then return all publications.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* published​On​Channel

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

  * channel​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the channel to check.

  ***

* published​On​Current​Channel

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

* published​On​Current​Publication

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

* resource​Publication​On​Current​Publication

  [Resource​Publication​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublicationV2)

  Deprecated

* selling​Plan​Group​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-nullDeprecated

* standardized​Product​Type

  [Standardized​Product​Type](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardizedProductType)

  Deprecated

* storefront​Id

  [Storefront​ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/StorefrontID)

  non-nullDeprecated

* total​Variants

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-nullDeprecated

* unpublished​Channels

  [Channel​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection)

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

* [AbandonedCheckoutLineItem.product](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.product)
* [CalculatedDraftOrderLineItem.product](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.product)
* [Channel.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.products)
* [Collection.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.products)
* [CollectionConditionsSource.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionsSource#field-CollectionConditionsSource.fields.products)
* [CollectionExclusionProductSelection.product](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionExclusionProductSelection#field-CollectionExclusionProductSelection.fields.product)
* [CollectionInclusionProductSelection.product](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionInclusionProductSelection#field-CollectionInclusionProductSelection.fields.product)
* [CombinedListing.parentProduct](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListing#field-CombinedListing.fields.parentProduct)
* [CombinedListingChild.product](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingChild#field-CombinedListingChild.fields.product)
* [CustomerVisitProductInfo.product](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisitProductInfo#field-CustomerVisitProductInfo.fields.product)
* [DeliveryProfileItem.product](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileItem#field-DeliveryProfileItem.fields.product)
* [DiscountProducts.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts#field-DiscountProducts.fields.products)
* [DraftOrderLineItem.product](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.product)
* [LineItem.product](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-LineItem.fields.product)
* [PriceRuleItemEntitlements.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements#field-PriceRuleItemEntitlements.fields.products)
* [PriceRuleLineItemPrerequisites.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites#field-PriceRuleLineItemPrerequisites.fields.products)
* [Product.productParents](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.productParents)
* [ProductBundleComponent.componentProduct](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponent#field-ProductBundleComponent.fields.componentProduct)
* [ProductBundleOperation.product](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleOperation#field-ProductBundleOperation.fields.product)
* [ProductComponentType.product](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentType#field-ProductComponentType.fields.product)
* [ProductConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection#returns-nodes)
* [ProductDeleteOperation.product](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDeleteOperation#field-ProductDeleteOperation.fields.product)
* [ProductDuplicateOperation.newProduct](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDuplicateOperation#field-ProductDuplicateOperation.fields.newProduct)
* [ProductDuplicateOperation.product](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDuplicateOperation#field-ProductDuplicateOperation.fields.product)
* [ProductEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductEdge#field-ProductEdge.fields.node)
* [ProductOperation.product](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ProductOperation#fields-product)
* [ProductPublication.product](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPublication#field-ProductPublication.fields.product)
* [ProductSetOperation.product](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation#field-ProductSetOperation.fields.product)
* [ProductVariant.product](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.product)
* [ProductVariant.productParents](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.productParents)

### Possible type in

* [Comment​Event​Embed](https://shopify.dev/docs/api/admin-graphql/latest/unions/CommentEventEmbed)
* [Metafield​Reference](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)
* [Metafield​Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

***

## Queries

* [product](https://shopify.dev/docs/api/admin-graphql/latest/queries/product)

  query

  Retrieves a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) by its ID. A product is an item that a merchant can sell in their store.

  Use the `product` query when you need to:

  * Access essential product data (for example, title, description, price, images, SEO metadata, and metafields).
  * Build product detail pages and manage inventory.
  * Handle international sales with localized pricing and content.
  * Manage product variants and product options.

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Product` to return.

  ***

* [product​By​Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/productByIdentifier)

  query

  Return a product by an identifier.

  * identifier

    [Product​Identifier​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductIdentifierInput)

    required

    ### Arguments

    The identifier of the product.

  ***

* [products](https://shopify.dev/docs/api/admin-graphql/latest/queries/products)

  query

  Retrieves a list of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in a store. Products are the items that merchants can sell in their store.

  Use the `products` query when you need to:

  * Build a browsing interface for a product catalog.
  * Create product [searching](https://shopify.dev/docs/api/usage/search-syntax), [sorting](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-sortKey), and [filtering](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-query) experiences.
  * Implement product recommendations.
  * Sync product data with external systems.

  The `products` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) to handle large product catalogs and [saved searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-savedSearchId) for frequently used product queries.

  The `products` query returns products with their associated metadata, including:

  * Basic product information (for example, title, description, vendor, and type)
  * Product options and product variants, with their prices and inventory
  * Media attachments (for example, images and videos)
  * SEO metadata
  * Product categories and tags
  * Product availability and publishing statuses

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

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

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  * sort​Key

    [Product​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* [product​By​Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/productByHandle)

  query

  Deprecated

  * handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    A unique string that identifies the product. Handles are automatically generated based on the product's title, and are always lowercase. Whitespace and special characters are replaced with a hyphen: `-`. If there are multiple consecutive whitespace or special characters, then they're replaced with a single hyphen. Whitespace or special characters at the beginning are removed. If a duplicate product title is used, then the handle is auto-incremented by one. For example, if you had two products called `Potion`, then their handles would be `potion` and `potion-1`. After a product has been created, changing the product title doesn't update the handle.

  ***

***

## Product Queries

### Queried by

* [product](https://shopify.dev/docs/api/admin-graphql/latest/queries/product)
* [product​By​Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/productByIdentifier)
* [products](https://shopify.dev/docs/api/admin-graphql/latest/queries/products)

***

## Mutations

* [combined​Listing​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedListingUpdate)

  mutation

  Add, remove and update `CombinedListing`s of a given Product.

  `CombinedListing`s are comprised of multiple products to create a single listing. There are two kinds of products used in a `CombinedListing`:

  1. Parent products
  2. Child products

  The parent product is created with a `productCreate` with a `CombinedListingRole` of `PARENT`. Once created, you can associate child products with the parent product using this mutation. Parent products represent the idea of a product (e.g. Shoe).

  Child products represent a particular option value (or combination of option values) of a parent product. For instance, with your Shoe parent product, you may have several child products representing specific colors of the shoe (e.g. Shoe - Blue). You could also have child products representing more than a single option (e.g. Shoe - Blue/Canvas, Shoe - Blue/Leather, etc...).

  The combined listing is the association of parent product to one or more child products.

  Learn more about [Combined Listings](https://shopify.dev/apps/selling-strategies/combined-listings).

  * options​And​Values

    [\[Option​And​Value​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionAndValueInput)

    ### Arguments

    The ordered options and values to be used by the combined listing. Options and values will be reordered to match the order specified here.

  * parent​Product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the parent product.

  * products​Added

    [\[Child​Product​Relation​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChildProductRelationInput)

    The child products to add and their assigned options and option values.

  * products​Edited

    [\[Child​Product​Relation​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChildProductRelationInput)

    The child products to edit and their assigned options and option values.

  * products​Removed​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of products to be removed from the combined listing.

  * title

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The updated title for the combined listing.

  ***

* [gift​Card​Product​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet)

  mutation

  Creates or updates a [`gift card`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) product. This mutation is specifically designed for gift card products and automatically sets the `giftCard` field to `true`, applies gift card variant defaults (non-taxable, no shipping required, inventory untracked), and omits fields that aren't relevant to gift cards.

  For list fields like [`variants`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet#arguments-input.fields.variants), the mutation performs a full replacement: it creates new entries, updates existing ones, and removes any entries not included in the input. For all other fields, only included fields change and omitted fields remain unchanged.

  You can run the mutation synchronously to receive the updated product immediately, or asynchronously by setting [`synchronous`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet#arguments-synchronous)`: false` to receive a [`ProductSetOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation) object instead. Use the [`productOperation`](https://shopify.dev/docs/api/admin-graphql/latest/queries/productOperation) query to check the status and retrieve the product details when running asynchronously.

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet#arguments-input.fields.issuanceCurrency">\<code>\<span class="PreventFireFoxApplyingGapToWBR">issuance\<wbr/>Currency\</span>\</code>\</a> and \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet#arguments-input.fields.crossCurrencyRedeemable">\<code>\<span class="PreventFireFoxApplyingGapToWBR">cross\<wbr/>Currency\<wbr/>Redeemable\</span>\</code>\</a> fields can only be set during product creation. They can\&#39;t be changed after the product is created.

  ***

  * identifier

    [Product​Set​Identifiers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetIdentifiers)

    ### Arguments

    Specifies the identifier that will be used to lookup the resource.

  * input

    [Gift​Card​Product​Set​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardProductSetInput)

    required

    The properties of the gift card product to create or update.

  * synchronous

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the mutation should be run synchronously or asynchronously.

    If `true`, the mutation will return the updated `product`. If `false`, the mutation will return a `productSetOperation`.

    Defaults to `true`.

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

* [product​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreate)

  mutation

  Creates a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) with attributes such as title, description, vendor, and media.

  The `productCreate` mutation helps you create many products at once, avoiding the tedious or time-consuming process of adding them one by one in the Shopify admin. Common examples include creating products for a new collection, launching a new product line, or adding seasonal products.

  You can define product [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) and [values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue), allowing you to create products with different variations like sizes or colors. You can also associate media files to your products, including images and videos.

  The `productCreate` mutation only supports creating a product with its initial [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). To create multiple product variants for a single product and manage prices, use the [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate) mutation.

  ***

  **Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">product\<wbr/>Create\</span>\</code> mutation has a \<a href="https://shopify.dev/docs/api/usage/rate-limits#resource-based-rate-limits">throttle\</a> that takes effect when a store has 50,000 product variants. After this threshold is reached, no more than 1,000 new product variants can be created per day.

  ***

  After you create a product, you can make subsequent edits to the product using one of the following mutations:

  * [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish): Used to publish the product and make it available to customers. The `productCreate` mutation creates products in an unpublished state by default, so you must perform a separate operation to publish the product.
  * [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Used to update a single product, such as changing the product's title, description, vendor, or associated media.
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * input

    [Product​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput)

    Deprecated

    ### Arguments

  * media

    [\[Create​Media​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    The media to add to the product.

  * product

    [Product​Create​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductCreateInput)

    The attributes of the new product.

  ***

* [product​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDuplicate)

  mutation

  Duplicates a product.

  If you need to duplicate a large product, such as one that has many [variants](https://shopify.dev/api/admin-graphql/latest/input-objects/ProductVariantInput) that are active at several [locations](https://shopify.dev/api/admin-graphql/latest/input-objects/InventoryLevelInput), you might encounter timeout errors.

  To avoid these timeout errors, you can instead duplicate the product asynchronously.

  In API version 2024-10 and higher, include `synchronous: false` argument in this mutation to perform the duplication asynchronously.

  In API version 2024-07 and lower, use the asynchronous [`ProductDuplicateAsyncV2`](https://shopify.dev/api/admin-graphql/2024-07/mutations/productDuplicateAsyncV2).

  Metafield values are not duplicated if the unique values capability is enabled.

  * include​Images

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Specifies whether or not to duplicate images.

  * include​Translations

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Specifies whether or not to duplicate translations.

  * new​Status

    [Product​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus)

    The new status of the product. If no value is provided the status will be inherited from the original product.

  * new​Title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The new title of the product.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the product to be duplicated.

  * synchronous

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Specifies whether or not to run the mutation synchronously.

  ***

* [product​Join​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productJoinSellingPlanGroups)

  mutation

  Adds multiple selling plan groups to a product.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product.

  * selling​Plan​Group​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the selling plan groups to add.

  ***

* [product​Leave​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productLeaveSellingPlanGroups)

  mutation

  Removes multiple groups from a product.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product.

  * selling​Plan​Group​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the selling plan groups to add.

  ***

* [product​Options​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)

  mutation

  Creates one or more [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) on a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), such as size, color, or material. Each option includes a name, position, and a list of values. The combination of a product option and value creates a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

  Use the `productOptionsCreate` mutation for the following use cases:

  * **Add product choices**: Add a new option, like "Size" (Small, Medium, Large) or "Color" (Red, Blue, Green), to an existing product so customers can select their preferred variant.
  * **Enable personalization features**: Add options such as "Engraving text" to let customers customize their purchase.
  * **Offer seasonal or limited edition products**: Add a new value (for example, "Holiday red") to an existing option to support limited-time or seasonal variants.
  * **Integrate with apps that manage product configuration**: Allow third-party apps to add options, like "Bundle size", when customers select or customize [product bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles).
  * **Link options to metafields**: Associate a product option with a custom [metafield](https://shopify.dev/docs/apps/build/custom-data), like "Fabric code", for richer integrations with other systems or apps.

  ***

  **Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">product\<wbr/>Options\<wbr/>Create\</span>\</code> mutation enforces strict data integrity for product options and variants. All option positions must be sequential, and every option should be used by at least one variant. If you use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate#arguments-variantStrategy.enums.CREATE">\<code>CREATE\</code> variant strategy\</a>, consider the maximum allowed number of variants for each product is 2048.

  ***

  After you create product options, you can further manage a product's configuration using related mutations:

  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * options

    [\[Option​Create​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionCreateInput)

    required

    ### Arguments

    Options to add to the product.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the product to update.

  * variant​Strategy

    [Product​Option​Create​Variant​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionCreateVariantStrategy)

    Default:LEAVE\_AS\_IS

    The strategy defines which behavior the mutation should observe regarding variants. If not provided or set to null, the strategy `LEAVE_AS_IS` will be used.

  ***

* [product​Options​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

  mutation

  Deletes one or more [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) from a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product). Product options define the choices available for a product, such as size, color, or material.

  ***

  **Caution:** Removing an option can affect a product\&#39;s \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant">variants\</a> and their configuration. Deleting an option might also delete associated option values and, depending on the chosen \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete#arguments-strategy">strategy\</a>, might affect variants.

  ***

  Use the `productOptionsDelete` mutation for the following use cases:

  * **Simplify product configuration**: Remove obsolete or unnecessary options (for example, discontinue "Material" if all variants are now the same material).
  * **Clean up after seasonal or limited-time offerings**: Delete options that are no longer relevant (for example, "Holiday edition").
  * **Automate catalog management**: Enable apps or integrations to programmatically remove options as product data changes.

  ***

  **Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">product\<wbr/>Options\<wbr/>Delete\</span>\</code> mutation enforces strict data integrity for product options and variants. All option positions must remain sequential, and every remaining option must be used by at least one variant.

  ***

  After you delete a product option, you can further manage a product's configuration using related mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * options

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    IDs of the options to delete from the product.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ID of the product from which to delete the options.

  * strategy

    [Product​Option​Delete​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionDeleteStrategy)

    Default:DEFAULT

    The strategy defines which behavior the mutation should observe,such as how to handle a situation where deleting an option would result in duplicate variants.

  ***

* [product​Options​Reorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)

  mutation

  Reorders the [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) and [option values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue) on a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), updating the order in which [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) are presented to customers.

  The `productOptionsReorder` mutation accepts a list of product options, each identified by `id` or `name`, and an optional list of values (also by `id` or `name`) specifying the new order. The order of options in the mutation's input determines their new positions (for example, the first option becomes `option1`). The order of values within each option determines their new positions. The mutation recalculates the order of variants based on the new option and value order.

  Suppose a product has the following variants:

  1. `"Red / Small"`
  2. `"Green / Medium"`
  3. `"Blue / Small"`

  You reorder options and values:

  ```
  options: [
  { name: "Size", values: [{ name: "Small" }, { name: "Medium" }] },
  { name: "Color", values: [{ name: "Green" }, { name: "Red" }, { name: "Blue" }] }
  ]
  ```

  The resulting variant order will be:

  1. `"Small / Green"`
  2. `"Small / Red"`
  3. `"Small / Blue"`
  4. `"Medium / Green"`

  Use the `productOptionsReorder` mutation for the following use cases:

  * **Change the order of product options**: For example, display "Color" before "Size" in a store.
  * **Reorder option values within an option**: For example, show "Red" before "Blue" in a color picker.
  * **Control the order of product variants**: The order of options and their values determines the sequence in which variants are listed and selected.
  * **Highlight best-selling options**: Present the most popular or relevant options and values first.
  * **Promote merchandising strategies**: Highlight seasonal colors, limited editions, or featured sizes.

  ***

  **Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">product\<wbr/>Options\<wbr/>Reorder\</span>\</code> mutation enforces strict data integrity for product options and variants. All option positions must be sequential, and every option should be used by at least one variant.

  ***

  After you reorder product options, you can further manage a product's configuration using related mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [managing product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * options

    [\[Option​Reorder​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionReorderInput)

    required

    ### Arguments

    Options to reorder on the product.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the product to update.

  ***

* [product​Option​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)

  mutation

  Updates an [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) on a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), such as size, color, or material. Each option includes a name, position, and a list of values. The combination of a product option and value creates a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

  Use the `productOptionUpdate` mutation for the following use cases:

  * **Update product choices**: Modify an existing option, like "Size" (Small, Medium, Large) or "Color" (Red, Blue, Green), so customers can select their preferred variant.
  * **Enable personalization features**: Update an option (for example, "Engraving text") to let customers customize their purchase.
  * **Offer seasonal or limited edition products**: Update a value (for example, "Holiday red") on an existing option to support limited-time or seasonal variants.
  * **Integrate with apps that manage product configuration**: Allow third-party apps to update options, like "Bundle size", when customers select or customize [product bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles).
  * **Link options to metafields**: Associate a product option with a custom [metafield](https://shopify.dev/docs/apps/build/custom-data), like "Fabric code", for richer integrations with other systems or apps.

  ***

  **Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">product\<wbr/>Option\<wbr/>Update\</span>\</code> mutation enforces strict data integrity for product options and variants. All option positions must be sequential, and every option should be used by at least one variant.

  ***

  After you update a product option, you can further manage a product's configuration using related mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * option

    [Option​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionUpdateInput)

    required

    ### Arguments

    Option to update.

  * option​Values​To​Add

    [\[Option​Value​Create​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionValueCreateInput)

    New option values to create.

  * option​Values​To​Delete

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    IDs of the existing option values to delete.

  * option​Values​To​Update

    [\[Option​Value​Update​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionValueUpdateInput)

    Existing option values to update.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the Product the Option belongs to.

  * variant​Strategy

    [Product​Option​Update​Variant​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionUpdateVariantStrategy)

    The strategy defines which behavior the mutation should observe regarding variants, such as creating variants or deleting them in response to option values to add or to delete. If not provided or set to null, the strategy `LEAVE_AS_IS` will be used.

  ***

* [product​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  mutation

  Performs multiple operations to create or update products in a single request.

  Use the `productSet` mutation to sync information from an external data source into Shopify, manage large product catalogs, and perform batch updates. The mutation is helpful for bulk product management, including price adjustments, inventory updates, and product lifecycle management.

  The behavior of `productSet` depends on the type of field it's modifying:

  * **For list fields**: Creates new entries, updates existing entries, and deletes existing entries that aren't included in the mutation's input. Common examples of list fields include [`collections`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.collections), [`metafields`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.metafields), and [`variants`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.variants).

  * **For all other field types**: Updates only the included fields. Any omitted fields will remain unchanged.

  ***

  **Note:** By default, stores have a limit of 2048 product variants for each product.

  ***

  You can run `productSet` in one of the following modes:

  * **Synchronously**: Returns the updated product in the response.
  * **Asynchronously**: Returns a [`ProductSetOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation) object. Use the [`productOperation`](https://shopify.dev/api/admin-graphql/latest/queries/productOperation) query to check the status of the operation and retrieve details of the updated product and its product variants.

  If you need to only manage product variants, then use one of the following mutations:

  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productVariantsBulkDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete)

  If you need to only manage product options, then use one of the following mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

  Learn more about [syncing product data from an external source](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/sync-data).

  * identifier

    [Product​Set​Identifiers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetIdentifiers)

    ### Arguments

    Specifies the identifier that will be used to lookup the resource.

  * input

    [Product​Set​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput)

    required

    The properties of the newly created or updated product.

  * synchronous

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the mutation should be run synchronously or asynchronously.

    If `true`, the mutation will return the updated `product`.

    If `false`, the mutation will return a `productSetOperation`.

    Defaults to `true`.

    Setting `synchronous: false` may be desirable depending on the input complexity/size, and should be used if you are experiencing timeouts.

    **Note**: When run in the context of a [bulk operation](https://shopify.dev/api/usage/bulk-operations/imports), the mutation will always run synchronously and this argument will be ignored.

  ***

* [product​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate)

  mutation

  Updates a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) with attributes such as title, description, vendor, and media.

  The `productUpdate` mutation helps you modify many products at once, avoiding the tedious or time-consuming process of updating them one by one in the Shopify admin. Common examples including updating product details like status or tags.

  The `productUpdate` mutation doesn't support updating [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). To update multiple product variants for a single product and manage prices, use the [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate) mutation.

  ***

  **Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">product\<wbr/>Update\</span>\</code> mutation has a \<a href="https://shopify.dev/docs/api/usage/rate-limits#resource-based-rate-limits">throttle\</a> that takes effect when a store has 50,000 product variants. After this threshold is reached, no more than 1,000 new product variants can be updated per day.

  ***

  After updating a product, you can make additional changes using one of the following mutations:

  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.
  * [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish): Used to publish the product and make it available to customers, if the product is currently unpublished.

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * identifier

    [Product​Update​Identifiers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUpdateIdentifiers)

    ### Arguments

    Specifies the identifier that will be used to lookup the resource.

  * input

    [Product​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput)

    Deprecated

  * media

    [\[Create​Media​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    List of new media to be added to the product.

  * product

    [Product​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUpdateInput)

    The updated properties for a product.

  ***

* [product​Variant​Append​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantAppendMedia)

  mutation

  Appends existing media from a product to specific variants of that product, creating associations between media files and particular product options. This allows different variants to showcase relevant images or videos.

  For example, a t-shirt product might have color variants where each color variant displays only the images showing that specific color, helping customers see exactly what they're purchasing.

  Use `ProductVariantAppendMedia` to:

  * Associate specific images with product variants for accurate display
  * Build variant-specific media management in product interfaces
  * Implement automated media assignment based on variant attributes

  The operation links existing product media to variants without duplicating files, maintaining efficient media storage while enabling variant-specific displays.

  Learn more about [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the product associated to the media.

  * variant​Media

    [\[Product​Variant​Append​Media​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantAppendMediaInput)

    required

    A list of pairs of variants and media to be attached to the variants.

  ***

* [product​Variant​Detach​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantDetachMedia)

  mutation

  Detaches media from product variants.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the product to which the variants and media are associated.

  * variant​Media

    [\[Product​Variant​Detach​Media​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantDetachMediaInput)

    required

    A list of pairs of variants and media to be deleted from the variants.

  ***

* [product​Variants​Bulk​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)

  mutation

  Creates multiple [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) for a single [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in one operation. You can run this mutation directly or as part of a [bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/imports) for large-scale catalog updates.

  Use the `productVariantsBulkCreate` mutation to efficiently add new product variants—such as different sizes, colors, or materials—to an existing product. The mutation is helpful if you need to add product variants in bulk, such as importing from an external system.

  The mutation supports:

  * Creating variants with custom option values
  * Associating media (for example, images, videos, and 3D models) with the product or its variants
  * Handling complex product configurations

  ***

  **Note:** By default, stores have a limit of 2048 product variants for each product.

  ***

  After creating variants, you can make additional changes using one of the following mutations:

  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate): Updates multiple product variants for a single product in one operation.
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.

  You can also specifically manage product options through related mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * media

    [\[Create​Media​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    ### Arguments

    List of new media to be added to the product.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the product on which to create the variants.

  * strategy

    [Product​Variants​Bulk​Create​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkCreateStrategy)

    Default:DEFAULT

    The strategy defines which behavior the mutation should observe, such as whether to keep or delete the standalone variant (when product has only a single or default variant) when creating new variants in bulk.

  * variants

    [\[Product​Variants​Bulk​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput)

    required

    An array of product variants to be created.

  ***

* [product​Variants​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete)

  mutation

  Deletes multiple variants in a single [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product). Specify the product ID and an array of variant IDs to remove variants in bulk. You can call this mutation directly or through the [`bulkOperationRunMutation`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation) mutation. Returns the updated product and any [`UserError`](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError) objects.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product with the variants to update.

  * variants​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    An array of product variants IDs to delete.

  ***

* [product​Variants​Bulk​Reorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkReorder)

  mutation

  Reorders multiple variants in a single product. This mutation can be called directly or via the bulkOperation.

  * positions

    [\[Product​Variant​Position​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantPositionInput)

    required

    ### Arguments

    An array of variant positions.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The product ID of the variants to be reordered.

  ***

* [product​Variants​Bulk​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)

  mutation

  Updates multiple [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) for a single [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in one operation. You can run this mutation directly or as part of a [bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/imports) for large-scale catalog updates.

  Use the `productVariantsBulkUpdate` mutation to efficiently modify product variants—such as different sizes, colors, or materials—associated with an existing product. The mutation is helpful if you need to update a product's variants in bulk, such as importing from an external system.

  The mutation supports:

  * Updating variants with custom option values
  * Associating media (for example, images, videos, and 3D models) with the product or its variants
  * Handling complex product configurations

  ***

  **Note:** By default, stores have a limit of 2048 product variants for each product.

  ***

  After creating variants, you can make additional changes using the [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet) mutation, which is used to perform multiple operations on products, such as creating or modifying product options and variants.

  You can also specifically manage product options through related mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * allow​Partial​Updates

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    When partial updates are allowed, valid variant changes may be persisted even if some of the variants updated have invalid data and cannot be persisted. When partial updates are not allowed, any error will prevent all variants from updating.

  * media

    [\[Create​Media​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    List of new media to be added to the product.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the product associated with the variants to update.

  * variants

    [\[Product​Variants​Bulk​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput)

    required

    An array of product variants to update.

  ***

### Deprecated mutations

* [product​Change​Status](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productChangeStatus)

  mutation

  Deprecated

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product.

  * status

    [Product​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus)

    required

    The status to be assigned to the product.

  ***

* [product​Create​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreateMedia)

  mutation

  Deprecated

  * media

    [\[Create​Media​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    required

    ### Arguments

    List of new media to be added to a product.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    Specifies the product associated with the media.

  ***

* [product​Delete​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDeleteMedia)

  mutation

  Deprecated

  * media​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The media IDs to be deleted.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    Specifies the product ID from which the media will be deleted.

  ***

* [product​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productPublish)

  mutation

  Deprecated

  * input

    [Product​Publish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductPublishInput)

    required

    ### Arguments

    Specifies the product to publish and the channels to publish it to.

  ***

* [product​Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUnpublish)

  mutation

  Deprecated

  * input

    [Product​Unpublish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUnpublishInput)

    required

    ### Arguments

    Specifies the product to unpublish and the channel to unpublish it from.

  ***

* [product​Update​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdateMedia)

  mutation

  Deprecated

  * media

    [\[Update​Media​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UpdateMediaInput)

    required

    ### Arguments

    A list of media updates.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    Specifies the product on which media will be updated.

  ***

***

## Product Mutations

### Mutated by

* [combined​Listing​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedListingUpdate)
* [gift​Card​Product​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardProductSet)
* [price​List​Fixed​Prices​By​Product​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesByProductUpdate)
* [product​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreate)
* [product​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDuplicate)
* [product​Join​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productJoinSellingPlanGroups)
* [product​Leave​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productLeaveSellingPlanGroups)
* [product​Option​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
* [product​Options​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
* [product​Options​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
* [product​Options​Reorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
* [product​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)
* [product​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate)
* [product​Variant​Append​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantAppendMedia)
* [product​Variant​Detach​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantDetachMedia)
* [product​Variants​Bulk​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
* [product​Variants​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete)
* [product​Variants​Bulk​Reorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkReorder)
* [product​Variants​Bulk​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)

***

## Interfaces

* * [Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

    interface

  * [Has​Metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

    interface

  * [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

    interface

  * [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

    interface

  * [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

    interface

  * [Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

  * [Online​Store​Previewable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/OnlineStorePreviewable)

    interface

  * [Publishable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)

    interface

***

## Product Implements

### Implements

* [Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
* [Has​Metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
* [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
* [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
* [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
* [Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
* [Online​Store​Previewable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/OnlineStorePreviewable)
* [Publishable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)
