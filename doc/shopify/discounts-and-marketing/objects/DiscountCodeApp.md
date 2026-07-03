---
title: DiscountCodeApp - GraphQL Admin
description: >-
  The `DiscountCodeApp` object stores information about code discounts

  that are managed by an app using

  [Shopify Functions](https://shopify.dev/docs/apps/build/functions).

  Use `DiscountCodeApp` when you need advanced, custom, or

  dynamic discount capabilities that aren't supported by

  [Shopify's native discount
  types](https://help.shopify.com/manual/discounts/discount-types).


  Learn more about creating

  [custom discount
  functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).


  > Note:

  > The
  [`DiscountAutomaticApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp)

  object has similar functionality to the `DiscountCodeApp` object, with the
  exception that `DiscountAutomaticApp`

  stores information about automatic discounts that are managed by an app using
  Shopify Functions.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Code​App

object

Requires Apps must have `read_discounts` access scope.

The `DiscountCodeApp` object stores information about code discounts that are managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use `DiscountCodeApp` when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

Learn more about creating [custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

***

**Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>App\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>App\</span>\</code> object, with the exception that \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>App\</span>\</code> stores information about automatic discounts that are managed by an app using Shopify Functions.

***

## Fields

* app​Discount​Type

  [App​Discount​Type!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountType)

  non-null

  The details about the app extension that's providing the [discount type](https://help.shopify.com/manual/discounts/discount-types). This information includes the app extension's name and [client ID](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets), [App Bridge configuration](https://shopify.dev/docs/api/app-bridge), [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations), [function ID](https://shopify.dev/docs/apps/build/functions/input-output/metafields-for-input-queries), and other metadata about the discount type, including the discount type's name and description.

* applies​Once​Per​Customer

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a customer can only use the discount once.

* applies​On​One​Time​Purchase

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the discount applies on regular one-time-purchase items.

* applies​On​Subscription

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the discount applies to subscriptions items.

* async​Usage​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of times that the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times. This value is updated asynchronously. As a result, it might be lower than the actual usage count until the asynchronous process is completed.

* codes

  [Discount​Redeem​Code​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeConnection)

  non-null

  A list codes that customers can use to redeem the discount.

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

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  * sort​Key

    [Discount​Code​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountCodeSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* codes​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of codes that a customer can use to redeem the discount.

* combines​With

  [Discount​Combines​With!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCombinesWith)

  non-null

  The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

* context

  [Discount​Context!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountContext)

  non-null

  The context defining which buyers can use the discount.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the discount was created.

* discount​Classes

  [\[Discount​Class!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

  non-null

  The classes of the discount.

* discount​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The [globally-unique ID](https://shopify.dev/docs/api/usage/gids) for the discount.

* ends​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the discount expires and is no longer available to customers. For discounts without a fixed expiration date, specify `null`.

* error​History

  [Functions​Error​History](https://shopify.dev/docs/api/admin-graphql/latest/objects/FunctionsErrorHistory)

  The [error history](https://shopify.dev/docs/apps/build/functions/monitoring-and-errors) for the latest version of the discount type that the app provides.

* has​Timeline​Comment

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether there are [timeline comments](https://help.shopify.com/manual/discounts/managing-discount-codes#use-the-discount-timeline) associated with the discount.

* recurring​Cycle​Limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts. For example, if you set this field to `3`, then the discount only applies to the first three billing cycles of a subscription. If you specify `0`, then the discount applies indefinitely.

* shareable​Urls

  [\[Discount​Shareable​Url!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountShareableUrl)

  non-null

  A list of URLs that the app can use to share the discount.

* starts​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the discount becomes active and is available to customers.

* status

  [Discount​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountStatus)

  non-null

  The status of the discount that describes its availability, expiration, or pending activation.

* tags

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A list of searchable keywords that are associated with the discount. For example, a merchant might apply the `loyalty` tag to discounts that are associated with their loyalty program.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The discount's name that displays to merchants in the Shopify admin and to customers.

* total​Sales

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The total sales from orders where the discount was used.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the discount was updated.

* usage​Limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The maximum number of times the discount can be redeemed. For unlimited usage, specify `null`.

### Deprecated fields

* customer​Selection

  [Discount​Customer​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerSelection)

  non-nullDeprecated

* discount​Class

  [Discount​Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

  non-nullDeprecated

***

## Map

### Possible type in

* [Discount](https://shopify.dev/docs/api/admin-graphql/latest/unions/Discount)
* [Discount​Code](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode)

***

## Mutations

* [discount​Code​App​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppCreate)

  mutation

  Creates a code discount. The discount type must be provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Functions can implement [order](https://shopify.dev/docs/api/functions/reference/order-discounts), [product](https://shopify.dev/docs/api/functions/reference/product-discounts), or [shipping](https://shopify.dev/docs/api/functions/reference/shipping-discounts) discount functions. Use this mutation with Shopify Functions when you need custom logic beyond [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  For example, use this mutation to create a code discount using an app's "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  **Note:** To create automatic discounts with custom logic, use \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppCreate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Automatic\<wbr/>App\<wbr/>Create\</span>\</code>\</a>.

  ***

  * code​App​Discount

    [Discount​Code​App​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput)

    required

    ### Arguments

    The input data used to create the discount.

  ***

* [discount​Code​App​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppUpdate)

  mutation

  Updates a code discount, where the discount type is provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use this mutation when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  ***

  **Note:** To update automatic discounts, use \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppUpdate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Automatic\<wbr/>App\<wbr/>Update\</span>\</code>\</a>.

  ***

  * code​App​Discount

    [Discount​Code​App​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput)

    required

    ### Arguments

    The input fields required to update the discount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the discount to update.

  ***

***

## DiscountCodeApp Mutations

### Mutated by

* [discount​Code​App​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppCreate)
* [discount​Code​App​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppUpdate)
