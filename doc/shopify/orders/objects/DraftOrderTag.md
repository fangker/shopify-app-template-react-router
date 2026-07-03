---
title: DraftOrderTag - GraphQL Admin
description: Represents a draft order tag.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderTag'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderTag.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Draft​Order​Tag

object

Requires `read_draft_orders` access scope.

Represents a draft order tag.

## Fields

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Handle of draft order tag.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  ID of draft order tag.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Title of draft order tag.

***

## Map

No referencing types

***

## Queries

* [draft​Order​Tag](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrderTag)

  query

  Returns a `DraftOrderTag` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `DraftOrderTag` to return.

  ***

***

## DraftOrderTag Queries

### Queried by

* [draft​Order​Tag](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrderTag)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## DraftOrderTag Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
