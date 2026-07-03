---
title: pointOfSaleDeviceAssignToCashDrawer - GraphQL Admin
description: >-
  Assigns a point of sale device to a cash drawer, removing any prior
  assignment.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDeviceAssignToCashDrawer
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDeviceAssignToCashDrawer.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# point​Of​Sale​Device​Assign​To​Cash​Drawer

mutation

Requires `write_cash_tracking` access scope.

Assigns a point of sale device to a cash drawer, removing any prior assignment.

## Arguments

* cash​Drawer​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The cash drawer to assign the device to.

* point​Of​Sale​Device​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The point of sale device to assign.

***

## Point​Of​Sale​Device​Assign​To​Cash​Drawer​Payload returns

* point​Of​Sale​Device

  [Point​Of​Sale​Device](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevice)

  The point of sale device.

* user​Errors

  [\[Point​Of​Sale​Device​Assign​To​Cash​Drawer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDeviceAssignToCashDrawerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### pointOfSaleDeviceAssignToCashDrawer reference
