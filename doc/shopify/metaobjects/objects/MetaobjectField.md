---
title: MetaobjectField - GraphQL Admin
description: Provides a field definition and the data value assigned to it.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Metaobject​Field

object

Provides a field definition and the data value assigned to it.

## Fields

* definition

  [Metaobject​Field​Definition!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectFieldDefinition)

  non-null

  The field definition for this object key.

* json​Value

  [JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

  The assigned field value in JSON format.

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The object key of this field.

* reference

  [Metafield​Reference](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)

  For resource reference fields, provides the referenced object.

* references

  [Metafield​Reference​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldReferenceConnection)

  For resource reference list fields, provides the list of referenced objects.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  ***

* thumbnail

  [Metaobject​Thumbnail](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectThumbnail)

  For file reference or color fields, provides visual attributes for this field.

* type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The type of the field.

* value

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The assigned field value, always stored as a string regardless of the field type.

***

## Map

### Fields with this object

* [Metaobject.field](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject#field-Metaobject.fields.field)
* [Metaobject.fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject#field-Metaobject.fields.fields)
* [Metaobject.thumbnailField](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject#field-Metaobject.fields.thumbnailField)
