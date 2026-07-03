---
title: PointOfSaleDevicePaymentSession - GraphQL Admin
description: Tracks the payment activity for a point of sale device.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Point​Of​Sale​Device​Payment​Session

object

Requires `read_cash_tracking` access scope.

Tracks the payment activity for a point of sale device.

## Fields

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

## Map

### Fields and connections with this object

* [CashActivity.paymentSession](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CashActivity#fields-paymentSession)
* [CashAdjustmentActivity.paymentSession](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashAdjustmentActivity#field-CashAdjustmentActivity.fields.paymentSession)
* [CashCountActivity.paymentSession](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashCountActivity#field-CashCountActivity.fields.paymentSession)
* [CashTransactionActivity.paymentSession](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTransactionActivity#field-CashTransactionActivity.fields.paymentSession)
* [PointOfSaleDevice.activePaymentSession](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevice#field-PointOfSaleDevice.fields.activePaymentSession)
* [PointOfSaleDevicePaymentSessionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PointOfSaleDevicePaymentSessionConnection#returns-nodes)
* [PointOfSaleDevicePaymentSessionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSessionEdge#field-PointOfSaleDevicePaymentSessionEdge.fields.node)

***

## Queries

* [point​Of​Sale​Device​Payment​Session](https://shopify.dev/docs/api/admin-graphql/latest/queries/pointOfSaleDevicePaymentSession)

  query

  Lookup a point of sale device payment session by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the point of sale device payment session.

  ***

* [point​Of​Sale​Device​Payment​Sessions](https://shopify.dev/docs/api/admin-graphql/latest/queries/pointOfSaleDevicePaymentSessions)

  query

  A list of point of sale device payment sessions in the shop.

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

    * closing\_date

      date

    * closing\_time

      time

    * * id

        id

      * is\_open

        boolean

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * location\_id

      id

    * opening\_date

      date

    * opening\_time

      time

    * point\_of\_sale\_device\_id

      id

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Point​Of​Sale​Device​Payment​Session​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/PointOfSaleDevicePaymentSessionSortKeys)

    Default:ID

    Sort the underlying list by the given key.

  ***

***

## PointOfSaleDevicePaymentSession Queries

### Queried by

* [point​Of​Sale​Device​Payment​Session](https://shopify.dev/docs/api/admin-graphql/latest/queries/pointOfSaleDevicePaymentSession)
* [point​Of​Sale​Device​Payment​Sessions](https://shopify.dev/docs/api/admin-graphql/latest/queries/pointOfSaleDevicePaymentSessions)

***

## Mutations

* [point​Of​Sale​Device​Payment​Session​Adjust](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionAdjust)

  mutation

  Adds an adjustment to a point of sale device payment session.

  * cash

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    ### Arguments

    The amount of cash being added or removed.

  * note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The note entered when the adjustment was made.

  * point​Of​Sale​Device​Payment​Session​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The point of sale device payment session to be adjusted.

  * reason​Code​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The reason code for the adjustment.

  * staff​Member​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The staff member who made the adjustment.

  * time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The time when the adjustment was made. Defaults to the current time.

  ***

* [point​Of​Sale​Device​Payment​Session​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionClose)

  mutation

  Closes a point of sale device payment session.

  * balance

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    ### Arguments

    The counted cash drawer balance when the session was closed.

  * note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The note entered when the session was closed.

  * point​Of​Sale​Device​Payment​Session​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The point of sale device payment session to be closed.

  * reason​Code​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The reason code for closing the session.

  * staff​Member​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The staff member who closed the session.

  * time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    When the session was closed. Defaults to the current time.

  ***

* [point​Of​Sale​Device​Payment​Session​Count](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionCount)

  mutation

  Records a mid-session cash count for a point of sale device payment session.

  * balance

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    ### Arguments

    The counted cash drawer balance.

  * note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The note entered when the count was performed.

  * point​Of​Sale​Device​Payment​Session​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The point of sale device payment session to record a count for.

  * reason​Code​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The reason code for the count.

  * staff​Member​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The staff member who performed the count.

  * time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    When the count was performed. Defaults to the current time.

  ***

* [point​Of​Sale​Device​Payment​Session​Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionOpen)

  mutation

  Opens a point of sale device payment session.

  * balance

    [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    ### Arguments

    The counted cash drawer balance when the session was opened.

  * note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The note entered when the session was opened.

  * point​Of​Sale​Device​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The point of sale device to which this session belongs.

  * reason​Code​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The reason code for the session opening.

  * staff​Member​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The staff member who opened the session.

  * time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The time the session was opened. Defaults to the current time.

  ***

***

## PointOfSaleDevicePaymentSession Mutations

### Mutated by

* [point​Of​Sale​Device​Payment​Session​Adjust](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionAdjust)
* [point​Of​Sale​Device​Payment​Session​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionClose)
* [point​Of​Sale​Device​Payment​Session​Count](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionCount)
* [point​Of​Sale​Device​Payment​Session​Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionOpen)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## PointOfSaleDevicePaymentSession Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
