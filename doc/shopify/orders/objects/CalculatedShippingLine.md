---
title: CalculatedShippingLine - GraphQL Admin
description: >-
  A shipping line item involved in order editing that may be newly added or have
  new changes applied.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedShippingLine
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedShippingLine.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Calculated​Shipping​Line

object

Requires `read_order_edits` access scope.

A shipping line item involved in order editing that may be newly added or have new changes applied.

## Fields

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A globally-unique ID.

* price

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The price of the shipping line when sold and before applying discounts. This field includes taxes if `Order.taxesIncluded` is true. Otherwise, this field doesn't include taxes for the shipping line.

* staged​Status

  [Calculated​Shipping​Line​Staged​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CalculatedShippingLineStagedStatus)

  non-null

  The staged status of the shipping line.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the shipping line.

***

## Map

### Fields with this object

* [CalculatedOrder.shippingLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.shippingLines)

***

## Mutations

* [order​Edit​Add​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddShippingLine)

  mutation

  Adds a custom shipping line to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) during an edit session. Specify the shipping title and price to create a new [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine).

  Returns a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) showing the order with edits applied but not yet saved. To save your changes, use the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit to which the shipping line is added.

  * shipping​Line

    [Order​Edit​Add​Shipping​Line​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAddShippingLineInput)

    required

    The shipping line to be added.

  ***

***

## CalculatedShippingLine Mutations

### Mutated by

* [order​Edit​Add​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddShippingLine)
