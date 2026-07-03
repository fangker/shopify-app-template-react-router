---
title: LinkedMetafield - GraphQL Admin
description: >-
  The identifier for the metafield linked to this option.


  This API is currently in early access. See [Metafield-linked product
  options](https://shopify.dev/docs/api/admin/migrate/new-product-model/metafield-linked)

  for more details.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/LinkedMetafield'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/LinkedMetafield.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Linked​Metafield

object

Requires `read_products` access scope.

The identifier for the metafield linked to this option.

This API is currently in early access. See [Metafield-linked product options](https://shopify.dev/docs/api/admin/migrate/new-product-model/metafield-linked) for more details.

## Fields

* key

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Key of the metafield the option is linked to.

* namespace

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Namespace of the metafield the option is linked to.

***

## Map

### Fields with this object

* [ProductOption.linkedMetafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption#field-ProductOption.fields.linkedMetafield)
