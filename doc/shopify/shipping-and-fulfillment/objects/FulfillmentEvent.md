---
title: FulfillmentEvent - GraphQL Admin
description: >-
  A tracking event that records the status and location of a fulfillment at a

  specific point in time. Each event captures details such as the
  [status](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent#field-FulfillmentEvent.fields.status)

  (for example, in transit, out for delivery, delivered) and any
  [messages](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent#field-FulfillmentEvent.fields.message)

  associated with the event.


  Fulfillment events provide a chronological history of a package's journey from

  shipment to delivery. They include timestamps, geographic coordinates, and

  estimated delivery dates to track fulfillment progress.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Fulfillment​Event

object

Requires `read_orders` access scope.

A tracking event that records the status and location of a fulfillment at a specific point in time. Each event captures details such as the [status](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent#field-FulfillmentEvent.fields.status) (for example, in transit, out for delivery, delivered) and any [messages](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent#field-FulfillmentEvent.fields.message) associated with the event.

Fulfillment events provide a chronological history of a package's journey from shipment to delivery. They include timestamps, geographic coordinates, and estimated delivery dates to track fulfillment progress.

## Fields

* address1

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The street address where this fulfillment event occurred.

* city

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The city where this fulfillment event occurred.

* country

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The country where this fulfillment event occurred.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the fulfillment event was created.

* estimated​Delivery​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The estimated delivery date and time of the fulfillment.

* happened​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The time at which this fulfillment event happened.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* latitude

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The latitude where this fulfillment event occurred.

* longitude

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The longitude where this fulfillment event occurred.

* message

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A message associated with this fulfillment event.

* province

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The province where this fulfillment event occurred.

* status

  [Fulfillment​Event​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentEventStatus)

  non-null

  The status of this fulfillment event.

* zip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The zip code of the location where this fulfillment event occurred.

***

## Map

### Fields and connections with this object

* [Fulfillment.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.events)
* [FulfillmentEventConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentEventConnection#returns-nodes)
* [FulfillmentEventEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEventEdge#field-FulfillmentEventEdge.fields.node)

***

## Mutations

* [fulfillment​Event​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentEventCreate)

  mutation

  Creates a [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) to track the shipment status and location of items that have shipped. Events capture status updates like carrier pickup, in transit, out for delivery, or delivered.

  Each event records the timestamp and current status of the [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment). You can include optional details such as the location where the event occurred, estimated arrival time, and messages for tracking purposes.

  * fulfillment​Event

    [Fulfillment​Event​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentEventInput)

    required

    ### Arguments

    The input fields used to create a fulfillment event for a fulfillment.

  ***

***

## FulfillmentEvent Mutations

### Mutated by

* [fulfillment​Event​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentEventCreate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## FulfillmentEvent Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
