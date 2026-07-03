---
title: cashManagementShopSummary - GraphQL Admin
description: >-
  Summary of cash management data across all locations with a POS Pro
  subscription for a shop, filtered by currency.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/cashManagementShopSummary
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/cashManagementShopSummary.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# cash​Management​Shop​Summary

query

Requires `read_cash_tracking` access scope. Also: User must have `view_payment_tracking_sessions_pos_channel` or `payments_cash_session_history` retail role permission.

Summary of cash management data across all locations with a POS Pro subscription for a shop, filtered by currency.

## Arguments

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  required

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

## Possible returns

* Cash​Management​Summary

  [Cash​Management​Summary!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementSummary)

  A summary of cash management data.

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

## Examples

* ### cashManagementShopSummary reference
