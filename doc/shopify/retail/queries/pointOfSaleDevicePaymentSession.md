---
title: pointOfSaleDevicePaymentSession - GraphQL Admin
description: Lookup a point of sale device payment session by ID.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/pointOfSaleDevicePaymentSession
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/pointOfSaleDevicePaymentSession.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# point​Of​Sale​Device​Payment​Session

query

Lookup a point of sale device payment session by ID.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the point of sale device payment session.

***

## Possible returns

* Point​Of​Sale​Device​Payment​Session

  [Point​Of​Sale​Device​Payment​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession)

  Tracks the payment activity for a point of sale device.

  * cash​Activities

    [Cash​Activity​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashActivityConnection)

    non-null

    The activities on the point of sale device payment session.

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

        * type

          string

        - Filter by `id` range.

        - Example:
          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

    * reverse

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * staff​Member​Id

      [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

      Filter activities by staff member.

    ***

  * cash​Counted​At​Close

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The cash that was physically counted when the point of sale device payment session was closed.

  * cash​Counted​At​Open

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The cash that was physically counted when the point of sale device payment session was opened.

  * cash​Drawer

    [Cash​Drawer!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer)

    non-null

    The cash drawer associated with the point of sale device payment session. The session's sales andcash tracking activity will affect the cash drawer's balance.

  * closing​Adjustment

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The amount that the cash drawer balance was adjusted when the session was closed.

  * closing​Balance

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The counted balance of the cash drawer when the point of sale device payment session was closed.

  * closing​Note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The note associated with the point of sale device payment session closing.

  * closing​Staff​Member

    [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

    The staff member who closed the point of sale device payment session.

  * closing​Time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The time the point of sale device payment session was closed.

  * currency

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The currency of the point of sale device payment session.

  * expected​Cash​At​Close

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The expected cash when the point of sale device payment session was closed.

  * expected​Cash​At​Open

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The expected balance of the cash drawer when the point of sale device payment session was opened.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * location

    [Location!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

    non-null

    The location associated with the point of sale device payment session. The session's sales and cash tracking activity will contribute to the location's totals.

  * net​Cash​Sales

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The net cash sales for the point of sale device payment session.

  * net​Sales

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The net sales for the duration of this session.

  * opening​Note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The note associated with the point of sale device payment session opening.

  * opening​Staff​Member

    [Staff​Member!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

    non-null

    The staff member who opened the point of sale device payment session.

  * opening​Time

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The time the point of sale device payment session was opened.

  * point​Of​Sale​Device

    [Point​Of​Sale​Device!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevice)

    non-null

    The point of sale device.

  * status

    [Point​Of​Sale​Device​Payment​Session​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PointOfSaleDevicePaymentSessionStatus)

    non-null

    Whether the point of sale device payment session is open. Payments can't be processed or refunded during a closed session, and the cash drawer balance can't be adjusted or corrected.

  * total​Adjustments

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The total adjustments for the point of sale device payment session.

  * total​Cash​Refunds

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The total cash refunds for the point of sale device payment session.

  * total​Cash​Sales

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The total cash sales for the point of sale device payment session.

  * total​Discrepancy

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The total discrepancy for the point of sale device payment session.

  * total​Refunds

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The sum of all refunds for the duration of this session.

  * total​Sales

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The sum of all sales for the duration of this session.

  * totals​Ready

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the point of sale device payment session totals are ready.

***

## Examples

* ### pointOfSaleDevicePaymentSession reference
