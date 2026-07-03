---
title: pointOfSaleDevice - GraphQL Admin
description: Returns a `PointOfSaleDevice` resource by ID.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/pointOfSaleDevice'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/pointOfSaleDevice.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# point​Of​Sale​Device

query

Returns a `PointOfSaleDevice` resource by ID.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the `PointOfSaleDevice` to return.

***

## Possible returns

* Point​Of​Sale​Device

  [Point​Of​Sale​Device](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevice)

  Represents a mobile device that Shopify Point of Sale has been installed on.

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

## Examples

* ### pointOfSaleDevice reference
