---
title: FulfillmentOrderMergeResult - GraphQL Admin
description: The result of merging a set of fulfillment orders.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMergeResult
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMergeResult.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Fulfillment​Order​Merge​Result

object

Requires `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope or `read_third_party_fulfillment_orders` access scope.

The result of merging a set of fulfillment orders.

## Fields

* fulfillment​Order

  [Fulfillment​Order!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  non-null

  The new fulfillment order as a result of the merge.

***

## Map

No referencing types

***

## Mutations

* [fulfillment​Order​Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderMerge)

  mutation

  Merges a set or multiple sets of fulfillment orders together into one based on line item inputs and quantities.

  * fulfillment​Order​Merge​Inputs

    [\[Fulfillment​Order​Merge​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderMergeInput)

    required

    ### Arguments

    One or more sets of fulfillment orders to be merged.

  ***

***

## FulfillmentOrderMergeResult Mutations

### Mutated by

* [fulfillment​Order​Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderMerge)
