---
title: fulfillmentOrderReportProgress - GraphQL Admin
description: Reports the progress of an open or in-progress fulfillment order.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReportProgress
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReportProgress.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# fulfillment​Order​Report​Progress

mutation

Requires `write_merchant_managed_fulfillment_orders` access scope or `write_assigned_fulfillment_orders` access scope. Also: The user must have fulfill\_and\_ship\_orders permission.

Reports the progress of an open or in-progress fulfillment order.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the fulfillment order for which the progress report is targetting.

* progress​Report

  [Fulfillment​Order​Report​Progress​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderReportProgressInput)

  The details of the progress report for the fulfillment order.

***

## Fulfillment​Order​Report​Progress​Payload returns

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order on which a mark as in progress update has been specified.

* user​Errors

  [\[Fulfillment​Order​Report​Progress​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderReportProgressUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### fulfillmentOrderReportProgress reference
