---
title: ShopifyqlTableDataColumn - GraphQL Admin
description: Represents a column in a ShopifyQL query response.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlTableDataColumn
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlTableDataColumn.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopifyql​Table​Data​Column

object

Requires `read_reports` access scope.

Represents a column in a ShopifyQL query response.

## Fields

* column​Origin

  [Shopifyql​Column​Origin!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyqlColumnOrigin)

  non-null

  Whether the column was explicitly requested in the query or dynamically generated.

* data​Type

  [Column​Data​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ColumnDataType)

  non-null

  The data type of the column.

* display​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The human-readable display name of the column.

* dynamic​Column​Metadata

  [Shopifyql​Dynamic​Column​Metadata](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlDynamicColumnMetadata)

  Metadata describing how a dynamic column was generated (comparison, totals, benchmark, attribution, etc.). Null for non-dynamic columns.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the column.

* short​Display​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A shortened display name for the column, suitable for compact UI such as metric tiles.

* sub​Type

  [Column​Data​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/ColumnDataType)

  The sub type of an array column.

***

## Map

### Fields with this object

* [ShopifyqlTableData.columns](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlTableData#field-ShopifyqlTableData.fields.columns)
