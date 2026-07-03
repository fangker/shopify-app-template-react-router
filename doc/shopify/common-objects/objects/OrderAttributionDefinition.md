---
title: OrderAttributionDefinition - GraphQL Admin
description: >-
  An attribution definition that an app can use to label orders it routes to a
  shop.

  Definitions can be supplied declaratively via the `order_attribution_config`
  extension or created

  dynamically per-shop via the Admin API.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAttributionDefinition
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAttributionDefinition.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Order​Attribution​Definition

object

An attribution definition that an app can use to label orders it routes to a shop. Definitions can be supplied declaratively via the `order_attribution_config` extension or created dynamically per-shop via the Admin API.

## Fields

* display​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A human-readable name for the definition, displayed in Shopify Admin and on order details.

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A unique identifier for the definition, scoped to the calling app on a single shop. Used as the `attribution_handle` value when an app attributes an order to this definition.

* icon

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Sanitized SVG content used as the icon for orders attributed to this definition. May be null when no icon is provided.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

***

## Map

### Fields and connections with this object

* [OrderAttributionDefinitionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderAttributionDefinitionConnection#returns-nodes)
* [OrderAttributionDefinitionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAttributionDefinitionEdge#field-OrderAttributionDefinitionEdge.fields.node)

***

## Queries

* [order​Attribution​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderAttributionDefinitions)

  query

  Returns approved order attribution definitions for the calling app on the current shop.

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

## OrderAttributionDefinition Queries

### Queried by

* [order​Attribution​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderAttributionDefinitions)

***

## Mutations

* [order​Attribution​Definition​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderAttributionDefinitionUpsert)

  mutation

  Upserts an order attribution definition for the calling app on the current shop. Apps can use attribution definitions to label orders they route to a shop, replacing or augmenting any definitions shipped declaratively via the `order_attribution_config` extension.

  If a definition with the same handle exists for this app on the shop, the supplied input fields are merged onto it; fields omitted from the input are left unchanged. Otherwise a new definition is created. To explicitly clear the stored `icon` on an existing definition, pass `icon: null`.

  * input

    [Order​Attribution​Definition​Upsert​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderAttributionDefinitionUpsertInput)

    required

    ### Arguments

    The input fields for upserting the order attribution definition.

  ***

***

## OrderAttributionDefinition Mutations

### Mutated by

* [order​Attribution​Definition​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderAttributionDefinitionUpsert)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## OrderAttributionDefinition Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
