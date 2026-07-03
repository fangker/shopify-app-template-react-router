---
title: VaultCreditCard - GraphQL Admin
description: Represents a credit card payment instrument.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/VaultCreditCard'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/VaultCreditCard.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Vault​Credit​Card

object

Requires `read_payment_mandate` access scope.

Represents a credit card payment instrument.

## Fields

* billing​Address

  [Customer​Credit​Card​Billing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerCreditCardBillingAddress)

  The billing address of the card.

* brand

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The brand for the card.

* expired

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the card has been expired.

* expiry​Month

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The expiry month of the card.

* expiry​Year

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The expiry year of the card.

* last​Digits

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The last four digits for the card.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the card holder.

***

## Map

### Possible type in

* [Payment​Instrument](https://shopify.dev/docs/api/admin-graphql/latest/unions/PaymentInstrument)
