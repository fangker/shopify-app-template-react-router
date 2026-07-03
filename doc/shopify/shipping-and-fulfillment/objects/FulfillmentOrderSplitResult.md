---
title: FulfillmentOrderSplitResult - GraphQL Admin
description: The result of splitting a fulfillment order.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSplitResult
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSplitResult.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Fulfillment​Order​Split​Result

object

Requires `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope or `read_third_party_fulfillment_orders` access scope.

The result of splitting a fulfillment order.

## Fields

* fulfillment​Order

  [Fulfillment​Order!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  non-null

  The original fulfillment order as a result of the split.

* remaining​Fulfillment​Order

  [Fulfillment​Order!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  non-null

  The remaining fulfillment order as a result of the split.

* replacement​Fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The replacement fulfillment order if the original fulfillment order wasn't in a state to be split.

***

## Map

No referencing types

***

## Mutations

* [fulfillment​Order​Split](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSplit)

  mutation

  Splits [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects by moving the specified [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects and quantities into a new fulfillment order.

  If the original fulfillment order can't be split due to its current state, then the mutation creates a replacement fulfillment order instead.

  * fulfillment​Order​Splits

    [\[Fulfillment​Order​Split​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderSplitInput)

    required

    ### Arguments

    The fulfillment orders, line items and quantities to be split into new fulfillment orders.

  ***

***

## FulfillmentOrderSplitResult Mutations

### Mutated by

* [fulfillment​Order​Split](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSplit)
