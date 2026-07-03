---
title: ShippingLabelPurchaseResult - GraphQL Admin
description: A result object that tracks the progress of a shipping label purchase request.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLabelPurchaseResult
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLabelPurchaseResult.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shipping​Label​Purchase​Result

object

Requires `read_orders` access scope. Also: The user requires `buy_shipping_labels` permission.

A result object that tracks the progress of a shipping label purchase request.

## Fields

* done

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  This indicates if the job is still queued or has been run.

* errors

  [\[Shipping​Label​Purchase​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLabelPurchaseError)

  non-null

  Returns any error that occurred during shipping label purchase.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID that's returned when running an asynchronous mutation.

* shipping​Labels

  [\[Shipping​Label!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLabel)

  non-null

  The shipping labels associated with the purchase request.

* status

  [Shipping​Label​Purchase​Result​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShippingLabelPurchaseResultStatus)

  non-null

  The current status of the shipping label purchase result.

***

## Map

No referencing types

***

## Mutations

* [shipping​Label​Purchase](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingLabelPurchase)

  mutation

  Purchases shipping label.

  * shipping​Label​Purchase

    [Shipping​Label​Purchase​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShippingLabelPurchaseInput)

    required

    ### Arguments

    The input for the shipping label purchase.

  ***

***

## ShippingLabelPurchaseResult Mutations

### Mutated by

* [shipping​Label​Purchase](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingLabelPurchase)

***

## Interfaces

* * [Job​Result](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/JobResult)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## ShippingLabelPurchaseResult Implements

### Implements

* [Job​Result](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/JobResult)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
