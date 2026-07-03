---
title: MetafieldDefinitionType - GraphQL Admin
description: >-
  A metafield definition type provides basic foundation and validation for a
  metafield.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionType.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Metafield​Definition​Type

object

A metafield definition type provides basic foundation and validation for a metafield.

## Fields

* category

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The category associated with the metafield definition type.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the type for the metafield definition. See the list of [supported types](https://shopify.dev/apps/metafields/types).

* supported​Validations

  [\[Metafield​Definition​Supported​Validation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionSupportedValidation)

  non-null

  The supported validations for a metafield definition type.

* supports​Definition​Migrations

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether metafields without a definition can be migrated to a definition of this type.

* value​Type

  [Metafield​Value​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldValueType)

  non-nullDeprecated

***

## Map

### Fields with this object

* [CollectionConditionBasicMetafieldDefinition.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionBasicMetafieldDefinition#field-CollectionConditionBasicMetafieldDefinition.fields.type)
* [CollectionConditionMetafieldDefinitionInterface.type](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionConditionMetafieldDefinitionInterface#fields-type)
* [CollectionConditionMetaobjectMetafieldDefinition.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionMetaobjectMetafieldDefinition#field-CollectionConditionMetaobjectMetafieldDefinition.fields.type)
* [MetafieldDefinition.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.type)
* [MetaobjectFieldDefinition.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectFieldDefinition#field-MetaobjectFieldDefinition.fields.type)
* [StandardMetafieldDefinitionTemplate.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplate#field-StandardMetafieldDefinitionTemplate.fields.type)
* [StandardMetaobjectDefinitionFieldTemplate.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionFieldTemplate#field-StandardMetaobjectDefinitionFieldTemplate.fields.type)

***

## Queries

* [metafield​Definition​Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinitionTypes)

  query

  The available metafield types that you can use when creating [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/2026-07/objects/MetafieldDefinition) objects. Each type specifies what kind of data it stores (such as boolean, color, date, or references), its category, and which validations it supports.

  For a list of supported types and their capabilities, refer to the [metafield types documentation](https://shopify.dev/docs/apps/metafields/types).

***

## MetafieldDefinitionType Queries

### Queried by

* [metafield​Definition​Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinitionTypes)
