---
title: DiscountAutomaticApp - GraphQL Admin
description: >-
  The `DiscountAutomaticApp` object stores information about automatic discounts

  that are managed by an app using

  [Shopify Functions](https://shopify.dev/docs/apps/build/functions).

  Use `DiscountAutomaticApp`when you need advanced, custom, or

  dynamic discount capabilities that aren't supported by

  [Shopify's native discount
  types](https://help.shopify.com/manual/discounts/discount-types).


  Learn more about creating

  [custom discount
  functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).


  > Note:

  > The
  [`DiscountCodeApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp)

  object has similar functionality to the `DiscountAutomaticApp` object, with
  the exception that `DiscountCodeApp`

  stores information about discount codes that are managed by an app using
  Shopify Functions.

  >

  > API versions prior to `2025-10` only return automatic discounts with
  `context`

  set to `all`, discounts with other values are filtered out.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Automatic​App

object

Requires `read_discounts` access scope.

The `DiscountAutomaticApp` object stores information about automatic discounts that are managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use `DiscountAutomaticApp`when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

Learn more about creating [custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

***

**Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>App\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>App\</span>\</code> object, with the exception that \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>App\</span>\</code> stores information about discount codes that are managed by an app using Shopify Functions.\</p> \<p>API versions prior to \<code>2025-10\</code> only return automatic discounts with \<code>context\</code> set to \<code>all\</code>, discounts with other values are filtered out.

***

## Fields

* app​Discount​Type

  [App​Discount​Type!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountType)

  non-null

  The details about the app extension that's providing the [discount type](https://help.shopify.com/manual/discounts/discount-types). This information includes the app extension's name and [client ID](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets), [App Bridge configuration](https://shopify.dev/docs/api/app-bridge), [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations), [function ID](https://shopify.dev/docs/apps/build/functions/input-output/metafields-for-input-queries), and other metadata about the discount type, including the discount type's name and description.

* applies​On​One​Time​Purchase

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the discount applies on one-time purchases.

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

* recurring​Cycle​Limit

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts. For example, if you set this field to `3`, then the discount only applies to the first three billing cycles of a subscription. If you specify `0`, then the discount applies indefinitely.

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

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the discount was updated.

* discount​Class

  [Discount​Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

  non-nullDeprecated

***

## Map

### Possible type in

* [Discount](https://shopify.dev/docs/api/admin-graphql/latest/unions/Discount)
* [Discount​Automatic](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountAutomatic)

***

## Mutations

* [discount​Automatic​App​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppCreate)

  mutation

  Creates an automatic discount that's managed by an app. Use this mutation with [Shopify Functions](https://shopify.dev/docs/apps/build/functions) when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  For example, use this mutation to create an automatic discount using an app's "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  **Note:** To create code discounts with custom logic, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppCreate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Code\<wbr/>App\<wbr/>Create\</span>\</code>\</a> mutation.

  ***

  * automatic​App​Discount

    [Discount​Automatic​App​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput)

    required

    ### Arguments

    The input data used to create the automatic discount.

  ***

* [discount​Automatic​App​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppUpdate)

  mutation

  Updates an existing automatic discount that's managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use this mutation when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  For example, use this mutation to update a new "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  **Note:** To update code discounts with custom logic, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppUpdate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Code\<wbr/>App\<wbr/>Update\</span>\</code>\</a> mutation instead.

  ***

  * automatic​App​Discount

    [Discount​Automatic​App​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput)

    required

    ### Arguments

    The input fields required to update the automatic discount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the automatic discount to update.

  ***

***

## DiscountAutomaticApp Mutations

### Mutated by

* [discount​Automatic​App​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppCreate)
* [discount​Automatic​App​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppUpdate)
