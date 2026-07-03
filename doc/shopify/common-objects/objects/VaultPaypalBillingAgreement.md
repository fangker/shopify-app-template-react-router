---
title: VaultPaypalBillingAgreement - GraphQL Admin
description: Represents a paypal billing agreement payment instrument.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/VaultPaypalBillingAgreement
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/VaultPaypalBillingAgreement.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Vault​Paypal​Billing​Agreement

object

Requires `read_payment_mandate` access scope.

Represents a paypal billing agreement payment instrument.

## Fields

* inactive

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the paypal billing agreement is inactive.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The paypal account name.

* paypal​Account​Email

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The paypal account email address.

***

## Map

### Possible type in

* [Payment​Instrument](https://shopify.dev/docs/api/admin-graphql/latest/unions/PaymentInstrument)
