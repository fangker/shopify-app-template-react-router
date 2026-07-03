---
title: MetafieldIdentifier - GraphQL Admin
description: 'Identifies a metafield by its owner resource, namespace, and key.'
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldIdentifier
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldIdentifier.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Metafield​Identifier

object

Identifies a metafield by its owner resource, namespace, and key.

## Fields

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The key of the metafield.

* namespace

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The namespace of the metafield.

* owner​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  GID of the owner resource that the metafield belongs to.

***

## Map

No referencing types

***

## Mutations

* [metafields​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsDelete)

  mutation

  Deletes [`Metafield`](https://shopify.dev/docs/api/admin-graphql/2026-07/objects/Metafield) objects in bulk by specifying combinations of owner ID, namespace, and key.

  Returns the identifiers of successfully deleted metafields. If a specified metafield doesn't exist, then the mutation still succeeds but returns `null` for that identifier in the response.

  * metafields

    [\[Metafield​Identifier​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldIdentifierInput)

    required

    ### Arguments

    A list of identifiers specifying metafields to delete. At least one identifier must be specified.

  ***

***

## MetafieldIdentifier Mutations

### Mutated by

* [metafields​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsDelete)
