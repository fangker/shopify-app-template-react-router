---
title: SellingPlan - GraphQL Admin
description: >-
  How a product can be sold and purchased through recurring billing or deferred

  purchase options. Defines the specific terms for subscriptions, pre-orders, or

  try-before-you-buy offers, including when to bill customers, when to fulfill

  orders, and what pricing adjustments to apply.


  Each selling plan has billing, delivery, and pricing policies that control the

  purchase experience. The plan's
  [`options`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.options)
  and
  [`category`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.category)

  help merchants organize and report on different selling strategies. Plans are

  grouped within a
  [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup)

  that associates them with

  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
  and
  [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)
  objects.


  > Caution:

  > Selling plans and associated records are automatically deleted 48 hours
  after

  a merchant uninstalls the

  [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) that

  created them. Back up these records if you need to restore them later.


  Learn more about [selling
  plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Selling​Plan

object

Requires `read_products` access scope.

How a product can be sold and purchased through recurring billing or deferred purchase options. Defines the specific terms for subscriptions, pre-orders, or try-before-you-buy offers, including when to bill customers, when to fulfill orders, and what pricing adjustments to apply.

Each selling plan has billing, delivery, and pricing policies that control the purchase experience. The plan's [`options`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.options) and [`category`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.category) help merchants organize and report on different selling strategies. Plans are grouped within a [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) that associates them with [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.

***

**Caution:** Selling plans and associated records are automatically deleted 48 hours after a merchant uninstalls the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/App">\<code>App\</code>\</a> that created them. Back up these records if you need to restore them later.

***

Learn more about [selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan).

## Fields

* billing​Policy

  [Selling​Plan​Billing​Policy!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanBillingPolicy)

  non-null

  A selling plan policy which describes the recurring billing details.

* category

  [Selling​Plan​Category](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanCategory)

  The category used to classify the selling plan for reporting purposes.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the selling plan was created.

* delivery​Policy

  [Selling​Plan​Delivery​Policy!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanDeliveryPolicy)

  non-null

  A selling plan policy which describes the delivery details.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Buyer facing string which describes the selling plan commitment.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* inventory​Policy

  [Selling​Plan​Inventory​Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanInventoryPolicy)

  When to reserve inventory for a selling plan.

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

  A customer-facing description of the selling plan.

  If your store supports multiple currencies, then don't include country-specific pricing content, such as "Buy monthly, get 10$ CAD off". This field won't be converted to reflect different currencies.

* options

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The values of all options available on the selling plan. Selling plans are grouped together in Liquid when they're created by the same app, and have the same `selling_plan_group.name` and `selling_plan_group.options` values.

* position

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Relative position of the selling plan for display. A lower position will be displayed before a higher position.

* pricing​Policies

  [\[Selling​Plan​Pricing​Policy!\]!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicy)

  non-null

  Selling plan pricing details.

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

* [SellingPlanConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanConnection#returns-nodes)
* [SellingPlanEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanEdge#field-SellingPlanEdge.fields.node)
* [SellingPlanGroup.sellingPlans](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup#field-SellingPlanGroup.fields.sellingPlans)

***

## Interfaces

* * [Has​Metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

    interface

  * [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

    interface

  * [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## SellingPlan Implements

### Implements

* [Has​Metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
* [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
* [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
