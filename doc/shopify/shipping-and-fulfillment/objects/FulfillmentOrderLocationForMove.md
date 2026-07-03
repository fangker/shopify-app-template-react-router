---
title: FulfillmentOrderLocationForMove - GraphQL Admin
description: A location that a fulfillment order can potentially move to.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMove
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMove.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Fulfillment​Order​Location​For​Move

object

Requires `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope or `read_third_party_fulfillment_orders` access scope.

A location that a fulfillment order can potentially move to.

## Fields

* available​Line​Items

  [Fulfillment​Order​Line​Item​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderLineItemConnection)

  non-null

  Fulfillment order line items that can be moved from their current location to the given location.

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

* available​Line​Items​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  Total number of fulfillment order line items that can be moved from their current assigned location to the given location.

* location

  [Location!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  non-null

  The location being considered as the fulfillment order's new assigned location.

* message

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A human-readable string with the reason why the fulfillment order, or some of its line items, can't be moved to the location.

* movable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the fulfillment order can be moved to the location.

* unavailable​Line​Items

  [Fulfillment​Order​Line​Item​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderLineItemConnection)

  non-null

  Fulfillment order line items that cannot be moved from their current location to the given location.

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

* unavailable​Line​Items​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  Total number of fulfillment order line items that can't be moved from their current assigned location to the given location.

***

## Map

### Fields and connections with this object

* [FulfillmentOrder.locationsForMove](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.locationsForMove)
* [FulfillmentOrderLocationForMoveConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderLocationForMoveConnection#returns-nodes)
* [FulfillmentOrderLocationForMoveEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMoveEdge#field-FulfillmentOrderLocationForMoveEdge.fields.node)
