---
title: OrderCreateManualPaymentOrderCreateManualPaymentError - GraphQL Admin
description: >-
  An error that occurs during the execution of a order create manual payment
  mutation.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateManualPaymentOrderCreateManualPaymentError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateManualPaymentOrderCreateManualPaymentError.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Order​Create​Manual​Payment​Order​Create​Manual​Payment​Error

object

Requires `read_orders` access scope. Also: The user must have mark\_orders\_as\_paid permission.

An error that occurs during the execution of a order create manual payment mutation.

## Fields

* code

  [Order​Create​Manual​Payment​Order​Create​Manual​Payment​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCreateManualPaymentOrderCreateManualPaymentErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

* [order​Create​Manual​Payment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment)

  mutation

  Records a manual payment for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) that isn't fully paid. Use this mutation to track payments received outside the standard checkout process, such as cash, check, bank transfer, or other offline payment methods.

  You can specify the payment [amount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment#arguments-amount), [method name](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment#arguments-paymentMethodName), and [when it was processed](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment#arguments-processedAt).

  * amount

    [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    ### Arguments

    The manual payment amount to be created.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the order to create a manual payment for.

  * payment​Method​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the payment method used for creating the payment. If none is provided, then the default manual payment method ('Other') will be used.

  * processed​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format) when a manual payment was processed. If you're importing transactions from an app or another platform, then you can set processedAt to a date and time in the past to match when the original transaction was created.

  ***

***

## OrderCreateManualPaymentOrderCreateManualPaymentError Mutations

### Mutated by

* [order​Create​Manual​Payment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## OrderCreateManualPaymentOrderCreateManualPaymentError Implements

### Implements

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
