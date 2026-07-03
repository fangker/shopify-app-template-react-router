---
title: collectionConditionMetafieldDefinitions - GraphQL Admin
description: >-
  Lists all metafield definitions that can be used to create collection
  conditions.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionConditionMetafieldDefinitions
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionConditionMetafieldDefinitions.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# collection​Condition​Metafield​Definitions

query

Requires `read_products` access scope. Also: User needs Products permission.

Lists all metafield definitions that can be used to create collection conditions.

## Possible returns

* Collection​Condition​Metafield​Definition​Interface

  [\[Collection​Condition​Metafield​Definition​Interface!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionConditionMetafieldDefinitionInterface)

  Common fields exposed by every metafield definition usable as a collection condition.

  * description

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The description of the metafield definition.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The ID of the underlying metafield definition.

  * key

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The unique identifier for the metafield definition within its namespace.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The human-readable name of the metafield definition.

  * namespace

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The container for a group of metafields that the metafield definition is associated with.

  * owner​Type

    [Metafield​Owner​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

    non-null

    The resource type that the metafield definition is attached to.

  * type

    [Metafield​Definition​Type!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionType)

    non-null

    The data type of the metafield definition.

  * validations

    [\[Metafield​Definition​Validation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionValidation)

    non-null

    A list of validation options for the metafields that belong to the metafield definition.

***

## Examples

* ### collectionConditionMetafieldDefinitions reference
