---
title: ShopPayInstallmentsPaymentDetails - GraphQL Admin
description: Shop Pay Installments payment details related to a transaction.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayInstallmentsPaymentDetails
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayInstallmentsPaymentDetails.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shop​Pay​Installments​Payment​Details

object

Requires `read_orders` access scope.

Shop Pay Installments payment details related to a transaction.

## Fields

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

## ShopPayInstallmentsPaymentDetails Implements

### Implements

* [Base​Payment​Details](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/BasePaymentDetails)
