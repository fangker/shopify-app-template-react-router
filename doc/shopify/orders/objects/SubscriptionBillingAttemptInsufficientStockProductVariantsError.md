---
title: >-
  SubscriptionBillingAttemptInsufficientStockProductVariantsError - GraphQL
  Admin
description: >-
  An inventory error caused by an issue with one or more of the contract
  merchandise lines.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptInsufficientStockProductVariantsError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptInsufficientStockProductVariantsError.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Billing​Attempt​Insufficient​Stock​Product​Variants​Error

object

Requires `read_own_subscription_contracts` access scope.

An inventory error caused by an issue with one or more of the contract merchandise lines.

## Fields

* code

  [Subscription​Billing​Attempt​Error​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptErrorCode)

  non-null

  The code for the error.

* insufficient​Stock​Product​Variants

  [Product​Variant​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection)

  non-null

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

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  An explanation of the error.

***

## Map

No referencing types

***

## Interfaces

* [Subscription​Billing​Attempt​Processing​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionBillingAttemptProcessingError)

  interface

***

## SubscriptionBillingAttemptInsufficientStockProductVariantsError Implements

### Implements

* [Subscription​Billing​Attempt​Processing​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionBillingAttemptProcessingError)
