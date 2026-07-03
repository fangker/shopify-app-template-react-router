---
title: RowCount - GraphQL Admin
description: A row count represents rows on background operation.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/RowCount'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/RowCount.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Row​Count

object

Requires `read_products` access scope. Also: The user must have permission to view catalogs.

A row count represents rows on background operation.

## Fields

* count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  Estimated number of rows contained within this background operation.

* exceeds​Max

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the operation exceeds max number of reportable rows.

***

## Map

### Fields with this object

* [AddAllProductsOperation.rowCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AddAllProductsOperation#field-AddAllProductsOperation.fields.rowCount)
* [CatalogCsvOperation.rowCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogCsvOperation#field-CatalogCsvOperation.fields.rowCount)
* [PublicationResourceOperation.rowCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationResourceOperation#field-PublicationResourceOperation.fields.rowCount)
* [ResourceOperation.rowCount](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ResourceOperation#fields-rowCount)
