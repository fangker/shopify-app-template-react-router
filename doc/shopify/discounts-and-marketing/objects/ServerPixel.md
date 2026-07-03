---
title: ServerPixel - GraphQL Admin
description: >-
  A server pixel stores configuration for streaming customer interactions to an
  EventBridge or PubSub endpoint.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ServerPixel'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ServerPixel.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Server​Pixel

object

Requires `read_pixels` access scope. Also: The app must have the read\_server\_pixels access scope.

A server pixel stores configuration for streaming customer interactions to an EventBridge or PubSub endpoint.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* status

  [Server​Pixel​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/ServerPixelStatus)

  The current state of this server pixel.

* webhook​Endpoint​Address

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Address of the EventBridge or PubSub endpoint.

***

## Map

No referencing types

***

## Queries

* [server​Pixel](https://shopify.dev/docs/api/admin-graphql/latest/queries/serverPixel)

  query

  The server pixel configured by the app.

***

## ServerPixel Queries

### Queried by

* [server​Pixel](https://shopify.dev/docs/api/admin-graphql/latest/queries/serverPixel)

***

## Mutations

* [event​Bridge​Server​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeServerPixelUpdate)

  mutation

  Updates the server pixel to connect to an EventBridge endpoint. Running this mutation deletes any previous subscriptions for the server pixel.

  * arn

    [ARN!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ARN)

    required

    ### Arguments

    The ARN for the EventBridge endpoint to which customer events are to be sent.

  ***

* [pub​Sub​Server​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubServerPixelUpdate)

  mutation

  Updates the server pixel to connect to a Google PubSub endpoint. Running this mutation deletes any previous subscriptions for the server pixel.

  * pub​Sub​Project

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The Google PubSub project ID.

  * pub​Sub​Topic

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The Google PubSub topic ID.

  ***

* [server​Pixel​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverPixelCreate)

  mutation

  Creates a new unconfigured server pixel. A single server pixel can exist for an app and shop combination. If you call this mutation when a server pixel already exists, then an error will return.

***

## ServerPixel Mutations

### Mutated by

* [event​Bridge​Server​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeServerPixelUpdate)
* [pub​Sub​Server​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubServerPixelUpdate)
* [server​Pixel​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverPixelCreate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ServerPixel Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
