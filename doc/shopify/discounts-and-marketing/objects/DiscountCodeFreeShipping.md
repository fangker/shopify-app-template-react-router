---
title: DiscountCodeFreeShipping - GraphQL Admin
description: >-
  The `DiscountCodeFreeShipping` object lets you manage

  [free shipping
  discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping)

  that are applied on a cart and at checkout when a customer enters a code. Free
  shipping discounts are

  promotional deals that merchants offer to customers to waive shipping costs
  and encourage online purchases.


  The `DiscountCodeFreeShipping` object stores information about free shipping
  code discounts that apply to

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

  [`DiscountAutomaticFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping)

  object has similar functionality to the `DiscountCodeFreeShipping` object, but
  discounts are automatically applied,

  without the need for customers to enter a code.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Code​Free​Shipping

object

Requires Apps must have `read_discounts` access scope.

The `DiscountCodeFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are applied on a cart and at checkout when a customer enters a code. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

The `DiscountCodeFreeShipping` object stores information about free shipping code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

***

**Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Free\<wbr/>Shipping\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Free\<wbr/>Shipping\</span>\</code> object, but discounts are automatically applied, without the need for customers to enter a code.

***

## Fields

* applies​Once​Per​Customer

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a customer can only use the discount once.

* applies​On​One​Time​Purchase

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the discount applies on one-time purchases. A one-time purchase is a transaction where you pay a single time for a product, without any ongoing commitments or recurring charges.

* applies​On​Subscription

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the discount applies on subscription items. [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts) enable customers to purchase products on a recurring basis.

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

* destination​Selection

  [Discount​Shipping​Destination​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountShippingDestinationSelection)

  non-null

  The countries that qualify for the discount. You can define [a list of countries](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCountries) or specify [all countries](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCountryAll) to be eligible for the discount.

* discount​Classes

  [\[Discount​Class!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

  non-null

  The classes of the discount.

* ends​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the discount expires and is no longer available to customers. For discounts without a fixed expiration date, specify `null`.

* has​Timeline​Comment

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether there are [timeline comments](https://help.shopify.com/manual/discounts/managing-discount-codes#use-the-discount-timeline) associated with the discount.

* maximum​Shipping​Price

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The maximum shipping price amount accepted to qualify for the discount.

* minimum​Requirement

  [Discount​Minimum​Requirement](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountMinimumRequirement)

  The minimum subtotal or quantity of items that are required for the discount to be applied.

* recurring​Cycle​Limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts. For example, if you set this field to `3`, then the discount only applies to the first three billing cycles of a subscription. If you specify `0`, then the discount applies indefinitely.

* shareable​Urls

  [\[Discount​Shareable​Url!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountShareableUrl)

  non-null

  A list of URLs that the app can use to share the discount.

* short​Summary

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  An abbreviated version of the discount [`summary`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-summary) field.

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

  [Shipping​Discount​Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShippingDiscountClass)

  non-nullDeprecated

***

## Map

### Possible type in

* [Discount](https://shopify.dev/docs/api/admin-graphql/latest/unions/Discount)
* [Discount​Code](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode)
