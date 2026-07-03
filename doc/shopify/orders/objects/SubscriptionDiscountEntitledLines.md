---
title: SubscriptionDiscountEntitledLines - GraphQL Admin
description: Represents the subscription lines the discount applies on.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountEntitledLines
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountEntitledLines.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Discount​Entitled​Lines

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Represents the subscription lines the discount applies on.

## Fields

* all

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Specify whether the subscription discount will apply on all subscription lines.

* lines

  [Subscription​Line​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection)

  non-null

  The list of subscription lines associated with the subscription discount.

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

***

## Map

### Fields with this object

* [SubscriptionManualDiscount.entitledLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount#field-SubscriptionManualDiscount.fields.entitledLines)
