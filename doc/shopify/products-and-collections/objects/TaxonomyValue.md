---
title: TaxonomyValue - GraphQL Admin
description: Represents a Shopify product taxonomy value.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyValue'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyValue.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Taxonomy​Value

object

Represents a Shopify product taxonomy value.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the product taxonomy value. For example, Red.

***

## Map

### Fields and connections with this object

* [TaxonomyChoiceListAttribute.values](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyChoiceListAttribute#field-TaxonomyChoiceListAttribute.fields.values)
* [TaxonomyValueConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyValueConnection#returns-nodes)
* [TaxonomyValueEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyValueEdge#field-TaxonomyValueEdge.fields.node)

### Possible type in

* [Metafield​Reference](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## TaxonomyValue Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
