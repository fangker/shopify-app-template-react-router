---
title: CollectionConditionMetaobjectMetafieldDefinition - GraphQL Admin
description: A metaobject-reference metafield definition usable as a collection condition.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionMetaobjectMetafieldDefinition
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionMetaobjectMetafieldDefinition.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Condition​Metaobject​Metafield​Definition

object

A metaobject-reference metafield definition usable as a collection condition.

## Fields

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

* metaobject​Definition

  [Metaobject​Definition!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

  non-null

  The metaobject definition referenced by this metafield definition.

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

## Map

No referencing types

***

## Interfaces

* [Collection​Condition​Metafield​Definition​Interface](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionConditionMetafieldDefinitionInterface)

  interface

***

## CollectionConditionMetaobjectMetafieldDefinition Implements

### Implements

* [Collection​Condition​Metafield​Definition​Interface](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionConditionMetafieldDefinitionInterface)
