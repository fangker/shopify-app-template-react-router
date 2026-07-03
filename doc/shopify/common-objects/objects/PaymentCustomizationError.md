---
title: PaymentCustomizationError - GraphQL Admin
description: An error that occurs during the execution of a payment customization mutation.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Payment​Customization​Error

object

Requires `read_payment_customizations` access scope.

An error that occurs during the execution of a payment customization mutation.

## Fields

* code

  [Payment​Customization​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentCustomizationErrorCode)

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

* [payment​Customization​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationActivation)

  mutation

  Activates or deactivates payment customizations for the shop. Payment customizations allow apps to hide, reorder, or rename payment methods at checkout based on cart contents, customer attributes, or other conditions. Use this to toggle customizations on or off without deleting them.

  * enabled

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    required

    ### Arguments

    The enabled status of the payment customizations.

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The global IDs of the payment customizations.

  ***

* [payment​Customization​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationCreate)

  mutation

  Creates a new payment customization for the shop. Payment customizations let apps modify the payment methods shown at checkout — hiding, reordering, or renaming options based on cart contents, customer attributes, or other business logic.

  * payment​Customization

    [Payment​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentCustomizationInput)

    required

    ### Arguments

    The input data used to create the payment customization.

  ***

* [payment​Customization​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationDelete)

  mutation

  Permanently deletes a payment customization. Once deleted, the customization will no longer affect which payment methods appear at checkout.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the payment customization.

  ***

* [payment​Customization​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationUpdate)

  mutation

  Updates an existing payment customization, modifying its configuration for how payment methods are displayed at checkout. Use this to change the customization's title or enabled state. The customization's function can't be changed once set; create a new payment customization to use a different function.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the payment customization.

  * payment​Customization

    [Payment​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentCustomizationInput)

    required

    The input data used to update the payment customization.

  ***

***

## PaymentCustomizationError Mutations

### Mutated by

* [payment​Customization​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationActivation)
* [payment​Customization​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationCreate)
* [payment​Customization​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationDelete)
* [payment​Customization​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## PaymentCustomizationError Implements

### Implements

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
