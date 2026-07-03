---
title: cashTrackingSession - GraphQL Admin
description: Returns a `CashTrackingSession` resource by ID.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/cashTrackingSession
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/cashTrackingSession.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# cash​Tracking​Session

query

Returns a `CashTrackingSession` resource by ID.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the `CashTrackingSession` to return.

***

## Possible returns

* Cash​Tracking​Session

  [Cash​Tracking​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession)

  Tracks the balance in a cash drawer for a point of sale device over the course of a shift.

  * adjustments

    [Cash​Tracking​Adjustment​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingAdjustmentConnection)

    non-null

    The adjustments made to the cash drawer during this session.

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

    * reverse

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * sort​Key

      [Adjustments​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AdjustmentsSortKeys)

      Default:TIME

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    ***

  * cash​Tracking​Enabled

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether this session is tracking cash payments.

  * cash​Transactions

    [Order​Transaction​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderTransactionConnection)

    non-null

    The cash transactions made during this session.

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

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * id

          id

        * kind

          string

        - Filter by `id` range.

        - Example:
          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

      * processed\_at

        time

    * reverse

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * sort​Key

      [Cash​Tracking​Session​Transactions​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CashTrackingSessionTransactionsSortKeys)

      Default:PROCESSED\_AT

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    ***

  * closing​Balance

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The counted cash balance when the session was closed.

  * closing​Note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The note entered when the session was closed.

  * closing​Staff​Member

    [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

    The user who closed the session.

  * closing​Time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    When the session was closed.

  * expected​Balance

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The expected balance at the end of the session or the expected current balance for sessions that are still open.

  * expected​Closing​Balance

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The amount that was expected to be in the cash drawer at the end of the session, calculated after the session was closed.

  * expected​Opening​Balance

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The amount expected to be in the cash drawer based on the previous session.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * location

    [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

    The location of the point of sale device during this session.

  * net​Cash​Sales

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The net cash sales made for the duration of this cash tracking session.

  * opening​Balance

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The counted cash balance when the session was opened.

  * opening​Note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The note entered when the session was opened.

  * opening​Staff​Member

    [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

    The user who opened the session.

  * opening​Time

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    When the session was opened.

  * register​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The register name for the point of sale device that this session is tracking cash for.

  * total​Adjustments

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The sum of all adjustments made during the session, excluding the final adjustment.

  * total​Cash​Refunds

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The sum of all cash refunds for the duration of this cash tracking session.

  * total​Cash​Sales

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The sum of all cash sales for the duration of this cash tracking session.

  * total​Discrepancy

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The total discrepancy for the session including starting and ending.

***

## Examples

* ### cashTrackingSession reference
