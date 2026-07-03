---
title: DiscountCodeNode - GraphQL Admin
description: >-
  The `DiscountCodeNode` object enables you to manage [code
  discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes)

  that are applied when customers enter a code at checkout. For example, you can

  offer discounts where customers have to enter a code to redeem an amount off

  discount on products, variants, or collections in a store. Or, you can offer

  discounts where customers have to enter a code to get free shipping. Merchants

  can create and share discount codes individually with customers.


  Learn more about working with [Shopify's discount
  model](https://shopify.dev/docs/apps/build/discounts),

  including related queries, mutations, limitations, and considerations.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Code​Node

object

Requires Apps must have `read_discounts` access scope.

The `DiscountCodeNode` object enables you to manage [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) that are applied when customers enter a code at checkout. For example, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store. Or, you can offer discounts where customers have to enter a code to get free shipping. Merchants can create and share discount codes individually with customers.

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

## Fields

* code​Discount

  [Discount​Code!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode)

  non-null

  The underlying code discount object.

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

***

## Map

### Fields and connections with this object

* [DiscountCodeNodeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountCodeNodeConnection#returns-nodes)
* [DiscountCodeNodeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNodeEdge#field-DiscountCodeNodeEdge.fields.node)
* [DiscountRedeemCodeBulkCreation.discountCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreation#field-DiscountRedeemCodeBulkCreation.fields.discountCode)

### Possible type in

* [Metafield​Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

***

## Queries

* [code​Discount​Node​By​Code](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodeByCode)

  query

  Retrieves a [code discount](https://help.shopify.com/manual/discounts/discount-types#discount-codes) by its discount code. The search is case-insensitive, enabling you to find discounts regardless of how customers enter the code.

  Returns a [`DiscountCodeNode`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode) that contains the underlying discount details, which could be a basic [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount), a ["Buy X Get Y" (BXGY) discount](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y), a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping), or an [app-provided discount](https://help.shopify.com/manual/discounts/discount-types/discounts-with-apps).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts).

  * code

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The case-insensitive code of the `DiscountCodeNode` to return.

  ***

### Deprecated queries

* [code​Discount​Node](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNode)

  query

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `DiscountCodeNode` to return.

  ***

* [code​Discount​Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes)

  query

  Deprecated

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

      * combines\_with

        string

      * combines\_with.product\_discounts\_with\_tags\_on\_same\_cart\_line

        string

      * created\_at

        time

      * discount\_type

        string

      * ends\_at

        time

      * id

        id

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

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

      - Valid values:

        * `order_discounts`
        * `product_discounts`
        * `shipping_discounts`

        Example:

        * `combines_with:product_discounts`

        Filter by a combines with tag applied to discounts on the same cart line. Supports multiple tags separated by commas (e.g., combines\_with.product\_discounts\_with\_tags\_on\_same\_cart\_line:priority,exclusive).

      - Example:

        * `combines_with.product_discounts_with_tags_on_same_cart_line:priority`
        * `combines_with.product_discounts_with_tags_on_same_cart_line:priority,exclusive`

        Filter by the date and time when the discount was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<='2024'`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

      - Valid values:

        * `app`
        * `bogo`
        * `fixed_amount`
        * `free_shipping`
        * `percentage`

        Example:

        * `discount_type:fixed_amount`

        Filter by the date and time when the discount expires and is no longer available for customer use.

      - Example:

        * `ends_at:>'2020-10-21T23:39:20Z'`
        * `ends_at:<now`
        * `ends_at:<='2024'`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the date and time, in the shop's timezone, when the discount becomes active and is available for customer use.

      - Example:

        * `starts_at:>'2020-10-21T23:39:20Z'`
        * `starts_at:<now`
        * `starts_at:<='2024'`

        Filter by the status of the discount.

      - Valid values:

        * `active`
        * `expired`
        * `scheduled`

        Example:

        * `status:scheduled`

        Filter by a tag applied to the discount.

      - Example:

        * `tag:loyalty`
        * `tag:clearance`

        Filter by the number of times the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times.\
        \
        This value is updated asynchronously. As a result, it might be different than the actual usage count.

      - Example:

        * `times_used:0`
        * `times_used:>150`
        * `times_used:>=200`

        Filter by the discount name that displays to customers.

      - Example:

        * `title:Black Friday Sale`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

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

        Filter by the date and time when the discount was last updated.

        Example:

        * `updated_at:>'2020-10-21T23:39:20Z'`
        * `updated_at:<now`
        * `updated_at:<='2024'`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  * sort​Key

    [Code​Discount​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CodeDiscountSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## DiscountCodeNode Queries

### Queried by

* [code​Discount​Node​By​Code](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodeByCode)

***

## Mutations

* [discount​Code​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeActivate)

  mutation

  Activates a previously created code discount, making it available for customers to use during checkout. This mutation transitions inactive discount codes into an active state where they can be applied to orders.

  For example, after creating a "SUMMER20" discount code but leaving it inactive during setup, merchants can activate it when ready to launch their summer promotion campaign.

  Use `DiscountCodeActivate` to:

  * Launch scheduled promotional campaigns
  * Reactivate previously paused discount codes
  * Enable discount codes after configuration changes
  * Control the timing of discount availability

  The mutation returns the updated discount code node with its new active status and handles any validation errors that might prevent activation, such as conflicting discount rules or invalid date ranges.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the code discount to activate.

  ***

* [discount​Code​Basic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate)

  mutation

  Creates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

  ***

  **Note:** To create discounts that are automatically applied on a cart and at checkout, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicCreate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Automatic\<wbr/>Basic\<wbr/>Create\</span>\</code>\</a> mutation.

  ***

  * basic​Code​Discount

    [Discount​Code​Basic​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput)

    required

    ### Arguments

    The input data used to create the discount code.

  ***

* [discount​Code​Basic​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate)

  mutation

  Updates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

  ***

  **Note:** To update discounts that are automatically applied on a cart and at checkout, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Automatic\<wbr/>Basic\<wbr/>Update\</span>\</code>\</a> mutation.

  ***

  * basic​Code​Discount

    [Discount​Code​Basic​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput)

    required

    ### Arguments

    The input data used to update the discount code.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the discount code to update.

  ***

* [discount​Code​Bxgy​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate)

  mutation

  Creates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied on a cart and at checkout when a customer enters a code.

  ***

  **Note:** To create discounts that are automatically applied on a cart and at checkout, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Automatic\<wbr/>Bxgy\<wbr/>Create\</span>\</code>\</a> mutation.

  ***

  * bxgy​Code​Discount

    [Discount​Code​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput)

    required

    ### Arguments

    The input data used to create the BXGY code discount.

  ***

* [discount​Code​Bxgy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyUpdate)

  mutation

  Updates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied on a cart and at checkout when a customer enters a code.

  ***

  **Note:** To update discounts that are automatically applied on a cart and at checkout, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Automatic\<wbr/>Bxgy\<wbr/>Update\</span>\</code>\</a> mutation.

  ***

  * bxgy​Code​Discount

    [Discount​Code​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput)

    required

    ### Arguments

    The input data used to update the BXGY code discount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the BXGY code discount to update.

  ***

* [discount​Code​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeDeactivate)

  mutation

  Temporarily suspends a code discount without permanently removing it from the store. Deactivation allows merchants to pause promotional campaigns while preserving the discount configuration for potential future use.

  For example, when a flash sale needs to end immediately or a discount code requires temporary suspension due to inventory issues, merchants can deactivate it to stop new redemptions while keeping the discount structure intact.

  Use `DiscountCodeDeactivate` to:

  * Pause active promotional campaigns timely
  * Temporarily suspend problematic discount codes
  * Control discount availability during inventory shortages
  * Maintain discount history while stopping usage

  Deactivated discounts remain in the system and can be reactivated later, unlike deletion which persistently removes the code. Customers attempting to use deactivated codes will receive appropriate error messages.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the code discount to deactivate.

  ***

* [discount​Code​Free​Shipping​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingCreate)

  mutation

  Creates an [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.

  ***

  **Note:** To create discounts that are automatically applied on a cart and at checkout, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Automatic\<wbr/>Free\<wbr/>Shipping\<wbr/>Create\</span>\</code>\</a> mutation.

  ***

  * free​Shipping​Code​Discount

    [Discount​Code​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput)

    required

    ### Arguments

    The input data used to create the discount code.

  ***

* [discount​Code​Free​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingUpdate)

  mutation

  Updates a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.

  ***

  **Note:** To update a free shipping discount that\&#39;s automatically applied on a cart and at checkout, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingUpdate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Automatic\<wbr/>Free\<wbr/>Shipping\<wbr/>Update\</span>\</code>\</a> mutation.

  ***

  * free​Shipping​Code​Discount

    [Discount​Code​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput)

    required

    ### Arguments

    The input data used to update the discount code.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the discount code to update.

  ***

***

## DiscountCodeNode Mutations

### Mutated by

* [discount​Code​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeActivate)
* [discount​Code​Basic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate)
* [discount​Code​Basic​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate)
* [discount​Code​Bxgy​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate)
* [discount​Code​Bxgy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyUpdate)
* [discount​Code​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeDeactivate)
* [discount​Code​Free​Shipping​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingCreate)
* [discount​Code​Free​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingUpdate)

***

## Interfaces

* * [Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

    interface

  * [Has​Metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

    interface

  * [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## DiscountCodeNode Implements

### Implements

* [Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
* [Has​Metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
* [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
