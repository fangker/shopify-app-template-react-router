---
title: SellingPlanGroup - GraphQL Admin
description: >-
  A selling method that defines how products can be sold through purchase
  options

  like subscriptions, pre-orders, or try-before-you-buy. Groups one or more
  [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan)

  objects that share the same selling method and options.


  The group provides buyer-facing labels and merchant-facing descriptions for
  the

  selling method. Associates

  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
  and
  [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  objects with selling plan groups to offer them through these purchase options.


  > Caution:

  > Selling plan groups and their associated records are automatically deleted
  48

  hours after a merchant uninstalls the

  [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) that

  created them. Back up these records if you need to restore them later.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Selling​Plan​Group

object

Requires `read_products` access scope.

A selling method that defines how products can be sold through purchase options like subscriptions, pre-orders, or try-before-you-buy. Groups one or more [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan) objects that share the same selling method and options.

The group provides buyer-facing labels and merchant-facing descriptions for the selling method. Associates [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects with selling plan groups to offer them through these purchase options.

***

**Caution:** Selling plan groups and their associated records are automatically deleted 48 hours after a merchant uninstalls the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/App">\<code>App\</code>\</a> that created them. Back up these records if you need to restore them later.

***

## Fields

* app​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The ID for app, exposed in Liquid and product JSON.

* applies​To​Product

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the given product is directly associated to the selling plan group.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product.

  ***

* applies​To​Product​Variant

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the given product variant is directly associated to the selling plan group.

  * product​Variant​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product.

  ***

* applies​To​Product​Variants

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether any of the product variants of the given product are associated to the selling plan group.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product.

  ***

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the selling plan group was created.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The merchant-facing description of the selling plan group.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* merchant​Code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The merchant-facing label of the selling plan group.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The buyer-facing label of the selling plan group.

* options

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The values of all options available on the selling plan group. Selling plans are grouped together in Liquid when they're created by the same app, and have the same `selling_plan_group.name` and `selling_plan_group.options` values.

* position

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The relative position of the selling plan group for display.

* products

  [Product​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection)

  non-null

  Products associated to the selling plan group.

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

  A count of products associated to the selling plan group.

* product​Variants

  [Product​Variant​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection)

  non-null

  Product variants associated to the selling plan group.

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

  * product​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Filters the product variants by a product ID.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* product​Variants​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  A count of product variants associated to the selling plan group.

  * product​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the product to scope the count to.

  ***

* selling​Plans

  [Selling​Plan​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanConnection)

  non-null

  Selling plans associated to the selling plan group.

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

* summary

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A summary of the policies associated to the selling plan group.

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

***

## Map

### Fields and connections with this object

* [DeliveryProfile.sellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.sellingPlanGroups)
* [Product.sellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.sellingPlanGroups)
* [ProductVariant.sellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.sellingPlanGroups)
* [SellingPlanGroupConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanGroupConnection#returns-nodes)
* [SellingPlanGroupEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupEdge#field-SellingPlanGroupEdge.fields.node)

***

## Queries

* [selling​Plan​Group](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingPlanGroup)

  query

  Returns a `SellingPlanGroup` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `SellingPlanGroup` to return.

  ***

* [selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingPlanGroups)

  query

  Retrieves a paginated list of [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects that belong to the app making the API call. Selling plan groups are selling methods like subscriptions, preorders, or other purchase options that merchants offer to customers.

  Each group has one or more [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan) objects that define specific billing and delivery schedules, pricing adjustments, and policies. Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingPlanGroups#arguments-query) argument to search by name or filter results by other criteria.

  Learn more about [building selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans).

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

      * app\_id

        id

      * category

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

      - Valid values:

        * `CURRENT` Default
        * `ALL`
        * `* (numeric app ID)`

        A comma-separated list of categories.

      - Valid values:
        * `SUBSCRIPTION`
        * `PRE_ORDER`
        * `TRY_BEFORE_YOU_BUY`
        * `OTHER`

    * delivery\_frequency

      string

    * * id

        id

      * name

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * percentage\_off

      float

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Selling​Plan​Group​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanGroupSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## SellingPlanGroup Queries

### Queried by

* [selling​Plan​Group](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingPlanGroup)
* [selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingPlanGroups)

***

## Mutations

* [selling​Plan​Group​Add​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProducts)

  mutation

  Adds multiple products to a selling plan group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the selling plan group.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the products to add.

  ***

* [selling​Plan​Group​Add​Product​Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProductVariants)

  mutation

  Adds multiple product variants to a selling plan group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the selling plan group.

  * product​Variant​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the product variants to add.

  ***

* [selling​Plan​Group​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate)

  mutation

  Creates a selling plan group that defines how products can be sold and purchased. A selling plan group represents a selling method such as "Subscribe and save", "Pre-order", or "Try before you buy" and contains one or more selling plans with specific billing, delivery, and pricing policies.

  Use the [`resources`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate#arguments-resources) argument to associate products or product variants with the group during creation. You can also add products later using [`sellingPlanGroupAddProducts`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProducts) or [`sellingPlanGroupAddProductVariants`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProductVariants).

  Learn more about [building selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan#step-1-create-a-selling-plan-group) or explore [examples of creating TBYB and other selling plan groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate?example=create-a-tbyb-selling-plan-group).

  * input

    [Selling​Plan​Group​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupInput)

    required

    ### Arguments

    The properties of the new Selling Plan Group.

  * resources

    [Selling​Plan​Group​Resource​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupResourceInput)

    The resources this Selling Plan Group should be applied to.

  ***

* [selling​Plan​Group​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupUpdate)

  mutation

  Update a Selling Plan Group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The Selling Plan Group to update.

  * input

    [Selling​Plan​Group​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupInput)

    required

    The properties of the Selling Plan Group to update.

  ***

***

## SellingPlanGroup Mutations

### Mutated by

* [selling​Plan​Group​Add​Product​Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProductVariants)
* [selling​Plan​Group​Add​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProducts)
* [selling​Plan​Group​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate)
* [selling​Plan​Group​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupUpdate)

***

## Interfaces

* * [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## SellingPlanGroup Implements

### Implements

* [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
