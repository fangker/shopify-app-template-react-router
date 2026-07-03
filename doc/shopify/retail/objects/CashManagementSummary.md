---
title: CashManagementSummary - GraphQL Admin
description: A summary of cash management data.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementSummary
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementSummary.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Cash​Management​Summary

object

Requires `read_cash_tracking` access scope.

A summary of cash management data.

## Fields

* cash​Balance​At​End

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The cumulative cash balance of all cash drawers at the provided end date.

* cash​Balance​At​Start

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The cumulative cash balance of all cash drawers at the provided start date.

* net​Cash

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The net cash flow during the specified period (start date to end date). Calculated as net sales plus adjustments.

* sessions​Closed

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of sessions that were closed during the specified period (start date to end date).

* sessions​Opened

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of sessions that were opened during the specified period (start date to end date).

* total​Discrepancies

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The total cash discrepancies during the specified period (start date to end date).

***

## Map

No referencing types

***

## Queries

* [cash​Management​Location​Summary](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashManagementLocationSummary)

  query

  Summary of cash management data for a location.

  * end​Date

    [Date!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Date)

    required

    ### Arguments

    The end date to summarize to.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    Identifies the location to get the summary for.

  * start​Date

    [Date!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Date)

    required

    The start date to summarize from.

  ***

* [cash​Management​Shop​Summary](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashManagementShopSummary)

  query

  Summary of cash management data across all locations with a POS Pro subscription for a shop, filtered by currency.

  * currency​Code

    [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

    required

    ### Arguments

    The currency code to filter by.

  * end​Date

    [Date!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Date)

    required

    The end date to summarize to.

  * start​Date

    [Date!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Date)

    required

    The start date to summarize from.

  ***

***

## CashManagementSummary Queries

### Queried by

* [cash​Management​Location​Summary](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashManagementLocationSummary)
* [cash​Management​Shop​Summary](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashManagementShopSummary)
