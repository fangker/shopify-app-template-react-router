---
title: StandardMetafieldDefinitionTemplate - GraphQL Admin
description: >-
  Standard metafield definition templates provide preset configurations to
  create metafield definitions.

  Each template has a specific namespace and key that we've reserved to have
  specific meanings for common use cases.


  Refer to the [list of standard metafield
  definitions](https://shopify.dev/apps/metafields/definitions/standard-definitions).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplate.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Standard​Metafield​Definition​Template

object

Standard metafield definition templates provide preset configurations to create metafield definitions. Each template has a specific namespace and key that we've reserved to have specific meanings for common use cases.

Refer to the [list of standard metafield definitions](https://shopify.dev/apps/metafields/definitions/standard-definitions).

## Fields

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description of the standard metafield definition.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The key owned by the definition after the definition has been activated.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The human-readable name for the standard metafield definition.

* namespace

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The namespace owned by the definition after the definition has been activated.

* owner​Types

  [\[Metafield​Owner​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

  non-null

  The list of resource types that the standard metafield definition can be applied to.

* type

  [Metafield​Definition​Type!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionType)

  non-null

  The associated [metafield definition type](https://shopify.dev/apps/metafields/definitions/types) that the metafield stores.

* validations

  [\[Metafield​Definition​Validation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionValidation)

  non-null

  The configured validations for the standard metafield definition.

* visible​To​Storefront​Api

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether metafields for the definition are by default visible using the Storefront API.

***

## Map

### Fields and connections with this object

* [MetafieldDefinition.standardTemplate](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.standardTemplate)
* [StandardMetafieldDefinitionTemplateConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/StandardMetafieldDefinitionTemplateConnection#returns-nodes)
* [StandardMetafieldDefinitionTemplateEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplateEdge#field-StandardMetafieldDefinitionTemplateEdge.fields.node)

***

## Queries

* [standard​Metafield​Definition​Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardMetafieldDefinitionTemplates)

  query

  Retrieves preset metafield definition templates for common use cases. Each template provides a reserved namespace and key combination for specific purposes like product subtitles, care guides, or ISBN numbers. Use these templates to create standardized metafields across your store. Filter templates by constraint status or exclude those you've already activated.

  See the [list of standard metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-standard-definitions) for available templates.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * constraint​Status

    [Metafield​Definition​Constraint​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionConstraintStatus)

    Filter standard metafield definitions based on whether they are constrained.

  * constraint​Subtype

    [Metafield​Definition​Constraint​Subtype​Identifier](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintSubtypeIdentifier)

    Filter standard metafield definitions based on whether they apply to a given resource subtype.

  * exclude​Activated

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Filter standard metafield definitions that have already been activated.

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

## StandardMetafieldDefinitionTemplate Queries

### Queried by

* [standard​Metafield​Definition​Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardMetafieldDefinitionTemplates)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## StandardMetafieldDefinitionTemplate Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
