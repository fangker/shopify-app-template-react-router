---
title: Fulfillment - GraphQL Admin
description: >-
  A shipment of one or more items from an

  [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).
  Tracks which

  [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

  objects ship, their quantities, and the shipment's tracking information.


  Includes tracking details such as the carrier, tracking numbers, and URLs. The

  fulfillment connects to both the original order and any associated
  [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)
  objects.
  [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent)

  objects record milestones throughout the shipment lifecycle, from creation

  through delivery.


  Multiple fulfillments can exist for a single order when items either ship
  separately or from different locations.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Fulfillment

object

Requires `read_orders` access scope, `read_marketplace_orders` access scope, `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope, `read_third_party_fulfillment_orders` access scope or `read_marketplace_fulfillment_orders` access scope.

A shipment of one or more items from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Tracks which [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects ship, their quantities, and the shipment's tracking information.

Includes tracking details such as the carrier, tracking numbers, and URLs. The fulfillment connects to both the original order and any associated [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) objects record milestones throughout the shipment lifecycle, from creation through delivery.

Multiple fulfillments can exist for a single order when items either ship separately or from different locations.

## Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the fulfillment was created.

* delivered​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date that this fulfillment was delivered.

* display​Status

  [Fulfillment​Display​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentDisplayStatus)

  Human readable display status for this fulfillment.

* estimated​Delivery​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The estimated date that this fulfillment will arrive.

* events

  [Fulfillment​Event​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentEventConnection)

  non-null

  The history of events associated with this fulfillment.

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

    [Fulfillment​Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentEventSortKeys)

    Default:HAPPENED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* fulfillment​Line​Items

  [Fulfillment​Line​Item​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentLineItemConnection)

  non-null

  List of the fulfillment's line items.

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

* fulfillment​Orders

  [Fulfillment​Order​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection)

  non-null

  A paginated list of fulfillment orders for the fulfillment.

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

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* in​Transit​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the fulfillment went into transit.

* legacy​Resource​Id

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The ID of the corresponding resource in the REST Admin API.

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location that the fulfillment was processed at.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Human readable reference identifier for this fulfillment.

* order

  [Order!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  non-null

  The order for which the fulfillment was created.

* origin​Address

  [Fulfillment​Origin​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOriginAddress)

  The address at which the fulfillment occurred. This field is intended for tax purposes, as a full address is required for tax providers to accurately calculate taxes. Typically this is the address of the warehouse or fulfillment center. To retrieve a fulfillment location's address, use the `assignedLocation` field on the [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) object instead.

* requires​Shipping

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether any of the line items in the fulfillment require shipping.

* service

  [Fulfillment​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

  Fulfillment service associated with the fulfillment.

* status

  [Fulfillment​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentStatus)

  non-null

  The status of the fulfillment.

* total​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  Sum of all line item quantities for the fulfillment.

* tracking​Info

  [\[Fulfillment​Tracking​Info!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentTrackingInfo)

  non-null

  Tracking information associated with the fulfillment, such as the tracking company, tracking number, and tracking URL.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    Truncate the array result to this size.

  ***

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the fulfillment was last modified.

***

## Map

### Fields and connections with this object

* [FulfillmentConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentConnection#returns-nodes)
* [FulfillmentEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEdge#field-FulfillmentEdge.fields.node)
* [FulfillmentOrder.fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.fulfillments)
* [Order.fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.fulfillments)
* [ReturnableFulfillment.fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillment#field-ReturnableFulfillment.fields.fulfillment)

***

## Queries

* [fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillment)

  query

  Retrieves a [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment) by its ID. A fulfillment is a record that the merchant has completed their work required for one or more line items in an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). It includes tracking information, [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects, and the status of the fulfillment.

  Use this query to track the progress of shipped items, view tracking details, or check [fulfillment events](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) for example when a package is out for delivery or delivered.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Fulfillment to return.

  ***

***

## Fulfillment Queries

### Queried by

* [fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillment)

***

## Mutations

* [fulfillment​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCancel)

  mutation

  Cancels an existing [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment) and reverses its effects on associated [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. When you cancel a fulfillment, the system creates new fulfillment orders for the cancelled items so they can be fulfilled again.

  The cancellation affects fulfillment orders differently based on their fulfillment status. If a fulfillment order was entirely fulfilled, then it automatically closes. If a fulfillment order is partially fulfilled, then the remaining quantities adjust to include the cancelled items. The system creates new fulfillment orders at the original [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) when items are still stocked there, or at alternative locations based on the store's fulfillment priority settings.

  Learn more about [canceling fulfillments](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-7-cancel-a-fulfillment).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment to be canceled.

  ***

* [fulfillment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreate)

  mutation

  Creates a fulfillment for one or more [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. The fulfillment orders are associated with the same [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and are assigned to the same [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location).

  Use this mutation to mark items as fulfilled when they're ready to ship. You can specify tracking information, customer notification preferences, and which [`FulfillmentOrderLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem) objects to fulfill from each fulfillment order. If you don't specify line items, then the mutation fulfills all items in the fulfillment order.

  Learn more about [building fulfillment solutions](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/build-fulfillment-solutions#create-a-fulfillment).

  * fulfillment

    [Fulfillment​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentInput)

    required

    ### Arguments

    The input fields used to create a fulfillment from fulfillment orders.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional message for the fulfillment request.

  ***

* [fulfillment​Tracking​Info​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate)

  mutation

  Updates tracking information for a fulfillment, including the carrier name, tracking numbers, and tracking URLs. You can provide either single or multiple tracking numbers for shipments with multiple packages.

  The mutation accepts a [`FulfillmentTrackingInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentTrackingInput) that supports both single tracking (using [`number`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.number) and [`url`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.url) fields) and multi-package tracking (using [`numbers`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.numbers) and [`urls`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.urls) fields). When you specify a [supported carrier name](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies), Shopify automatically generates tracking URLs for the provided tracking numbers.

  You can optionally notify customers about tracking updates with the [`notifyCustomer`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-notifyCustomer) argument. When enabled, customers receive shipping update emails with tracking details and receive notifications about future updates to the fulfillment.

  Learn more about [enabling tracking support](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-9-optional-enable-tracking-support) for fulfillment services.

  * fulfillment​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the customer will be notified of this update and future updates for the fulfillment. If this field is left blank, then notifications won't be sent to the customer when the fulfillment is updated.

  * tracking​Info​Input

    [Fulfillment​Tracking​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentTrackingInput)

    required

    The tracking input for the mutation, including tracking URL, number, and company.

  ***

### Deprecated mutations

* [fulfillment​Create​V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreateV2)

  mutation

  Deprecated

  * fulfillment

    [Fulfillment​V2Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentV2Input)

    required

    ### Arguments

    The input fields used to create a fulfillment from fulfillment orders.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional message for the fulfillment request.

  ***

* [fulfillment​Tracking​Info​Update​V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdateV2)

  mutation

  Deprecated

  * fulfillment​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the customer will be notified of this update and future updates for the fulfillment. If this field is left blank, then notifications won't be sent to the customer when the fulfillment is updated.

  * tracking​Info​Input

    [Fulfillment​Tracking​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentTrackingInput)

    required

    The tracking input for the mutation, including tracking URL, number, and company.

  ***

***

## Fulfillment Mutations

### Mutated by

* [fulfillment​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCancel)
* [fulfillment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreate)
* [fulfillment​Tracking​Info​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate)

***

## Interfaces

* * [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## Fulfillment Implements

### Implements

* [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
