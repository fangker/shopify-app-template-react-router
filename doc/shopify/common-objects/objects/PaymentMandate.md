---
title: PaymentMandate - GraphQL Admin
description: |-
  A payment instrument and the permission
  the owner of the instrument gives to the merchant to debit it.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandate'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandate.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Payment​Mandate

object

Requires `read_payment_mandate` access scope.

A payment instrument and the permission the owner of the instrument gives to the merchant to debit it.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID of a payment mandate.

* payment​Instrument

  [Payment​Instrument!](https://shopify.dev/docs/api/admin-graphql/latest/unions/PaymentInstrument)

  non-null

  The outputs details of the payment instrument.

***

## Map

### Fields with this object

* [OrderPaymentCollectionDetails.vaultedPaymentMethods](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderPaymentCollectionDetails#field-OrderPaymentCollectionDetails.fields.vaultedPaymentMethods)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## PaymentMandate Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
