---
title: AppSubscriptionLineItem - GraphQL Admin
description: >-
  Represents a component of an app subscription that contains pricing details
  for

  either recurring fees or usage-based charges. Each subscription has exactly 1
  or

  2 line items - one for recurring fees and/or one for usage fees.


  If a subscription has both recurring and usage pricing, there will be 2 line

  items. If it only has one type of pricing, the subscription will have a single

  line item for that pricing model.


  Use the `AppSubscriptionLineItem` object to:

  - View the pricing terms a merchant has agreed to

  - Distinguish between recurring and usage fee components

  - Access detailed billing information for each pricing component


  This read-only object provides visibility into the subscription's pricing
  structure without allowing modifications.


  Read about subscription pricing models in the [billing architecture

  guide](https://shopify.dev/docs/apps/launch/billing/subscription-billing).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# App​Subscription​Line​Item

object

Represents a component of an app subscription that contains pricing details for either recurring fees or usage-based charges. Each subscription has exactly 1 or 2 line items - one for recurring fees and/or one for usage fees.

If a subscription has both recurring and usage pricing, there will be 2 line items. If it only has one type of pricing, the subscription will have a single line item for that pricing model.

Use the `AppSubscriptionLineItem` object to:

* View the pricing terms a merchant has agreed to
* Distinguish between recurring and usage fee components
* Access detailed billing information for each pricing component

This read-only object provides visibility into the subscription's pricing structure without allowing modifications.

Read about subscription pricing models in the [billing architecture guide](https://shopify.dev/docs/apps/launch/billing/subscription-billing).

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* plan

  [App​Plan​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPlanV2)

  non-null

  The pricing model for the app subscription.

* usage​Records

  [App​Usage​Record​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppUsageRecordConnection)

  non-null

  A list of the store's usage records for a usage pricing plan.

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

  * sort​Key

    [App​Usage​Record​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppUsageRecordSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## Map

### Fields with this object

* [AppSubscription.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription#field-AppSubscription.fields.lineItems)
* [AppUsageRecord.subscriptionLineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsageRecord#field-AppUsageRecord.fields.subscriptionLineItem)
