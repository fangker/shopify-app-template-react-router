---
title: ReverseDelivery - GraphQL Admin
description: >-
  A reverse delivery is a post-fulfillment object that represents a buyer
  sending a package to a merchant.

  For example, a buyer requests a return, and a merchant sends the buyer a
  shipping label.

  The reverse delivery contains the context of the items sent back, how they're
  being sent back

  (for example, a shipping label), and the current state of the delivery
  (tracking information).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDelivery'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDelivery.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Reverse​Delivery

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

A reverse delivery is a post-fulfillment object that represents a buyer sending a package to a merchant. For example, a buyer requests a return, and a merchant sends the buyer a shipping label. The reverse delivery contains the context of the items sent back, how they're being sent back (for example, a shipping label), and the current state of the delivery (tracking information).

## Fields

* deliverable

  [Reverse​Delivery​Deliverable](https://shopify.dev/docs/api/admin-graphql/latest/unions/ReverseDeliveryDeliverable)

  The deliverable associated with the reverse delivery.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the reverse delivery.

* reverse​Delivery​Line​Items

  [Reverse​Delivery​Line​Item​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryLineItemConnection)

  non-null

  The reverse delivery line items attached to the reverse delivery.

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

* reverse​Fulfillment​Order

  [Reverse​Fulfillment​Order!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder)

  non-null

  The `ReverseFulfillmentOrder` associated with the reverse delivery.

***

## Map

### Fields and connections with this object

* [ReverseDeliveryConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryConnection#returns-nodes)
* [ReverseDeliveryEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryEdge#field-ReverseDeliveryEdge.fields.node)
* [ReverseFulfillmentOrder.reverseDeliveries](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder#field-ReverseFulfillmentOrder.fields.reverseDeliveries)

***

## Queries

* [reverse​Delivery](https://shopify.dev/docs/api/admin-graphql/latest/queries/reverseDelivery)

  query

  Lookup a reverse delivery by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the ReverseDelivery to return.

  ***

***

## ReverseDelivery Queries

### Queried by

* [reverse​Delivery](https://shopify.dev/docs/api/admin-graphql/latest/queries/reverseDelivery)

***

## Mutations

* [reverse​Delivery​Create​With​Shipping](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseDeliveryCreateWithShipping)

  mutation

  Creates a new reverse delivery with associated external shipping information.

  * label​Input

    [Reverse​Delivery​Label​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryLabelInput)

    Default:null

    ### Arguments

    The return label file information for the reverse delivery.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    When `true` the customer is notified with delivery instructions if the `ReverseFulfillmentOrder.order.email` is present.

  * reverse​Delivery​Line​Items

    [\[Reverse​Delivery​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryLineItemInput)

    required

    The reverse delivery line items to be created. If an empty array is provided, then this mutation will create a reverse delivery line item for each reverse fulfillment order line item, with its quantity equal to the reverse fulfillment order line item total quantity.

  * reverse​Fulfillment​Order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the reverse fulfillment order that's associated to the reverse delivery.

  * tracking​Input

    [Reverse​Delivery​Tracking​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryTrackingInput)

    Default:null

    The tracking information for the reverse delivery.

  ***

* [reverse​Delivery​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseDeliveryShippingUpdate)

  mutation

  Updates a reverse delivery with associated external shipping information.

  * label​Input

    [Reverse​Delivery​Label​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryLabelInput)

    Default:null

    ### Arguments

    The return label file information for the reverse delivery.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    If `true` and an email address exists on the `ReverseFulfillmentOrder.order`, then the customer is notified with the updated delivery instructions.

  * reverse​Delivery​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the reverse delivery to update.

  * tracking​Input

    [Reverse​Delivery​Tracking​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryTrackingInput)

    Default:null

    The tracking information for the reverse delivery.

  ***

***

## ReverseDelivery Mutations

### Mutated by

* [reverse​Delivery​Create​With​Shipping](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseDeliveryCreateWithShipping)
* [reverse​Delivery​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseDeliveryShippingUpdate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ReverseDelivery Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
