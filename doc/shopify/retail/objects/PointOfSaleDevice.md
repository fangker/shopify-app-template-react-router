---
title: PointOfSaleDevice - GraphQL Admin
description: Represents a mobile device that Shopify Point of Sale has been installed on.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevice'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevice.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Point​Of​Sale​Device

object

Requires `read_orders` access scope, `read_marketplace_orders` access scope or `read_point_of_sale_devices` access scope.

Represents a mobile device that Shopify Point of Sale has been installed on.

## Fields

* active​Payment​Session

  [Point​Of​Sale​Device​Payment​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession)

  The currently open payment session for this device.

* cash​Drawer

  [Cash​Drawer](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer)

  The cash drawer that this device is currently assigned to.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

***

## Map

### Fields and connections with this object

* [CashDrawer.pointOfSaleDevices](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer#field-CashDrawer.fields.pointOfSaleDevices)
* [OrderTransaction.device](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.device)
* [PointOfSaleDeviceConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PointOfSaleDeviceConnection#returns-nodes)
* [PointOfSaleDeviceEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDeviceEdge#field-PointOfSaleDeviceEdge.fields.node)
* [PointOfSaleDevicePaymentSession.pointOfSaleDevice](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession#field-PointOfSaleDevicePaymentSession.fields.pointOfSaleDevice)

***

## Queries

* [point​Of​Sale​Device](https://shopify.dev/docs/api/admin-graphql/latest/queries/pointOfSaleDevice)

  query

  Returns a `PointOfSaleDevice` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `PointOfSaleDevice` to return.

  ***

***

## PointOfSaleDevice Queries

### Queried by

* [point​Of​Sale​Device](https://shopify.dev/docs/api/admin-graphql/latest/queries/pointOfSaleDevice)

***

## Mutations

* [point​Of​Sale​Device​Assign​To​Cash​Drawer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDeviceAssignToCashDrawer)

  mutation

  Assigns a point of sale device to a cash drawer, removing any prior assignment.

  * cash​Drawer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The cash drawer to assign the device to.

  * point​Of​Sale​Device​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The point of sale device to assign.

  ***

***

## PointOfSaleDevice Mutations

### Mutated by

* [point​Of​Sale​Device​Assign​To​Cash​Drawer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDeviceAssignToCashDrawer)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## PointOfSaleDevice Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
