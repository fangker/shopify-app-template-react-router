---
title: ShopifyqlQueryResponse - GraphQL Admin
description: A response to a ShopifyQL query.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlQueryResponse
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlQueryResponse.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopifyql​Query​Response

object

Requires `read_reports` access scope.

A response to a ShopifyQL query.

## Fields

* parse​Errors

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A list of parse errors, if parsing fails.

* table​Data

  [Shopifyql​Table​Data](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlTableData)

  The result in a tabular format with column and row data.

***

## Map

No referencing types

***

## Queries

* [shopifyql​Query](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyqlQuery)

  query

  Executes a [ShopifyQL query](https://shopify.dev/docs/apps/build/shopifyql) to analyze store data and returns results in a tabular format.

  The response includes column metadata with names, data types, and display names, along with the actual data rows. If the query contains syntax errors, then the response provides parse error messages instead of table data.

  Read the [ShopifyQL reference documentation](https://shopify.dev/docs/api/shopifyql) for more information on how to write ShopifyQL queries.

  * query

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    A ShopifyQL query string following the [ShopifyQL syntax](https://shopify.dev/docs/api/shopifyql). Queries must include `FROM` to specify the data source (such as `sales`, `orders`, or `customers`) and `SHOW` to select metrics and dimensions. Example: `FROM sales SHOW total_sales TIMESERIES month SINCE -12m`.

  ***

***

## ShopifyqlQueryResponse Queries

### Queried by

* [shopifyql​Query](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyqlQuery)
