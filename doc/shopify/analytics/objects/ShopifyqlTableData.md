---
title: ShopifyqlTableData - GraphQL Admin
description: The result of a ShopifyQL query.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlTableData'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlTableData.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopifyql​Table​Data

object

Requires `read_reports` access scope.

The result of a ShopifyQL query.

## Fields

* columns

  [\[Shopifyql​Table​Data​Column!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlTableDataColumn)

  non-null

  The columns of the table.

* row​Metadata

  [\[Shopifyql​Row​Metadata!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlRowMetadata)

  non-null

  Per-row metadata, aligned by index with `rows`.

* rows

  [JSON!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

  non-null

  The rows of the table.

***

## Map

### Fields with this object

* [ShopifyqlQueryResponse.tableData](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlQueryResponse#field-ShopifyqlQueryResponse.fields.tableData)
