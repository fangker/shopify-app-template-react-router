---
title: DiscountAutomaticBxgy - GraphQL Admin
description: >-
  The `DiscountAutomaticBxgy` object lets you manage

  [buy X get Y discounts
  (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)

  that are automatically applied on a cart and at checkout. BXGY discounts
  incentivize customers by offering

  them additional items at a discounted price or for free when they purchase a
  specified quantity of items.


  The `DiscountAutomaticBxgy` object stores information about automatic BXGY
  discounts that apply to

  specific [products and
  variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts),

  [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections),

  or [all items in a
  cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).


  Learn more about working with [Shopify's discount
  model](https://shopify.dev/docs/apps/build/discounts),

  including limitations and considerations.


  > Note:

  > The
  [`DiscountCodeBxgy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy)

  object has similar functionality to the `DiscountAutomaticBxgy` object, but
  customers need to enter a code to

  receive a discount.

  >

  > API versions prior to `2025-10` only return automatic discounts with
  `context`

  set to `all`, discounts with other values are filtered out.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Automatic​Bxgy

object

Requires Apps must have `read_discounts` access scope.

The `DiscountAutomaticBxgy` object lets you manage [buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that are automatically applied on a cart and at checkout. BXGY discounts incentivize customers by offering them additional items at a discounted price or for free when they purchase a specified quantity of items.

The `DiscountAutomaticBxgy` object stores information about automatic BXGY discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

***

**Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Bxgy\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Bxgy\</span>\</code> object, but customers need to enter a code to receive a discount.\</p> \<p>API versions prior to \<code>2025-10\</code> only return automatic discounts with \<code>context\</code> set to \<code>all\</code>, discounts with other values are filtered out.

***

## Fields

* async​Usage​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of times that the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times. This value is updated asynchronously. As a result, it might be lower than the actual usage count until the asynchronous process is completed.

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

* customer​Buys

  [Discount​Customer​Buys!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerBuys)

  non-null

  The items eligible for the discount and the required quantity of each to receive the discount.

* customer​Gets

  [Discount​Customer​Gets!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerGets)

  non-null

  The items in the order that qualify for the discount, their quantities, and the total value of the discount.

* discount​Classes

  [\[Discount​Class!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

  non-null

  The classes of the discount.

* ends​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the discount expires and is no longer available to customers. For discounts without a fixed expiration date, specify `null`.

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

* starts​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the discount becomes active and is available to customers.

* status

  [Discount​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountStatus)

  non-null

  The status of the discount that describes its availability, expiration, or pending activation.

* summary

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A detailed explanation of what the discount is, who can use it, when and where it applies, and any associated rules or limitations.

* tags

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A list of searchable keywords that are associated with the discount. For example, a merchant might apply the `loyalty` tag to discounts that are associated with their loyalty program.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The discount's name that displays to merchants in the Shopify admin and to customers.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the discount was updated.

* uses​Per​Order​Limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The maximum number of times that the discount can be applied to an order.

### Deprecated fields

* discount​Class

  [Merchandise​Discount​Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MerchandiseDiscountClass)

  non-nullDeprecated

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-nullDeprecated

* usage​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-nullDeprecated

***

## Map

### Possible type in

* [Discount](https://shopify.dev/docs/api/admin-graphql/latest/unions/Discount)
* [Discount​Automatic](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountAutomatic)

***

## Interfaces

* * [Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## DiscountAutomaticBxgy Implements

### Implements

* [Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
