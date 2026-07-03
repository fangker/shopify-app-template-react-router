---
title: ReturnableFulfillment - GraphQL Admin
description: >-
  A delivered order that's eligible to be returned to the merchant. Provides the

  items from completed fulfillments that customers can select when initiating a
  return.


  Use returnable fulfillments to determine which items are eligible for return

  before creating a

  [`Return`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)
  with the
  [`returnCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate)

  mutation. The line items show quantities that are available for return.


  Learn more about [building return management
  workflows](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillment
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillment.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Returnable​Fulfillment

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope. Also: Requires the `read_returns` access scope.

A delivered order that's eligible to be returned to the merchant. Provides the items from completed fulfillments that customers can select when initiating a return.

Use returnable fulfillments to determine which items are eligible for return before creating a [`Return`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return) with the [`returnCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate) mutation. The line items show quantities that are available for return.

Learn more about [building return management workflows](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

## Fields

* fulfillment

  [Fulfillment!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

  non-null

  The fulfillment that the returnable fulfillment refers to.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID of the Returnable Fulfillment.

* returnable​Fulfillment​Line​Items

  [Returnable​Fulfillment​Line​Item​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentLineItemConnection)

  non-null

  The list of returnable fulfillment line items.

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

### Fields and connections with this object

* [ReturnableFulfillmentConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentConnection#returns-nodes)
* [ReturnableFulfillmentEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillmentEdge#field-ReturnableFulfillmentEdge.fields.node)

***

## Queries

* [returnable​Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnableFulfillment)

  query

  Returns a `ReturnableFulfillment` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `ReturnableFulfillment` to return.

  ***

* [returnable​Fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnableFulfillments)

  query

  List of returnable fulfillments.

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

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    Order ID that will scope all returnable fulfillments.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

## ReturnableFulfillment Queries

### Queried by

* [returnable​Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnableFulfillment)
* [returnable​Fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnableFulfillments)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ReturnableFulfillment Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
