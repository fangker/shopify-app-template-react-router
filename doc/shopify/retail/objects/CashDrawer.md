---
title: CashDrawer - GraphQL Admin
description: A cash drawer for cash management.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Cash​Drawer

object

Requires `read_cash_tracking` access scope.

A cash drawer for cash management.

## Fields

* balance

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The current balance in the cash drawer.

* cash​Activities

  [Cash​Activity​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashActivityConnection)

  non-null

  The activities on the cash drawer.

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

  * sort​Key

    [Cash​Activities​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CashActivitiesSortKeys)

    Default:TIME

    Sort the underlying list by the given key.

  * staff​Member​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Filter activities by staff member.

  ***

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A unique ID for the cash drawer.

* location

  [Location!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  non-null

  The location of the cash drawer.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the cash drawer.

* net​Sales

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The net sales for this cash drawer.

  * date​Range

    [Cash​Drawer​Date​Range​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CashDrawerDateRangeInput)

    required

    ### Arguments

    The date and time range for filtering net sales.

  ***

* point​Of​Sale​Devices

  [Point​Of​Sale​Device​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/PointOfSaleDeviceConnection)

  The Point of Sale devices assigned to this cash drawer.

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

  ***

* total​Adjustments

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The total adjustments for this cash drawer.

  * date​Range

    [Cash​Drawer​Date​Range​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CashDrawerDateRangeInput)

    required

    ### Arguments

    The date and time range for filtering adjustments.

  ***

* total​Discrepancies

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The total discrepancies for this cash drawer.

  * date​Range

    [Cash​Drawer​Date​Range​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CashDrawerDateRangeInput)

    required

    ### Arguments

    The date and time range for filtering discrepancies.

  ***

* total​Refunds

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The total refunds for this cash drawer.

  * date​Range

    [Cash​Drawer​Date​Range​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CashDrawerDateRangeInput)

    required

    ### Arguments

    The date and time range for filtering refunds.

  ***

* total​Sales

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The total sales for this cash drawer.

  * date​Range

    [Cash​Drawer​Date​Range​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CashDrawerDateRangeInput)

    required

    ### Arguments

    The date and time range for filtering sales.

  ***

***

## Map

### Fields and connections with this object

* [CashDrawerConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashDrawerConnection#returns-nodes)
* [CashDrawerEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawerEdge#field-CashDrawerEdge.fields.node)
* [PointOfSaleDevice.cashDrawer](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevice#field-PointOfSaleDevice.fields.cashDrawer)
* [PointOfSaleDevicePaymentSession.cashDrawer](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession#field-PointOfSaleDevicePaymentSession.fields.cashDrawer)

***

## Queries

* [cash​Drawer](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashDrawer)

  query

  Returns a `CashDrawer` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `CashDrawer` to return.

  ***

* [cash​Drawers](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashDrawers)

  query

  A list of cash drawers in the shop.

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

      * location\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

***

## CashDrawer Queries

### Queried by

* [cash​Drawer](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashDrawer)
* [cash​Drawers](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashDrawers)

***

## Mutations

* [cash​Drawer​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashDrawerCreate)

  mutation

  Creates a cash drawer in a provided location.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location the cash drawer is located in.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The name of the cash drawer.

  ***

* [cash​Drawer​Find​Or​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashDrawerFindOrCreate)

  mutation

  Finds or creates a cash drawer for cash management. Also ensures the provided device is assigned to the drawer.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location the cash drawer is located in.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The name of the cash drawer.

  * point​Of​Sale​Device​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The point of sale device to assign to the cash drawer.

  ***

* [cash​Drawer​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashDrawerUpdate)

  mutation

  Updates a cash drawer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the cash drawer to update.

  * input

    [Cash​Drawer​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CashDrawerUpdateInput)

    required

    The input fields for updating a cash drawer.

  ***

***

## CashDrawer Mutations

### Mutated by

* [cash​Drawer​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashDrawerCreate)
* [cash​Drawer​Find​Or​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashDrawerFindOrCreate)
* [cash​Drawer​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashDrawerUpdate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## CashDrawer Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
