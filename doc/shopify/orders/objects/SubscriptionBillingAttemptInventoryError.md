---
title: SubscriptionBillingAttemptInventoryError - GraphQL Admin
description: >-
  An inventory-related error that occurred during a subscription billing
  attempt.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptInventoryError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptInventoryError.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Billing​Attempt​Inventory​Error

object

Requires `read_own_subscription_contracts` access scope.

An inventory-related error that occurred during a subscription billing attempt.

## Fields

* code

  [Subscription​Billing​Attempt​Inventory​Error​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptInventoryErrorCode)

  non-null

  The error code for the inventory-related failure.

* insufficient​Stock​Product​Variants

  [Product​Variant​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection)

  A list of product variants that caused the insufficient inventory error.

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

### Possible type in

* [Subscription​Billing​Attempt​Error](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionBillingAttemptError)
