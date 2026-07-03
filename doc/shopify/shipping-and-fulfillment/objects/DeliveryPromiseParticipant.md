---
title: DeliveryPromiseParticipant - GraphQL Admin
description: Returns enabled delivery promise participants.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseParticipant
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseParticipant.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Promise​Participant

object

Requires `read_delivery_promises` access scope.

Returns enabled delivery promise participants.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the promise participant.

* owner

  [Delivery​Promise​Participant​Owner](https://shopify.dev/docs/api/admin-graphql/latest/unions/DeliveryPromiseParticipantOwner)

  The resource that the participant is attached to.

* owner​Type

  [Delivery​Promise​Participant​Owner​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryPromiseParticipantOwnerType)

  non-null

  The owner type of the participant.

***

## Map

### Fields and connections with this object

* [DeliveryPromiseParticipantConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryPromiseParticipantConnection#returns-nodes)
* [DeliveryPromiseParticipantEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseParticipantEdge#field-DeliveryPromiseParticipantEdge.fields.node)

***

## Queries

* [delivery​Promise​Participants](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryPromiseParticipants)

  query

  Returns delivery promise participants.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * branded​Promise​Handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The branded promise handle to filter by.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * owner​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The product variant ID to filter by.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

## DeliveryPromiseParticipant Queries

### Queried by

* [delivery​Promise​Participants](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryPromiseParticipants)

***

## Mutations

* [delivery​Promise​Participants​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryPromiseParticipantsUpdate)

  mutation

  Updates the delivery promise participants by adding or removing owners based on a branded promise handle.

  * branded​Promise​Handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The branded promise handle to update the delivery promise participants for.

  * owners​To​Add

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Default:\[]

    The owners to add to the delivery promise participants.

  * owners​To​Remove

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Default:\[]

    The owners to remove from the delivery promise participants.

  ***

***

## DeliveryPromiseParticipant Mutations

### Mutated by

* [delivery​Promise​Participants​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryPromiseParticipantsUpdate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## DeliveryPromiseParticipant Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
