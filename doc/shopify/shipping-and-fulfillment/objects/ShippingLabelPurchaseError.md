---
title: ShippingLabelPurchaseError - GraphQL Admin
description: The shipping label purchase processing failure.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLabelPurchaseError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLabelPurchaseError.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shipping​Label​Purchase​Error

object

Requires `read_orders` access scope.

The shipping label purchase processing failure.

## Fields

* code

  [Shipping​Label​Purchase​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShippingLabelPurchaseErrorCode)

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

### Fields with this object

* [ShippingLabelPurchaseResult.errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLabelPurchaseResult#field-ShippingLabelPurchaseResult.fields.errors)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ShippingLabelPurchaseError Implements

### Implements

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
