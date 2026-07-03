---
title: StandardMetaobjectDefinitionFieldTemplate - GraphQL Admin
description: A preset field definition on a standard metaobject definition template.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionFieldTemplate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionFieldTemplate.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Standard​Metaobject​Definition​Field​Template

object

A preset field definition on a standard metaobject definition template.

## Fields

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The administrative description.

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The key owned by the definition after the definition has been enabled.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The human-readable name.

* required

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  The required status of the field within the object composition.

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

### Fields with this object

* [StandardMetaobjectDefinitionTemplate.fieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionTemplate#field-StandardMetaobjectDefinitionTemplate.fields.fieldDefinitions)
