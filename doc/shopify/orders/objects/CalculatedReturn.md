---
title: CalculatedReturn - GraphQL Admin
description: A calculated return.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedReturn'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedReturn.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Calculated​Return

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

A calculated return.

## Fields

* exchange​Line​Items

  [\[Calculated​Exchange​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedExchangeLineItem)

  non-null

  A list of calculated exchange line items.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* return​Line​Items

  [\[Calculated​Return​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedReturnLineItem)

  non-null

  A list of calculated return line items.

* return​Shipping​Fee

  [Calculated​Return​Shipping​Fee](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedReturnShippingFee)

  The calculated return shipping fee.

***

## Map

No referencing types

***

## Queries

* [return​Calculate](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnCalculate)

  query

  Calculates the financial outcome of a [`Return`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return) without creating it. Use this query to preview return costs before initiating the actual return process.

  The calculation provides detailed breakdowns of refund amounts, taxes, [`RestockingFee`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RestockingFee) charges, return shipping fees, and order-level discount adjustments based on the [`FulfillmentLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItem) objects that customers select for return.

  Learn more about building for [return management](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

  * input

    [Calculate​Return​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateReturnInput)

    required

    ### Arguments

    The input fields for calculating a return.

  ***

***

## CalculatedReturn Queries

### Queried by

* [return​Calculate](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnCalculate)
