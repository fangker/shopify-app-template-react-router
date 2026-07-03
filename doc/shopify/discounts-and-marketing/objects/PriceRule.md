---
title: PriceRule - GraphQL Admin
description: >-
  A set of conditions, including entitlements and prerequisites, that must be
  met for a discount code to apply.


  > Note:

  > Use the types and queries included our [discount
  tutorials](https://shopify.dev/docs/apps/selling-strategies/discounts/getting-started)

  instead. These will replace the GraphQL Admin API's
  [`PriceRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule)
  object and
  [`DiscountCode`](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode)

  union, and the REST Admin API's
  deprecated[`PriceRule`](https://shopify.dev/docs/api/admin-rest/unstable/resources/pricerule)
  resource.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Price​Rule

object

Requires `read_price_rules` access scope.

A set of conditions, including entitlements and prerequisites, that must be met for a discount code to apply.

***

**Note:** Use the types and queries included our \<a href="https://shopify.dev/docs/apps/selling-strategies/discounts/getting-started">discount tutorials\</a> instead. These will replace the GraphQL Admin API\&#39;s \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Price\<wbr/>Rule\</span>\</code>\</a> object and \<a href="https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\</span>\</code>\</a> union, and the REST Admin API\&#39;s deprecated\<a href="https://shopify.dev/docs/api/admin-rest/unstable/resources/pricerule">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Price\<wbr/>Rule\</span>\</code>\</a> resource.

***

## Fields

* allocation​Limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The maximum number of times that the price rule can be allocated onto an order.

* allocation​Method

  [Price​Rule​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleAllocationMethod)

  non-null

  The method by which the price rule's value is allocated to its entitled items.

* app

  [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  The application that created the price rule.

* combines​With

  [Discount​Combines​With!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCombinesWith)

  non-null

  The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the price rule was created.

* customer​Selection

  [Price​Rule​Customer​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleCustomerSelection)

  non-null

  The customers that can use this price rule.

* discount​Classes

  [\[Discount​Class!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

  non-null

  The classes of the discount.

* discount​Codes

  [Price​Rule​Discount​Code​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceRuleDiscountCodeConnection)

  non-null

  List of the price rule's discount codes.

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

* discount​Codes​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  How many discount codes associated with the price rule.

* ends​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the price rule ends. For open-ended price rules, use `null`.

* events

  [Event​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

  non-null

  The paginated list of events associated with the price rule.

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

* features

  [\[Price​Rule​Feature!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleFeature)

  non-null

  A list of the price rule's features.

* has​Timeline​Comment

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Indicates whether there are any timeline comments on the price rule.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* item​Entitlements

  [Price​Rule​Item​Entitlements!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements)

  non-null

  The items to which the price rule applies.

* item​Prerequisites

  [Price​Rule​Line​Item​Prerequisites!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites)

  non-null

  The items required for the price rule to be applicable.

* legacy​Resource​Id

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The ID of the corresponding resource in the REST Admin API.

* once​Per​Customer

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the price rule can be applied only once per customer.

* prerequisite​Quantity​Range

  [Price​Rule​Quantity​Range](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleQuantityRange)

  The number of the entitled items must fall within this range for the price rule to be applicable.

* prerequisite​Shipping​Price​Range

  [Price​Rule​Money​Range](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleMoneyRange)

  The shipping cost must fall within this range for the price rule to be applicable.

* prerequisite​Subtotal​Range

  [Price​Rule​Money​Range](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleMoneyRange)

  The sum of the entitled items subtotal prices must fall within this range for the price rule to be applicable.

* prerequisite​To​Entitlement​Quantity​Ratio

  [Price​Rule​Prerequisite​To​Entitlement​Quantity​Ratio](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRulePrerequisiteToEntitlementQuantityRatio)

  Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items.

* shareable​Urls

  [\[Price​Rule​Shareable​Url!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleShareableUrl)

  non-null

  URLs that can be used to share the discount.

* shipping​Entitlements

  [Price​Rule​Shipping​Line​Entitlements!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleShippingLineEntitlements)

  non-null

  The shipping lines to which the price rule applies.

* starts​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the price rule starts.

* status

  [Price​Rule​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleStatus)

  non-null

  The status of the price rule.

* summary

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A detailed summary of the price rule.

* target

  [Price​Rule​Target!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleTarget)

  non-null

  The type of lines (line\_item or shipping\_line) to which the price rule applies.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the price rule.

* total​Sales

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The total sales from orders where the price rule was used.

* usage​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of times that the price rule has been used. This value is updated asynchronously and can be different than the actual usage count.

* usage​Limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The maximum number of times that the price rule can be used in total.

* validity​Period

  [Price​Rule​Validity​Period!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleValidityPeriod)

  non-null

  A time period during which a price rule is applicable.

* value​V2

  [Pricing​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/PricingValue)

  non-null

  The value of the price rule.

### Deprecated fields

* discount​Class

  [Discount​Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

  non-nullDeprecated

* entitlement​To​Prerequisite​Quantity​Ratio

  [Price​Rule​Entitlement​To​Prerequisite​Quantity​Ratio](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleEntitlementToPrerequisiteQuantityRatio)

  Deprecated

* traits

  [\[Price​Rule​Trait!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleTrait)

  non-nullDeprecated

* value

  [Price​Rule​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/PriceRuleValue)

  non-nullDeprecated

***

## Map

***

## Interfaces

* * [Comment​Event​Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)

    interface

  * [Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

    interface

  * [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## PriceRule Implements

### Implements

* [Comment​Event​Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)
* [Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
* [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
