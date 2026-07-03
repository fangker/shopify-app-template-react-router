---
title: Count - GraphQL Admin
description: >-
  A numeric count with precision information indicating whether the count is
  exact or an estimate.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Count'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Count.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Count

object

A numeric count with precision information indicating whether the count is exact or an estimate.

## Fields

* count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The count of elements.

* precision

  [Count​Precision!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountPrecision)

  non-null

  The count's precision, or the exactness of the value.

***

## Map

### Fields with this object

* [Article.commentsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.commentsCount)
* [Blog.articlesCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.articlesCount)
* [Channel.marketsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.marketsCount)
* [Channel.productsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.productsCount)
* [ChannelsCondition.channelsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelsCondition#field-ChannelsCondition.fields.channelsCount)
* [Collection.availablePublicationsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.availablePublicationsCount)
* [Collection.productsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.productsCount)
* [Collection.resourcePublicationsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.resourcePublicationsCount)
* [Company.contactsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.contactsCount)
* [Company.locationsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.locationsCount)
* [Company.ordersCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.ordersCount)
* [CompanyLocation.catalogsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.catalogsCount)
* [CompanyLocation.ordersCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.ordersCount)
* [CompanyLocationCatalog.companyLocationsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationCatalog#field-CompanyLocationCatalog.fields.companyLocationsCount)
* [CustomerJourneySummary.momentsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourneySummary#field-CustomerJourneySummary.fields.momentsCount)
* [DeliveryLocationGroup.locationsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroup#field-DeliveryLocationGroup.fields.locationsCount)
* [DeliveryProfile.productVariantsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.productVariantsCount)
* [DeliveryRateGroupConditions.collectionsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryRateGroupConditions#field-DeliveryRateGroupConditions.fields.collectionsCount)
* [DeliveryRateGroupConditions.originLocationsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryRateGroupConditions#field-DeliveryRateGroupConditions.fields.originLocationsCount)
* [DiscountCodeApp.codesCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.codesCount)
* [DiscountCodeBasic.codesCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.codesCount)
* [DiscountCodeBxgy.codesCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.codesCount)
* [DiscountCodeFreeShipping.codesCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.codesCount)
* [FulfillmentOrderLocationForMove.availableLineItemsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMove#field-FulfillmentOrderLocationForMove.fields.availableLineItemsCount)
* [FulfillmentOrderLocationForMove.unavailableLineItemsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMove#field-FulfillmentOrderLocationForMove.fields.unavailableLineItemsCount)
* [InventoryItem.locationsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.locationsCount)
* [InventoryShipment.lineItemsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment#field-InventoryShipment.fields.lineItemsCount)
* [InventoryTransfer.lineItemsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.lineItemsCount)
* [Market.catalogsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.catalogsCount)
* [Market.discountsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.discountsCount)

***

## Queries

* [abandoned​Checkouts​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedCheckoutsCount)

  query

  Returns the count of abandoned checkouts for the given shop. Limited to a maximum of 10000 by default.

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

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        The date and time (in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the abandoned cart was created.

    * email\_state

      string

      Filter by `abandoned_email_state` value. Possible values: `sent`, `not_sent`, `scheduled` and `suppressed`.

    * * id

        id

      * recovery\_state

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Possible values: `recovered` and `not_recovered`.

    * status

      string

      Possible values: `open` and `closed`.

    * updated\_at

      time

      The date and time (in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the abandoned cart was last updated.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

  ***

* [blogs​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogsCount)

  query

  Count of blogs. Limited to a maximum of 10000 by default.

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

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * handle

      string

    * * id

        id

      * title

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * updated\_at

      time

  ***

* [catalogs​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogsCount)

  query

  The count of catalogs belonging to the shop. Limited to a maximum of 10000 by default.

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

      * app\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * company\_id

      id

    * company\_location\_id

      id

    * * id

        id

      * managed\_country\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * market\_id

      id

    * status

      string

    * title

      string

  * type

    [Catalog​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogType)

    Default:null

    The type of the catalogs to be returned.

  ***

* [collections​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionsCount)

  query

  Count of collections. Limited to a maximum of 10000 by default.

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

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

  ***

* [companies​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/companiesCount)

  query

  The number of companies for a shop. Limited to a maximum of 10000 by default.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    ### Arguments

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* [customers​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersCount)

  query

  The number of customers. Limited to a maximum of 10000 by default.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    ### Arguments

    The upper bound on count value before returning a result. Use `null` to have no limit.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * * id

        id

      * updated\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

* [discount​Codes​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountCodesCount)

  query

  The total number of discount codes for the shop. Limited to a maximum of 10000 by default.

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

      * id

        id

      * times\_used

        integer

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

* [discount​Nodes​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNodesCount)

  query

  The total number of discounts for the shop. Limited to a maximum of 10000 by default.

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

      * code

        string

      * combines\_with

        string

      * combines\_with.product\_discounts\_with\_tags\_on\_same\_cart\_line

        string

      * context

        string

      * created\_at

        time

      * customer\_ids

        string

      * discount\_class

        string

      * discount\_type

        string

      * ends\_at

        time

      * id

        id

      * market\_ids

        string

      * method

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the discount code. Not supported for bulk discounts.

      - Example:

        * `code:WELCOME10`

        Filter by the [Shopify Functions discount classes](https://shopify.dev/docs/apps/build/discounts#discount-classes) that the [discount type](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-discount_type) can combine with. Supports multiple values separated by commas (e.g., combines\_with:product\_discounts,order\_discounts).

      - Valid values:

        * `order_discounts`
        * `product_discounts`
        * `shipping_discounts`

        Example:

        * `combines_with:product_discounts`
        * `combines_with:product_discounts,order_discounts`

        Filter by a combines with tag applied to discounts on the same cart line. Supports multiple tags separated by commas (e.g., combines\_with.product\_discounts\_with\_tags\_on\_same\_cart\_line:priority,exclusive).

      - Example:

        * `combines_with.product_discounts_with_tags_on_same_cart_line:priority`
        * `combines_with.product_discounts_with_tags_on_same_cart_line:priority,exclusive`

        Filter by the context type. Supports multiple values separated by commas (e.g., context:all,market). When multiple values are provided, results include discounts that match any of them.

      - Valid values:

        * `all`
        * `customer`
        * `segment`
        * `market`

        Example:

        * `context:segment`
        * `context:all,market`

        Filter by the date and time, in the shop's timezone, when the discount was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<='2024'`

        Filter by specific customer IDs that are eligible for the discount.

      - Example:

        * `customer_ids:123456789`
        * `customer_ids:123,456`

        Filter by the [discount class](https://shopify.dev/docs/apps/build/discounts#discount-classes). Supports multiple classes separated by commas (e.g., discount\_class:product,order).

      - Valid values:

        * `order`
        * `product`
        * `shipping`

        Example:

        * `discount_class:product`
        * `discount_class:product,order`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types). Supports multiple types separated by commas (e.g., discount\_type:percentage,fixed\_amount).

      - Valid values:

        * `app`
        * `bogo`
        * `fixed_amount`
        * `free_shipping`
        * `percentage`

        Example:

        * `discount_type:fixed_amount`
        * `discount_type:percentage,fixed_amount`

        Filter by the date and time, in the shop's timezone, when the discount ends.

      - Example:

        * `ends_at:>'2020-10-21T23:39:20Z'`
        * `ends_at:<now`
        * `ends_at:<='2024'`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by specific market IDs that are eligible for the discount. Supports multiple IDs separated by commas (e.g., market\_ids:123,456).

      - Example:

        * `market_ids:123456789`
        * `market_ids:123,456`

        Filter by the [discount method](https://shopify.dev/docs/apps/build/discounts#discount-methods). Supports multiple methods separated by commas (e.g., method:code,automatic).

    * \- \`automatic\`\<br/> - \`code\`

      * `method:code`\
        \- `method:code,automatic`

    * * segment\_ids

        string

      * starts\_at

        time

      * status

        string

      * tag

        string

      * times\_used

        integer

      * title

        string

      * type

        string

      * updated\_at

        time

      - Filter by specific segment IDs that are eligible for the discount. Supports multiple IDs separated by commas (e.g., segment\_ids:123,456).

      - Example:

        * `segment_ids:123456789`
        * `segment_ids:123,456`

        Filter by the date and time, in the shop's timezone, when the discount becomes active and is available for customer use.

      - Example:

        * `starts_at:>'2020-10-21T23:39:20Z'`
        * `starts_at:<now`
        * `starts_at:<='2024'`

        Filter by the status of the discount. Supports multiple statuses separated by commas (e.g., status:active,scheduled).

      - Valid values:

        * `active`
        * `expired`
        * `scheduled`

        Example:

        * `status:scheduled`
        * `status:active,scheduled`

        Filter by a tag applied to the discount. Supports multiple tags separated by commas (e.g., tag:loyalty,clearance).

      - Example:

        * `tag:loyalty`
        * `tag:loyalty,clearance`

        Filter by the number of times the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times.\
        \
        This value is updated asynchronously. As a result, it might be different than the actual usage count.

      - Example:

        * `times_used:0`
        * `times_used:>150`
        * `times_used:>=200`

        Filter by the discount name that displays to merchants in the Shopify admin and to customers.

      - Example:

        * `title:Black Friday Sale`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types). Supports multiple types separated by commas (e.g., type:percentage,fixed\_amount).

      - Valid values:

        * `all`
        * `all_with_app`
        * `app`
        * `bxgy`
        * `fixed_amount`
        * `free_shipping`
        * `percentage`

        Example:

        * `type:percentage`
        * `type:percentage,fixed_amount`

        Filter by the date and time, in the shop's timezone, when the discount was last updated.

        Example:

        * `updated_at:>'2020-10-21T23:39:20Z'`
        * `updated_at:<now`
        * `updated_at:<='2024'`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

  ***

* [draft​Orders​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrdersCount)

  query

  Returns the number of draft orders that match the query. Limited to a maximum of 10000 by default.

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

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * customer\_id

      id

    * * id

        id

      * ids

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * source

      string

    * status

      string

    * tag

      string

    * updated\_at

      time

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

  ***

* [events​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/eventsCount)

  query

  Count of events. Limited to a maximum of 10000.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

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

  ***

* [gift​Cards​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCardsCount)

  query

  Returns the total count of gift cards that have been issued by the shop. Use this for dashboard summaries or to understand the scale of a merchant's gift card program. The count includes all gift cards regardless of status (active, disabled, or fully redeemed). Limited to a maximum of 10000 by default.

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

      * balance\_status

        string

      * created\_at

        time

      * customer\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document, including gift card codes.

      - Example:
        * `query=a5bh6h64b329j4k7`
        * `query=Bob Norman`

      - Valid values:
        * `full`
        * `partial`
        * `empty`
        * `full_or_partial`
        Example:
        * `balance_status:full`

      - Example:
        * `created_at:>=2020-01-01T12:00:00Z`

    * * expires\_on

        date

      * id

        id

      * initial\_value

        string

      * recipient\_id

        id

      -

      - Example:

        * `expires_on:>=2020-01-01`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

      - Example:
        * `initial_value:>=100`

    * * source

        string

      * status

        string

      -
      - Valid values:
        * `manual`
        * `purchased`
        * `api_client`
        Example:
        * `source:manual`
        Valid values:
        * `disabled`
        * `enabled`
        * `expired`
        * `expiring`
        Example:
        * `status:disabled OR status:expired`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

  ***

* [locations​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsCount)

  query

  Returns the count of locations for the given shop. Limited to a maximum of 10000 by default.

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

      * active

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * address1

      string

    * address2

      string

    * city

      string

    * country

      string

    * created\_at

      time

    * geolocated

      boolean

    * * id

        id

      * legacy

        boolean

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * location\_id

      id

    * name

      string

    * * pickup\_in\_store

        string

      * province

        string

      -
      - Valid values:
        * `enabled`
        * `disabled`

    * zip

      string

  ***

* [orders​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/ordersCount)

  query

  Returns the number of [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) in the shop. You can filter orders using [search syntax](https://shopify.dev/docs/api/usage/search-syntax) or a [`SavedSearch`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch), and set a maximum count limit to control query performance.

  Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/ordersCount#arguments-query) argument to filter the count by criteria like order status, financial state, or fulfillment status. The response includes both the count value and its precision, indicating whether the count is exact or an estimate.

  ***

  **Note:** The count is limited to 10,000 orders by default. Use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/queries/ordersCount#arguments-limit">\<code>limit\</code>\</a> argument to adjust this value, or pass \<code>null\</code> for no limit. Limited to a maximum of 10000 by default.

  ***

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

      * cart\_token

        string

      * channel

        string

      * channel\_id

        id

      * chargeback\_status

        string

      * checkout\_token

        string

      * confirmation\_number

        string

      * created\_at

        time

      * credit\_card\_last4

        string

      * current\_total\_price

        float

      * customer\_id

        id

      * delivery\_method

        string

      * discount\_code

        string

      * email

        string

      * financial\_status

        string

      * fraud\_protection\_level

        string

      * fulfillment\_location\_id

        id

      * fulfillment\_status

        string

      * \- \`fulfillment\_status:fulfilled\`

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the cart token's unique value to track abandoned cart conversions or troubleshoot checkout issues. The token references the cart that's associated with an order.

      - Example:

        * `cart_token:abc123`

        Filter by the order attribution [`handle`](https://shopify.dev/api/admin-graphql/latest/objects/OrderAttribution#field-OrderAttribution.fields.handle) (`Order.attribution.handle`) field. The legacy channel information [`handle`](https://shopify.dev/api/admin-graphql/latest/objects/ChannelInformation#field-ChannelInformation.fields.channelDefinition.handle) (`ChannelInformation.channelDefinition.handle`) field is deprecated but remains supported during the deprecation period.

      - Example:

        * `channel:web`
        * `channel:web,pos`

        Filter by the channel [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Channel#field-Channel.fields.id) field.

      - Example:

        * `channel_id:123`

        Filter by the order's chargeback status. A chargeback occurs when a customer questions the legitimacy of a charge with their financial institution.

      - Valid values:

        * `accepted`
        * `charge_refunded`
        * `lost`
        * `needs_response`
        * `under_review`
        * `won`

        Example:

        * `chargeback_status:accepted`

        Filter by the checkout token's unique value to analyze conversion funnels or resolve payment issues. The checkout token's value references the checkout that's associated with an order.

      - Example:

        * `checkout_token:abc123`

        Filter by the randomly generated alpha-numeric identifier for an order that can be displayed to the customer instead of the sequential order name. This value isn't guaranteed to be unique.

      - Example:

        * `confirmation_number:ABC123`

        Filter by the date and time when the order was created in Shopify's system.

      - Example:

        * `created_at:2020-10-21T23:39:20Z`
        * `created_at:<now`
        * `created_at:<=2024`

        Filter by the last four digits of the payment card that was used to pay for the order. This filter matches only the last four digits of the card for heightened security.

      - Example:

        * `credit_card_last4:1234`

        Filter by the current total price of the order in the shop currency, including any returns/refunds/removals. This filter supports both exact values and ranges.

      - Example:

        * `current_total_price:10`
        * `current_total_price:>=5.00 current_total_price:<=20.99`

        Filter orders by the customer [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Customer#field-Customer.fields.id) field.

      - Example:

        * `customer_id:123`

        Filter by the delivery [`methodType`](https://shopify.dev/api/admin-graphql/2024-07/objects/DeliveryMethod#field-DeliveryMethod.fields.methodType) field.

      - Valid values:

        * `shipping`
        * `pick-up`
        * `retail`
        * `local`
        * `pickup-point`
        * `none`

        Example:

        * `delivery_method:shipping`

        Filter by the case-insensitive discount code that was applied to the order at checkout. Limited to the first discount code used on an order. Maximum characters: 255.

      - Example:

        * `discount_code:ABC123`

        Filter by the email address that's associated with the order to provide customer support or analyze purchasing patterns.

      - Example:

        * `email:example@shopify.com`

        Filter by the order [`displayFinancialStatus`](https://shopify.dev/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFinancialStatus) field.

      - Valid values:

        * `paid`
        * `pending`
        * `authorized`
        * `partially_paid`
        * `partially_refunded`
        * `refunded`
        * `voided`
        * `expired`

        Example:

        * `financial_status:authorized`

        Filter by the level of fraud protection that's applied to the order. Use this filter to manage risk or handle disputes.

      - Valid values:

        * `fully_protected`
        * `partially_protected`
        * `not_protected`
        * `pending`
        * `not_eligible`
        * `not_available`

        Example:

        * `fraud_protection_level:fully_protected`

        Filter by the fulfillment location [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.location.id) (`Fulfillment.location.id`) field.

      - Example:

        * `fulfillment_location_id:123`

        Filter by the [`displayFulfillmentStatus`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFulfillmentStatus) field to prioritize shipments or monitor order processing.

      - Valid values:
        * `unshipped`
        * `shipped`
        * `fulfilled`
        * `partial`
        * `scheduled`
        * `on_hold`
        * `unfulfilled`
        * `request_declined`

    * * gateway

        string

      * id

        id

      * location\_id

        id

      * metafields.{namespace}.{key}

        mixed

      - Filter by the [`paymentGatewayNames`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.paymentGatewayNames) field. Use this filter to find orders that were processed through specific payment providers like Shopify Payments, PayPal, or other custom payment gateways.

      - Example:

        * `gateway:shopify_payments`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the location [`id`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.id) that's associated with the order to view and manage orders for specific locations. For POS orders, locations must be defined in the Shopify admin under **Settings** > **Locations**. If no ID is provided, then the primary location of the shop is returned.

      - Example:

        * `location_id:123`

        Filters resources by metafield value. Format: `metafields.{namespace}.{key}:{value}`. Learn more about [querying by metafield value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

    * * `metafields.custom.on_sale:true`\
        \- `metafields.product.material:"gid://shopify/Metaobject/43458085"`

    * * name

        string

      * payment\_id

        string

      * payment\_provider\_id

        id

      * po\_number

        string

      * processed\_at

        time

      * reference\_location\_id

        id

      * return\_status

        string

      * risk\_level

        string

      * sales\_channel

        string

      * sku

        string

      * source\_identifier

        string

      * source\_name

        string

      * status

        string

      * subtotal\_line\_items\_quantity

        string

      * tag

        string

      * tag\_not

        string

      * test

        boolean

      * total\_weight

        string

      - Filter by the order [`name`](https://shopify.dev/api/admin-graphql/latest/objects/Order#field-name) field.

      - Example:

        * `name:1001-A`

        Filter by the payment ID that's associated with the order to reconcile financial records or troubleshoot payment issues.

      - Example:

        * `payment_id:abc123`

        Filter by the ID of the payment provider that's associated with the order to manage payment methods or troubleshoot transactions.

      - Example:

        * `payment_provider_id:123`

        Filter by the order [`poNumber`](https://shopify.dev/api/admin-graphql/latest/objects/order#field-Order.fields.poNumber) field.

      - Example:

        * `po_number:P01001`

        Filter by the order [`processedAt`](https://shopify.dev/api/admin-graphql/latest/objects/order#field-Order.fields.processedAt) field.

      - Example:

        * `processed_at:2021-01-01T00:00:00Z`

        Filter by the ID of a location that's associated with the order, such as locations from fulfillments, refunds, or the shop's primary location.

      - Example:

        * `reference_location_id:123`

        Filter by the order's [`returnStatus`](https://shopify.dev/api/admin-graphql/latest/objects/Order#field-Order.fields.returnStatus) to monitor returns processing and track which orders have active returns.

      - Valid values:

        * `return_requested`
        * `in_progress`
        * `inspection_complete`
        * `returned`
        * `return_failed`
        * `no_return`

        Example:

        * `return_status:in_progress`

        Filter by the order risk assessment [`riskLevel`](https://shopify.dev/api/admin-graphql/latest/objects/OrderRiskAssessment#field-OrderRiskAssessment.fields.riskLevel) field.

      - Valid values:

        * `high`
        * `medium`
        * `low`
        * `none`
        * `pending`

        Example:

        * `risk_level:high`

        Filter by the [sales channel](https://shopify.dev/docs/apps/build/sales-channels) where the order was made to analyze performance or manage fulfillment processes.

      - Example:

        * `sales_channel: some_sales_channel`

        Filter by the product variant [`sku`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

      - Example:

        * `sku:ABC123`

        Filter by the ID of the order placed on the originating platform, such as a unique POS or third-party identifier. This value doesn't correspond to the Shopify ID that's generated from a completed draft order.

      - Example:

        * `source_identifier:1234-12-1000`

        Filter by the platform where the order was placed to distinguish between web orders, POS sales, draft orders, or third-party channels. Use this filter to analyze sales performance across different ordering methods.

      - Example:

        * `source_name:web`
        * `source_name:shopify_draft_order`

        Filter by the order's status to manage workflows or analyze the order lifecycle.

      - Valid values:

        * `open`
        * `closed`
        * `cancelled`
        * `not_closed`

        Example:

        * `status:open`

        Filter by the total number of items across all line items in an order. This filter supports both exact values and ranges, and is useful for identifying bulk orders or analyzing purchase volume patterns.

      - Example:

        * `subtotal_line_items_quantity:10`
        * `subtotal_line_items_quantity:5..20`

        Filter objects by the `tag` field.

      - Example:

        * `tag:my_tag`

        Filter by objects that don’t have the specified tag.

      - Example:

        * `tag_not:my_tag`

        Filter by test orders. Test orders are made using the [Shopify Bogus Gateway](https://help.shopify.com/manual/checkout-settings/test-orders/payments-test-mode#bogus-gateway) or a payment provider with test mode enabled.

      - Example:

        * `test:true`

        Filter by the order weight. This filter supports both exact values and ranges, and is to be used to filter orders by the total weight of all items (excluding packaging). It takes a unit of measurement as a suffix. It accepts the following units: g, kg, lb, oz.

    * \- \`total\_weight:10.5kg\`\<br/> - \`total\_weight:>=5g total\_weight:<=20g\`\<br/> - \`total\_weight:.5 lb\`

    * updated\_at

      time

      Filter by the date and time when the order was last updated in Shopify's system.

      Example:

      * `updated_at:2020-10-21T23:39:20Z`
      * `updated_at:<now`
      * `updated_at:<=2024`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

  ***

* [pages​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/pagesCount)

  query

  Count of pages. Limited to a maximum of 10000 by default.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    ### Arguments

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* [pending​Orders​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/pendingOrdersCount)

  query

  The number of pendings orders. Limited to a maximum of 10000.

* [products​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/productsCount)

  query

  Count of products. Limited to a maximum of 10000 by default.

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

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

  ***

* [product​Variants​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVariantsCount)

  query

  Count of product variants. Limited to a maximum of 10000 by default.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    ### Arguments

    The upper bound on count value before returning a result. Use `null` to have no limit.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    No supported search fields.

  ***

* [publications​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/publicationsCount)

  query

  Count of publications. Limited to a maximum of 10000 by default.

  * catalog​Type

    [Catalog​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogType)

    ### Arguments

    Filter publications by catalog type.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* [published​Products​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/publishedProductsCount)

  query

  Returns a count of published products by publication ID. Limited to a maximum of 10000 by default.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    ### Arguments

    The maximum number of products to count.

  * publication​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the publication that the products are published to.

  ***

* [segments​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentsCount)

  query

  The number of segments for a shop. Limited to a maximum of 10000 by default.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    ### Arguments

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* [url​Redirects​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirectsCount)

  query

  Count of redirects. Limited to a maximum of 10000 by default.

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

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * * id

        id

      * path

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * target

      string

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

  ***

* [webhook​Subscriptions​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhookSubscriptionsCount)

  query

  The count of webhook subscriptions.

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe). Limited to a maximum of 10000 by default.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    ### Arguments

    The upper bound on count value before returning a result. Use `null` to have no limit.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * endpoint

      string

    * * id

        id

      * topic

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * updated\_at

      time

  ***

***

## Count Queries

### Queried by

* [abandoned​Checkouts​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedCheckoutsCount)
* [blogs​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogsCount)
* [catalogs​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogsCount)
* [collections​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionsCount)
* [companies​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/companiesCount)
* [customers​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersCount)
* [discount​Codes​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountCodesCount)
* [discount​Nodes​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNodesCount)
* [draft​Orders​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrdersCount)
* [events​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/eventsCount)
* [gift​Cards​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCardsCount)
* [locations​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsCount)
* [orders​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/ordersCount)
* [pages​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/pagesCount)
* [pending​Orders​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/pendingOrdersCount)
* [product​Variants​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVariantsCount)
* [products​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/productsCount)
* [publications​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/publicationsCount)
* [published​Products​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/publishedProductsCount)
* [segments​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentsCount)
* [url​Redirects​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirectsCount)
* [webhook​Subscriptions​Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhookSubscriptionsCount)
