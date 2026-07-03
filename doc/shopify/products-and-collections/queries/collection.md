---
title: collection - GraphQL Admin
description: >-
  Retrieves a
  [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)
  by its ID.

  A collection represents a grouping of
  [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  that merchants can display and sell as a group in their [online

  store](https://shopify.dev/docs/apps/build/online-store) and

  other [sales channels](https://shopify.dev/docs/apps/build/sales-channels).


  Use the `collection` query when you need to:


  - Manage collection publishing across sales channels

  - Access collection metadata and SEO information

  - Work with collection conditions and product relationships


  A collection determines which products it includes through conditions that
  automatically include

  products that match, and through manual selections of individual products.
  Each collection has

  associated metadata including title, description, handle, image, and

  [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/collection'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/collection.md'
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# collection

query

Retrieves a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) by its ID. A collection represents a grouping of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can display and sell as a group in their [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels).

Use the `collection` query when you need to:

* Manage collection publishing across sales channels
* Access collection metadata and SEO information
* Work with collection conditions and product relationships

A collection determines which products it includes through conditions that automatically include products that match, and through manual selections of individual products. Each collection has associated metadata including title, description, handle, image, and [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields).

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the `Collection` to return.

***

## Possible returns

* Collection

  [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  The `Collection` object represents a group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can organize to make their stores easier to browse and help customers find related products. Collections serve as the primary way to categorize and display products across [online stores](https://shopify.dev/docs/apps/build/online-store), [sales channels](https://shopify.dev/docs/apps/build/sales-channels), and marketing campaigns.

  The `Collection` object provides information to:

  * Organize products by category, season, or promotion.
  * Automate product grouping using rules (for example, by tag, type, or price).
  * Configure product sorting and display order (for example, alphabetical, best-selling, price, or manual).
  * Manage collection visibility and publication across sales channels.
  * Add rich descriptions, images, and metadata to enhance discovery.

  ***

  **Note:** Collections are unpublished by default. To make them available to customers, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish">\<code>\<span class="PreventFireFoxApplyingGapToWBR">publishable\<wbr/>Publish\</span>\</code>\</a> mutation after creation.

  ***

  Collections can be displayed in a store with Shopify's theme system through [Liquid templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection) and can be customized with [template suffixes](https://shopify.dev/docs/storefronts/themes/architecture/templates/alternate-templates) for unique layouts. They also support advanced features like translated content, resource feedback, and contextual publication for location-based catalogs.

  Learn about [using metafields with collection conditions](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

  * active​Operations

    [Collection​Operations!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionOperations)

    non-null

    Collection duplicate operations involving this collection, either as a source (copying products from this collection to another) or a target (copying products to this collection from another).

  * available​Publications​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    The number of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that a resource is published to, without [feedback errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback).

  * description

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A single-line, text-only description of the collection, stripped of any HTML tags and formatting that were included in the description.

    * truncate​At

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

      Truncates a string after the given length.

    ***

  * description​Html

    [HTML!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

    non-null

    The description of the collection, including any HTML tags and formatting. This content is typically displayed to customers, such as on an online store, depending on the theme.

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

  * feedback

    [Resource​Feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback)

    Information about the collection that's provided through resource feedback.

  * handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A unique string that identifies the collection. If a handle isn't specified when a collection is created, it's automatically generated from the collection's original title, and typically includes words from the title separated by hyphens. For example, a collection that was created with the title `Summer Catalog 2022` might have the handle `summer-catalog-2022`.

    If the title is changed, the handle doesn't automatically change.

    The handle can be used in themes by the Liquid templating language to refer to the collection, but using the ID is preferred because it never changes.

  * has​Product

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the collection includes the specified product.

    * id

      [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

      required

      ### Arguments

      The ID of the product to check.

    ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * image

    [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

    The image associated with the collection.

    * crop

      [Crop​Region](https://shopify.dev/docs/api/admin-graphql/latest/enums/CropRegion)

      Deprecated

      ### Arguments

    * max​Height

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      Deprecated

    * max​Width

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      Deprecated

    * scale

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      DeprecatedDefault:1

    ***

  * legacy​Resource​Id

    [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

    non-null

    The ID of the corresponding resource in the REST Admin API.

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

  * products

    [Product​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection)

    non-null

    The products that are included in the collection.

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

      [Product​Collection​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductCollectionSortKeys)

      Default:COLLECTION\_DEFAULT

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    ***

  * products​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    The number of products in the collection.

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

  * seo

    [SEO!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SEO)

    non-null

    If the default SEO fields for page title and description have been modified, contains the modified information.

  * sort​Order

    [Collection​Sort​Order!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSortOrder)

    non-null

    The order in which the products in the collection are displayed by default in the Shopify admin and in sales channels, such as an online store.

  * sources

    [\[Collection​Source!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSource)

    non-null

    The sources that provide products for this collection. Each source represents a way products are included in the collection, such as through conditions and rules.

  * sub​Collection​Eligibility

    [Collection​Sub​Collection​Eligibility!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSubCollectionEligibility)

    non-null

    Whether this collection is eligible to be referenced as a sub-collection from another collection's source. Returns one state per role (inclusion / exclusion).

    Use this to filter ineligible targets up front and surface the reason.

  * template​Suffix

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The suffix of the Liquid template being used to show the collection in an online store. For example, if the value is `custom`, then the collection is using the `collection.custom.liquid` template. If the value is `null`, then the collection is using the default `collection.liquid` template.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The name of the collection. It's displayed in the Shopify admin and is typically displayed in sales channels, such as an online store.

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

    The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the collection was last modified.

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

    [Collection​Publication​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionPublicationConnection)

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

      Whether or not to return only the collection publications that are published.

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

  * rule​Set

    [Collection​Rule​Set](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleSet)

    Deprecated

  * storefront​Id

    [Storefront​ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/StorefrontID)

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

## Examples

* ### Get a collection's product count

  #### Description

  Retrieve the total number of \[products]\(https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in a \[collection]\(https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection). The response includes a count object with the exact number of products and a precision indicator. This is useful for \[pagination]\(https://shopify.dev/docs/api/usage/pagination-graphql) calculations and displaying collection statistics.

  #### Query

  ```graphql
  query GetCollectionProductCount($id: ID!) {
    collection(id: $id) {
      id
      title
      productsCount {
        count
        precision
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Collection/841564295"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query GetCollectionProductCount($id: ID!) { collection(id: $id) { id title productsCount { count precision } } }",
   "variables": {
      "id": "gid://shopify/Collection/841564295"
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query GetCollectionProductCount($id: ID!) {
      collection(id: $id) {
        id
        title
        productsCount {
          count
          precision
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Collection/841564295"
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    query GetCollectionProductCount($id: ID!) {
      collection(id: $id) {
        id
        title
        productsCount {
          count
          precision
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Collection/841564295"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `query GetCollectionProductCount($id: ID!) {
        collection(id: $id) {
          id
          title
          productsCount {
            count
            precision
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Collection/841564295"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query GetCollectionProductCount($id: ID!) {
    collection(id: $id) {
      id
      title
      productsCount {
        count
        precision
      }
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/Collection/841564295"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query GetCollectionProductCount($id: ID!) {
          collection(id: $id) {
            id
            title
            productsCount {
              count
              precision
            }
          }
        }
      `,
      variables: {
          "id": "gid://shopify/Collection/841564295"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "collection": {
      "id": "gid://shopify/Collection/841564295",
      "title": "IPods",
      "productsCount": {
        "count": 1,
        "precision": "EXACT"
      }
    }
  }
  ```

* ### Retrieve a collection by ID

  #### Description

  Retrieve a specific \[collection]\(https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) using its ID. The response returns the collection's basic information including its ID, title, handle, description, update timestamp, image details, and \[sort order]\(https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSortOrder).

  #### Query

  ```graphql
  query GetCollection($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
      descriptionHtml
      updatedAt
      sortOrder
      image {
        url
        height
        width
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Collection/841564295"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query GetCollection($id: ID!) { collection(id: $id) { id title handle descriptionHtml updatedAt sortOrder image { url height width } } }",
   "variables": {
      "id": "gid://shopify/Collection/841564295"
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query GetCollection($id: ID!) {
      collection(id: $id) {
        id
        title
        handle
        descriptionHtml
        updatedAt
        sortOrder
        image {
          url
          height
          width
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Collection/841564295"
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    query GetCollection($id: ID!) {
      collection(id: $id) {
        id
        title
        handle
        descriptionHtml
        updatedAt
        sortOrder
        image {
          url
          height
          width
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Collection/841564295"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `query GetCollection($id: ID!) {
        collection(id: $id) {
          id
          title
          handle
          descriptionHtml
          updatedAt
          sortOrder
          image {
            url
            height
            width
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Collection/841564295"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query GetCollection($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
      descriptionHtml
      updatedAt
      sortOrder
      image {
        url
        height
        width
      }
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/Collection/841564295"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query GetCollection($id: ID!) {
          collection(id: $id) {
            id
            title
            handle
            descriptionHtml
            updatedAt
            sortOrder
            image {
              url
              height
              width
            }
          }
        }
      `,
      variables: {
          "id": "gid://shopify/Collection/841564295"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "collection": {
      "id": "gid://shopify/Collection/841564295",
      "title": "IPods",
      "handle": "ipods",
      "descriptionHtml": "<p>The best selling ipod ever</p>",
      "updatedAt": "2008-02-02T00:00:00Z",
      "sortOrder": "MANUAL",
      "image": {
        "url": "https://cdn.shopify.com/s/files/1/0005/4838/0009/collections/ipod_nano_8gb.jpg?v=1781234263",
        "height": 456,
        "width": 123
      }
    }
  }
  ```

* ### Retrieve a collection with its products

  #### Description

  Retrieve a \[collection]\(https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) along with a list of its associated \[products]\(https://shopify.dev/docs/api/admin-graphql/latest/objects/Product). The response includes the collection details and the first 10 products in the collection, with each product's ID and title. This is useful for displaying a collection page with its product listings.

  #### Query

  ```graphql
  query GetCollectionWithProducts($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
      descriptionHtml
      products(first: 10) {
        nodes {
          id
          title
          handle
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Collection/841564295"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query GetCollectionWithProducts($id: ID!) { collection(id: $id) { id title handle descriptionHtml products(first: 10) { nodes { id title handle } pageInfo { hasNextPage hasPreviousPage } } } }",
   "variables": {
      "id": "gid://shopify/Collection/841564295"
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query GetCollectionWithProducts($id: ID!) {
      collection(id: $id) {
        id
        title
        handle
        descriptionHtml
        products(first: 10) {
          nodes {
            id
            title
            handle
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Collection/841564295"
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    query GetCollectionWithProducts($id: ID!) {
      collection(id: $id) {
        id
        title
        handle
        descriptionHtml
        products(first: 10) {
          nodes {
            id
            title
            handle
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Collection/841564295"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `query GetCollectionWithProducts($id: ID!) {
        collection(id: $id) {
          id
          title
          handle
          descriptionHtml
          products(first: 10) {
            nodes {
              id
              title
              handle
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Collection/841564295"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query GetCollectionWithProducts($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
      descriptionHtml
      products(first: 10) {
        nodes {
          id
          title
          handle
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/Collection/841564295"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query GetCollectionWithProducts($id: ID!) {
          collection(id: $id) {
            id
            title
            handle
            descriptionHtml
            products(first: 10) {
              nodes {
                id
                title
                handle
              }
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
            }
          }
        }
      `,
      variables: {
          "id": "gid://shopify/Collection/841564295"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "collection": {
      "id": "gid://shopify/Collection/841564295",
      "title": "IPods",
      "handle": "ipods",
      "descriptionHtml": "<p>The best selling ipod ever</p>",
      "products": {
        "nodes": [
          {
            "id": "gid://shopify/Product/632910392",
            "title": "IPod Nano - 8GB",
            "handle": "ipod-nano"
          }
        ],
        "pageInfo": {
          "hasNextPage": false,
          "hasPreviousPage": false
        }
      }
    }
  }
  ```

* ### Retrieve a collection's publication status

  #### Description

  Check if a collection is published to a \[sales channel]\(https://shopify.dev/docs/apps/build/sales-channels). The response includes publication status and publication-related fields. This is useful for determining collection visibility and managing which collections are available through your app. > Note: > You must have the \`read\_product\_listings\` access scope to retrieve publication information.

  #### Query

  ```graphql
  query GetCollectionPublicationStatus($id: ID!) {
    collection(id: $id) {
      id
      title
      publishedOnCurrentPublication
      publicationCount
      resourcePublicationsCount {
        count
        precision
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Collection/841564295"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query GetCollectionPublicationStatus($id: ID!) { collection(id: $id) { id title publishedOnCurrentPublication publicationCount resourcePublicationsCount { count precision } } }",
   "variables": {
      "id": "gid://shopify/Collection/841564295"
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query GetCollectionPublicationStatus($id: ID!) {
      collection(id: $id) {
        id
        title
        publishedOnCurrentPublication
        publicationCount
        resourcePublicationsCount {
          count
          precision
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Collection/841564295"
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    query GetCollectionPublicationStatus($id: ID!) {
      collection(id: $id) {
        id
        title
        publishedOnCurrentPublication
        publicationCount
        resourcePublicationsCount {
          count
          precision
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Collection/841564295"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `query GetCollectionPublicationStatus($id: ID!) {
        collection(id: $id) {
          id
          title
          publishedOnCurrentPublication
          publicationCount
          resourcePublicationsCount {
            count
            precision
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Collection/841564295"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query GetCollectionPublicationStatus($id: ID!) {
    collection(id: $id) {
      id
      title
      publishedOnCurrentPublication
      publicationCount
      resourcePublicationsCount {
        count
        precision
      }
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/Collection/841564295"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query GetCollectionPublicationStatus($id: ID!) {
          collection(id: $id) {
            id
            title
            publishedOnCurrentPublication
            publicationCount
            resourcePublicationsCount {
              count
              precision
            }
          }
        }
      `,
      variables: {
          "id": "gid://shopify/Collection/841564295"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "collection": {
      "id": "gid://shopify/Collection/841564295",
      "title": "IPods",
      "publishedOnCurrentPublication": true,
      "publicationCount": 2,
      "resourcePublicationsCount": {
        "count": 2,
        "precision": "EXACT"
      }
    }
  }
  ```

* ### Retrieve a collection's sources

  #### Description

  Retrieve the sources that determine which products are included in a collection. Use \`\_\_typename\` and inline fragments to access fields that are specific to each source and condition type.

  #### Query

  ```graphql
  query CollectionSources($id: ID!) {
    collection(id: $id) {
      id
      title
      sources {
        __typename
        id
        title
        ... on CollectionConditionsSource {
          inclusion {
            matchType
            conditions {
              __typename
              id
              ... on CollectionSourceInclusionConditionProductTag {
                relation
                values
                matchType
              }
            }
            selections(first: 10) {
              nodes {
                product {
                  id
                  title
                }
                variantIds
              }
            }
          }
        }
        ... on CollectionSubCollectionSource {
          subCollection {
            id
            title
          }
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Collection/841564295"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query CollectionSources($id: ID!) { collection(id: $id) { id title sources { __typename id title ... on CollectionConditionsSource { inclusion { matchType conditions { __typename id ... on CollectionSourceInclusionConditionProductTag { relation values matchType } } selections(first: 10) { nodes { product { id title } variantIds } } } } ... on CollectionSubCollectionSource { subCollection { id title } } } } }",
   "variables": {
      "id": "gid://shopify/Collection/841564295"
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query CollectionSources($id: ID!) {
      collection(id: $id) {
        id
        title
        sources {
          __typename
          id
          title
          ... on CollectionConditionsSource {
            inclusion {
              matchType
              conditions {
                __typename
                id
                ... on CollectionSourceInclusionConditionProductTag {
                  relation
                  values
                  matchType
                }
              }
              selections(first: 10) {
                nodes {
                  product {
                    id
                    title
                  }
                  variantIds
                }
              }
            }
          }
          ... on CollectionSubCollectionSource {
            subCollection {
              id
              title
            }
          }
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Collection/841564295"
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    query CollectionSources($id: ID!) {
      collection(id: $id) {
        id
        title
        sources {
          __typename
          id
          title
          ... on CollectionConditionsSource {
            inclusion {
              matchType
              conditions {
                __typename
                id
                ... on CollectionSourceInclusionConditionProductTag {
                  relation
                  values
                  matchType
                }
              }
              selections(first: 10) {
                nodes {
                  product {
                    id
                    title
                  }
                  variantIds
                }
              }
            }
          }
          ... on CollectionSubCollectionSource {
            subCollection {
              id
              title
            }
          }
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Collection/841564295"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `query CollectionSources($id: ID!) {
        collection(id: $id) {
          id
          title
          sources {
            __typename
            id
            title
            ... on CollectionConditionsSource {
              inclusion {
                matchType
                conditions {
                  __typename
                  id
                  ... on CollectionSourceInclusionConditionProductTag {
                    relation
                    values
                    matchType
                  }
                }
                selections(first: 10) {
                  nodes {
                    product {
                      id
                      title
                    }
                    variantIds
                  }
                }
              }
            }
            ... on CollectionSubCollectionSource {
              subCollection {
                id
                title
              }
            }
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Collection/841564295"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query CollectionSources($id: ID!) {
    collection(id: $id) {
      id
      title
      sources {
        __typename
        id
        title
        ... on CollectionConditionsSource {
          inclusion {
            matchType
            conditions {
              __typename
              id
              ... on CollectionSourceInclusionConditionProductTag {
                relation
                values
                matchType
              }
            }
            selections(first: 10) {
              nodes {
                product {
                  id
                  title
                }
                variantIds
              }
            }
          }
        }
        ... on CollectionSubCollectionSource {
          subCollection {
            id
            title
          }
        }
      }
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/Collection/841564295"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query CollectionSources($id: ID!) {
          collection(id: $id) {
            id
            title
            sources {
              __typename
              id
              title
              ... on CollectionConditionsSource {
                inclusion {
                  matchType
                  conditions {
                    __typename
                    id
                    ... on CollectionSourceInclusionConditionProductTag {
                      relation
                      values
                      matchType
                    }
                  }
                  selections(first: 10) {
                    nodes {
                      product {
                        id
                        title
                      }
                      variantIds
                    }
                  }
                }
              }
              ... on CollectionSubCollectionSource {
                subCollection {
                  id
                  title
                }
              }
            }
          }
        }
      `,
      variables: {
          "id": "gid://shopify/Collection/841564295"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "collection": {
      "id": "gid://shopify/Collection/841564295",
      "title": "IPods",
      "sources": [
        {
          "__typename": "CollectionConditionsSource",
          "id": "gid://shopify/CollectionConditionsSource/1047893279",
          "title": "Spring source",
          "inclusion": {
            "matchType": "ALL",
            "conditions": [
              {
                "__typename": "CollectionSourceInclusionConditionProductTag",
                "id": "gid://shopify/CollectionSourceInclusionConditionProductTag/977278317",
                "relation": "TAGGED_WITH",
                "values": [
                  "spring"
                ],
                "matchType": "ANY"
              }
            ],
            "selections": {
              "nodes": []
            }
          }
        }
      ]
    }
  }
  ```

* ### Retrieve a metafield associated with a collection

  #### Description

  Get the \[metafield]\(https://shopify.dev/docs/apps/build/custom-data) value identified by \`my\_fields.subtitle\` on a specific collection.

  #### Query

  ```graphql
  query CollectionMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    collection(id: $ownerId) {
      subtitle: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "namespace": "my_fields",
    "key": "subtitle",
    "ownerId": "gid://shopify/Collection/841564295"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query CollectionMetafield($namespace: String!, $key: String!, $ownerId: ID!) { collection(id: $ownerId) { subtitle: metafield(namespace: $namespace, key: $key) { value } } }",
   "variables": {
      "namespace": "my_fields",
      "key": "subtitle",
      "ownerId": "gid://shopify/Collection/841564295"
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query CollectionMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
      collection(id: $ownerId) {
        subtitle: metafield(namespace: $namespace, key: $key) {
          value
        }
      }
    }`,
    {
      variables: {
          "namespace": "my_fields",
          "key": "subtitle",
          "ownerId": "gid://shopify/Collection/841564295"
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    query CollectionMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
      collection(id: $ownerId) {
        subtitle: metafield(namespace: $namespace, key: $key) {
          value
        }
      }
    }
  QUERY

  variables = {
    "namespace": "my_fields",
    "key": "subtitle",
    "ownerId": "gid://shopify/Collection/841564295"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `query CollectionMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
        collection(id: $ownerId) {
          subtitle: metafield(namespace: $namespace, key: $key) {
            value
          }
        }
      }`,
      "variables": {
          "namespace": "my_fields",
          "key": "subtitle",
          "ownerId": "gid://shopify/Collection/841564295"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query CollectionMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    collection(id: $ownerId) {
      subtitle: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }' \
  --variables \
  '{
    "namespace": "my_fields",
    "key": "subtitle",
    "ownerId": "gid://shopify/Collection/841564295"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query CollectionMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
          collection(id: $ownerId) {
            subtitle: metafield(namespace: $namespace, key: $key) {
              value
            }
          }
        }
      `,
      variables: {
          "namespace": "my_fields",
          "key": "subtitle",
          "ownerId": "gid://shopify/Collection/841564295"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "collection": {
      "subtitle": {
        "value": "Best of the best"
      }
    }
  }
  ```

* ### Retrieve a smart collection with its rules

  #### Description

  Retrieve a \[smart collection]\(https://help.shopify.com/manual/products/collections/smart-collections) along with its automated \[rules]\(https://help.shopify.com/manual/products/collections/smart-collections/conditions). Smart collections automatically include products that match specific conditions. The response includes the collection details and its rule set, which defines the conditions used to automatically populate the collection with products.

  #### Query

  ```graphql
  query GetSmartCollection($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
      sortOrder
      ruleSet {
        appliedDisjunctively
        rules {
          column
          relation
          condition
        }
      }
      products(first: 5) {
        nodes {
          id
          title
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Collection/482865238"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query GetSmartCollection($id: ID!) { collection(id: $id) { id title handle sortOrder ruleSet { appliedDisjunctively rules { column relation condition } } products(first: 5) { nodes { id title } } } }",
   "variables": {
      "id": "gid://shopify/Collection/482865238"
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query GetSmartCollection($id: ID!) {
      collection(id: $id) {
        id
        title
        handle
        sortOrder
        ruleSet {
          appliedDisjunctively
          rules {
            column
            relation
            condition
          }
        }
        products(first: 5) {
          nodes {
            id
            title
          }
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Collection/482865238"
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    query GetSmartCollection($id: ID!) {
      collection(id: $id) {
        id
        title
        handle
        sortOrder
        ruleSet {
          appliedDisjunctively
          rules {
            column
            relation
            condition
          }
        }
        products(first: 5) {
          nodes {
            id
            title
          }
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Collection/482865238"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `query GetSmartCollection($id: ID!) {
        collection(id: $id) {
          id
          title
          handle
          sortOrder
          ruleSet {
            appliedDisjunctively
            rules {
              column
              relation
              condition
            }
          }
          products(first: 5) {
            nodes {
              id
              title
            }
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Collection/482865238"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query GetSmartCollection($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
      sortOrder
      ruleSet {
        appliedDisjunctively
        rules {
          column
          relation
          condition
        }
      }
      products(first: 5) {
        nodes {
          id
          title
        }
      }
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/Collection/482865238"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query GetSmartCollection($id: ID!) {
          collection(id: $id) {
            id
            title
            handle
            sortOrder
            ruleSet {
              appliedDisjunctively
              rules {
                column
                relation
                condition
              }
            }
            products(first: 5) {
              nodes {
                id
                title
              }
            }
          }
        }
      `,
      variables: {
          "id": "gid://shopify/Collection/482865238"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "collection": {
      "id": "gid://shopify/Collection/482865238",
      "title": "Smart iPods",
      "handle": "smart-ipods",
      "sortOrder": "MANUAL",
      "ruleSet": {
        "appliedDisjunctively": false,
        "rules": [
          {
            "column": "TYPE",
            "relation": "EQUALS",
            "condition": "Cult Products"
          }
        ]
      },
      "products": {
        "nodes": [
          {
            "id": "gid://shopify/Product/632910392",
            "title": "IPod Nano - 8GB"
          },
          {
            "id": "gid://shopify/Product/921728736",
            "title": "IPod Touch 8GB"
          }
        ]
      }
    }
  }
  ```

* ### Try retrieving a non-existent collection

  #### Description

  Attempting to retrieve a collection that doesn't exist returns \`null\`. This demonstrates the expected behavior when querying for a non-existent collection ID.

  #### Query

  ```graphql
  query GetNonExistentCollection($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Collection/-1"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query GetNonExistentCollection($id: ID!) { collection(id: $id) { id title handle } }",
   "variables": {
      "id": "gid://shopify/Collection/-1"
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query GetNonExistentCollection($id: ID!) {
      collection(id: $id) {
        id
        title
        handle
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Collection/-1"
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    query GetNonExistentCollection($id: ID!) {
      collection(id: $id) {
        id
        title
        handle
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Collection/-1"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `query GetNonExistentCollection($id: ID!) {
        collection(id: $id) {
          id
          title
          handle
        }
      }`,
      "variables": {
          "id": "gid://shopify/Collection/-1"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query GetNonExistentCollection($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/Collection/-1"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query GetNonExistentCollection($id: ID!) {
          collection(id: $id) {
            id
            title
            handle
          }
        }
      `,
      variables: {
          "id": "gid://shopify/Collection/-1"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "collection": null
  }
  ```
