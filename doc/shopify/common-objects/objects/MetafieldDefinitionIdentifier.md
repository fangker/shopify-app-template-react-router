---
title: MetafieldDefinitionIdentifier - GraphQL Admin
description: 'Identifies a metafield definition by its owner type, namespace, and key.'
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionIdentifier
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionIdentifier.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Metafield​Definition​Identifier

object

Identifies a metafield definition by its owner type, namespace, and key.

## Fields

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The unique identifier for the metafield definition within its namespace.

* namespace

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The container for a group of metafields that the metafield definition is associated with.

* owner​Type

  [Metafield​Owner​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

  non-null

  The resource type that the metafield definition is attached to.

***

## Map

No referencing types

***

## Mutations

* [metafield​Definition​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionDelete)

  mutation

  Deletes a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/2026-07/objects/MetafieldDefinition). You can identify the definition by providing either its owner type, namespace, and key, or its global ID.

  When you set [`deleteAllAssociatedMetafields`](https://shopify.dev/docs/api/admin-graphql/2026-07/mutations/metafieldDefinitionDelete#arguments-deleteAllAssociatedMetafields) to `true`, the mutation asynchronously deletes all [`Metafield`](https://shopify.dev/docs/api/admin-graphql/2026-07/objects/Metafield) objects that use this definition. This option must be `true` when deleting definitions under the `$app` namespace.

  Learn more about [deleting metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/definitions).

  * delete​All​Associated​Metafields

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Whether to delete all associated metafields.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The id of the metafield definition to delete. Using `identifier` is preferred.

  * identifier

    [Metafield​Definition​Identifier​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput)

    The identifier of the metafield definition to delete.

  ***

***

## MetafieldDefinitionIdentifier Mutations

### Mutated by

* [metafield​Definition​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionDelete)
