---
title: OrderStagedChangeAddLineItemDiscount - GraphQL Admin
description: The discount applied to an item that was added during the current order edit.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeAddLineItemDiscount
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeAddLineItemDiscount.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Order​Staged​Change​Add​Line​Item​Discount

object

Requires `read_order_edits` access scope.

The discount applied to an item that was added during the current order edit.

## Fields

* description

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The description of the discount.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* value

  [Pricing​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/PricingValue)

  non-null

  The pricing value of the discount.

***

## Map

### Possible type in

* [Order​Staged​Change](https://shopify.dev/docs/api/admin-graphql/latest/unions/OrderStagedChange)

***

## Mutations

* [order​Edit​Add​Line​Item​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddLineItemDiscount)

  mutation

  Applies a discount to a [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) during an order edit session. The discount can be either a fixed amount or percentage value.

  To modify pricing on specific line items, use this mutation after starting an order edit with the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation. The changes remain staged until you commit them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * discount

    [Order​Edit​Applied​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAppliedDiscountInput)

    required

    ### Arguments

    The discount to add to the line item.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit.

  * line​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the calculated line item to add the discount to.

  ***

***

## OrderStagedChangeAddLineItemDiscount Mutations

### Mutated by

* [order​Edit​Add​Line​Item​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddLineItemDiscount)
