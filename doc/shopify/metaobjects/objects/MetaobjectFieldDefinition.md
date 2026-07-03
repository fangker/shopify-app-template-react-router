---
title: MetaobjectFieldDefinition - GraphQL Admin
description: |-
  Defines a field for a MetaobjectDefinition with properties
  such as the field's data type and validations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectFieldDefinition
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectFieldDefinition.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Metaobject​Field​Definition

object

Defines a field for a MetaobjectDefinition with properties such as the field's data type and validations.

## Fields

* capabilities

  [Metaobject​Field​Definition​Capabilities!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectFieldDefinitionCapabilities)

  non-null

  Capabilities available for this metaobject field definition.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The administrative description.

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A key name used to identify the field within the metaobject composition.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The human-readable name.

* required

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Required status of the field within the metaobject composition.

* type

  [Metafield​Definition​Type!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionType)

  non-null

  The type of data that the field stores.

* validations

  [\[Metafield​Definition​Validation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionValidation)

  non-null

  A list of [validation options](https://shopify.dev/apps/metafields/definitions/validation) for the field. For example, a field with the type `date` can set a minimum date requirement.

***

## Map

### Fields with this object

* [MetaobjectDefinition.fieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition#field-MetaobjectDefinition.fields.fieldDefinitions)
* [MetaobjectField.definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField#field-MetaobjectField.fields.definition)
