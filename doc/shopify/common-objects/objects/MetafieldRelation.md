---
title: MetafieldRelation - GraphQL Admin
description: |-
  Defines a relation between two resources via a reference metafield.
  The referencer owns the joining field with a given namespace and key,
  while the target is referenced by the field.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldRelation'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldRelation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Metafield​Relation

object

Defines a relation between two resources via a reference metafield. The referencer owns the joining field with a given namespace and key, while the target is referenced by the field.

## Fields

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The key of the field making the reference.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the field making the reference.

* namespace

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The namespace of the metafield making the reference, or type of the metaobject.

* referencer

  [Metafield​Referencer!](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

  non-null

  The resource making the reference.

* target

  [Metafield​Reference!](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [MetafieldRelationConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldRelationConnection#returns-nodes)
* [MetafieldRelationEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldRelationEdge#field-MetafieldRelationEdge.fields.node)
* [Metaobject.referencedBy](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject#field-Metaobject.fields.referencedBy)
