---
title: ShopifyqlDynamicColumnMetadata - GraphQL Admin
description: Describes how a dynamically generated column relates to the query.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlDynamicColumnMetadata
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlDynamicColumnMetadata.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopifyql​Dynamic​Column​Metadata

object

Requires `read_reports` access scope.

Describes how a dynamically generated column relates to the query.

## Fields

* aggregated​By

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The names of the dimension columns this column is aggregated (grouped) by.

* comparison​Reference

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  What the column is compared against. For benchmark columns, the percentile (e.g. `p50`); for comparison columns, the comparison period or date offset. Interpret based on `type`.

* original​Column​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The query column this dynamic column was derived from (e.g. `total_sales`).

* type

  [Shopifyql​Dynamic​Column​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyqlDynamicColumnType)

  non-null

  The kind of dynamic column.

***

## Map

### Fields with this object

* [ShopifyqlTableDataColumn.dynamicColumnMetadata](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlTableDataColumn#field-ShopifyqlTableDataColumn.fields.dynamicColumnMetadata)
