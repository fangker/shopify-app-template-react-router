---
title: RefundAgreement - GraphQL Admin
description: >-
  An agreement between the merchant and customer to refund all or a portion of
  the order.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundAgreement'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundAgreement.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Refund​Agreement

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

An agreement between the merchant and customer to refund all or a portion of the order.

## Fields

* app

  [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  The application that created the agreement.

* happened​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time at which the agreement occured.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID for the agreement.

* reason

  [Order​Action​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderActionType)

  non-null

  The reason the agremeent was created.

* refund

  [Refund!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund)

  non-null

  The refund associated with the agreement.

* sales

  [Sale​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SaleConnection)

  non-null

  The sales associated with the agreement.

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

* user

  [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  The staff member associated with the agreement.

***

## Map

No referencing types

***

## Interfaces

* [Sales​Agreement](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SalesAgreement)

  interface

***

## RefundAgreement Implements

### Implements

* [Sales​Agreement](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SalesAgreement)
