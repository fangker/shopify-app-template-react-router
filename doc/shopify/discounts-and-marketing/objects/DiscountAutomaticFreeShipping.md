---
title: DiscountAutomaticFreeShipping - GraphQL Admin
description: >-
  The `DiscountAutomaticFreeShipping` object lets you manage

  [free shipping
  discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping)

  that are automatically applied on a cart and at checkout. Free shipping
  discounts are promotional deals that

  merchants offer to customers to waive shipping costs and encourage online
  purchases.


  The `DiscountAutomaticFreeShipping` object stores information about automatic
  free shipping discounts that apply to

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
  [`DiscountCodeFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping)

  object has similar functionality to the `DiscountAutomaticFreeShipping`
  object, but customers need to enter a code to

  receive a discount.

  >

  > API versions prior to `2025-10` only return automatic discounts with
  `context`

  set to `all`, discounts with other values are filtered out.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Automatic​Free​Shipping

object

Requires Apps must have `read_discounts` access scope.

The `DiscountAutomaticFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are automatically applied on a cart and at checkout. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

The `DiscountAutomaticFreeShipping` object stores information about automatic free shipping discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

***

**Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Free\<wbr/>Shipping\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Free\<wbr/>Shipping\</span>\</code> object, but customers need to enter a code to receive a discount.\</p> \<p>API versions prior to \<code>2025-10\</code> only return automatic discounts with \<code>context\</code> set to \<code>all\</code>, discounts with other values are filtered out.

***

## Fields

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

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts. For example, if you set this field to `3`, then the discount only applies to the first three billing cycles of a subscription. If you specify `0`, then the discount applies indefinitely.

* short​Summary

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  An abbreviated version of the discount [`summary`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping#field-summary) field.

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

* discount​Class

  [Shipping​Discount​Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShippingDiscountClass)

  non-nullDeprecated

***

## Map

### Possible type in

* [Discount](https://shopify.dev/docs/api/admin-graphql/latest/unions/Discount)
* [Discount​Automatic](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountAutomatic)
