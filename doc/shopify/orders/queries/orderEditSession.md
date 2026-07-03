---
title: orderEditSession - GraphQL Admin
description: Returns a `OrderEditSession` resource by ID.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/orderEditSession'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/orderEditSession.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# order​Edit​Session

query

Returns a `OrderEditSession` resource by ID.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the `OrderEditSession` to return.

***

## Possible returns

* Order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  An edit session for an order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The unique ID of the order edit session.

***

## Examples

* ### orderEditSession reference
