---
title: LocalPaymentMethodsPaymentDetails - GraphQL Admin
description: Local payment methods payment details related to a transaction.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalPaymentMethodsPaymentDetails
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalPaymentMethodsPaymentDetails.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Local​Payment​Methods​Payment​Details

object

Requires `read_orders` access scope.

Local payment methods payment details related to a transaction.

## Fields

* payment​Descriptor

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The descriptor by the payment provider. Only available for Amazon Pay and Buy with Prime.

* payment​Method​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of payment method used by the buyer.

***

## Map

### Possible type in

* [Payment​Details](https://shopify.dev/docs/api/admin-graphql/latest/unions/PaymentDetails)

***

## Interfaces

* [Base​Payment​Details](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/BasePaymentDetails)

  interface

***

## LocalPaymentMethodsPaymentDetails Implements

### Implements

* [Base​Payment​Details](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/BasePaymentDetails)
