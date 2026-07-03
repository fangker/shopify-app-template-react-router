---
title: MetafieldDefinitionSupportedValidation - GraphQL Admin
description: >-
  The type and name for the optional validation configuration of a metafield.


  For example, a supported validation might consist of a `max` name and a
  `number_integer` type.

  This validation can then be used to enforce a maximum character length for a
  `single_line_text_field` metafield.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionSupportedValidation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionSupportedValidation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Metafield​Definition​Supported​Validation

object

The type and name for the optional validation configuration of a metafield.

For example, a supported validation might consist of a `max` name and a `number_integer` type. This validation can then be used to enforce a maximum character length for a `single_line_text_field` metafield.

## Fields

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the metafield definition validation.

* type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The type of input for the validation.

***

## Map

### Fields with this object

* [MetafieldDefinitionType.supportedValidations](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionType#field-MetafieldDefinitionType.fields.supportedValidations)
