---
title: ShopifyqlRowMetadata - GraphQL Admin
description: >-
  Per-row metadata for a ShopifyQL result, aligned by index with the table's
  rows.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlRowMetadata
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlRowMetadata.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopifyql​Row​Metadata

object

Requires `read_reports` access scope.

Per-row metadata for a ShopifyQL result, aligned by index with the table's rows.

## Fields

* null​Cell​Translations

  [\[Shopifyql​Null​Cell​Translation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlNullCellTranslation)

  non-null

  Localized display text for null cells in this row, by column.

* raw​Resource​Ids

  [\[\[String!\]!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Raw resource IDs associated with the row, aligned by column index. Each entry is the list of IDs for that column (empty when the cell has none). These are raw ShopifyQL identifiers (numeric IDs, or image URLs for some schemas), not GIDs.

* top​NRemainder​Column​Names

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Names of the columns whose values were rolled into the top-N "Other" remainder bucket.

***

## Map

### Fields with this object

* [ShopifyqlTableData.rowMetadata](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlTableData#field-ShopifyqlTableData.fields.rowMetadata)
